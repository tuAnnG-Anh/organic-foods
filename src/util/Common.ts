import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"

export function classNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumber = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "k+"
  }
  return num.toString()
}
