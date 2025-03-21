import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format date to readable format (e.g., "March 20, 2025")
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Format runtime from minutes to hours and minutes (e.g., "2h 15m")
export function formatRuntime(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  if (hours === 0) {
    return `${remainingMinutes}m`
  }

  return `${hours}h${remainingMinutes > 0 ? ` ${remainingMinutes}m` : ""}`
}

// Format money values to USD currency format with abbreviations for large numbers
export function formatMoney(amount: number): string {
  if (amount >= 1000000000) {
    return `$${(amount / 1000000000).toFixed(1)}B`
  }

  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`
  }

  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}K`
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount)
}

