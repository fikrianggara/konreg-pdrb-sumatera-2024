import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  // Define an array with month names
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const dayNames = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  // Split the input date string into components
  const [month, day, year] = dateString.split("/");

  // Convert the month from "mm" to the corresponding month name
  const monthName = monthNames[parseInt(month) - 1];

  const dateObj = new Date(dateString);

  const dayName = dayNames[dateObj.getDay()];

  // Return the formatted date string as "day monthName"
  return `${dayName}, ${day} ${monthName} ${year}`;
}
