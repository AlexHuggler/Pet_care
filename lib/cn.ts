import clsx, { type ClassValue } from "clsx";

/** Tiny className helper around clsx (keeps conditional class lists readable). */
export const cn = (...inputs: ClassValue[]) => clsx(inputs);
