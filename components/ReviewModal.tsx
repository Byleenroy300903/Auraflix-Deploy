"use client";

import { useState, useEffect } from "react";

export default function ReviewModal({
  isOpen,
  onClose,
  movieTitle,  // Add movieTitle as a prop
}: {
  isOpen: boolean;
  onClose: () => void;
  movieTitle: string;  // Define the type for movieTitle
}) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [location, setLocation] = useState<string>("Fetching location...");

  const GOOGLE_MAPS_API_KEY = ""; // Replace with your actual API key

  useEffect(() => {
    if (isOpen) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Fetch the human-readable location using Google Maps Geocoding API
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`)
            .then(response => response.json())
            .then(data => {
              const addressComponents = data.results[0]?.address_components || [];

              let district = "";
              let state = "";
              let nation = "";

              addressComponents.forEach(component => {
                const types = component.types;
                if (types.includes("administrative_area_level_2")) {
                  district = component.long_name; // District (or city-level area)
                }
                if (types.includes("locality") && !district) {
                  district = component.long_name; // Fallback to city if district is missing
                }
                if (types.includes("sublocality") && !district) {
                  district = component.long_name; // Fallback to sublocality if both are missing
                }
                if (types.includes("administrative_area_level_1")) {
                  state = component.long_name; // State/Province
                }
                if (types.includes("country")) {
                  nation = component.long_name; // Country
                }
              });

              // Final location format
              const finalLocation = `${district ? district + ", " : ""}${state}, ${nation}`;
              setLocation(finalLocation);
            })
            .catch(error => {
              console.error("Error fetching location:", error);
              setLocation("Location unavailable");
            });
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation("Location unavailable");
        }
      );
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (!rating || !review) {
      alert("Please provide a rating and a review.");
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
  
        // Fetch location details using reverse geocoding API
        const locationResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const locationData = await locationResponse.json();
  
        const district = locationData.address.city || locationData.address.county || "Unknown";
        const state = locationData.address.state || "Unknown";
        const nation = locationData.address.country || "Unknown";
  
        const data = {
          movieTitle,
          rating,
          review,
          latitude,
          longitude,
          district,
          state,
          nation,
        };
  
        fetch("https://auraflixdashboard-deploy.onrender.com/submit_review", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.message);
            onClose();
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Unable to fetch location. Please enable location services.");
      }
    );
  };
   

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-gray-900 text-white rounded-lg p-6 max-w-md w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-4">Please Leave a Review</h2>

        {/* Movie Title */}
        <textarea
          value={movieTitle}
          disabled
          className="w-full p-3 mb-4 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          rows={2}
        />

        {/* Star Rating */}
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-xl ${rating >= star ? "text-yellow-400" : "text-gray-500"} hover:text-yellow-400 transition-colors`}
            >
              ★
            </button>
          ))}
        </div>

        {/* Review Text */}
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here"
          className="w-full p-3 mb-4 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          rows={4}
        />

        {/* Location Display */}
        <div className="text-gray-300 mb-4">
          <strong>Location:</strong> {location}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
