"use client";

import { useState } from "react";
import ReviewModal from "@/components/ReviewModal"; // Import the modal

export default function ReviewButton({ movieTitle }) {  // Receive movieTitle as a prop
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);  // Open the modal on button click
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);  // Close the modal
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Request a Review for {movieTitle}  {/* Use movieTitle in the button text */}
      </button>

      {/* Render the modal only if it's open */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        movieTitle={movieTitle}  // Pass the movieTitle to the modal as well
      />
    </div>
  );
}
