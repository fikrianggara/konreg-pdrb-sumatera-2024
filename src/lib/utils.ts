import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  // Define an array with month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  // Split the input date string into components
  const [month, day, _] = dateString.split("/");

  // Convert the month from "mm" to the corresponding month name
  const monthName = monthNames[parseInt(month) - 1];

  // Return the formatted date string as "day monthName"
  return `${day} ${monthName}`;
}
