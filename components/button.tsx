"use client";

import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
  children: React.ReactNode | string;
};

export default function Button(props: ButtonProps) {
  const { className, children } = props;

  const static_class_name: string =
    "py-2 px-6 capitalize rounded-lg ring-1 text-xl ring-violet-500 text-violet-500 focus-within:shadow-md focus-within:ring-2 focus-within:ring-violet-600 focus-within:outline-none focus-within:shadow-violet-300 focus-within:bg-violet-600 focus-within:text-white duration-150 hover:bg-violet-500 hover:text-white font-medium";

  return (
    <button {...props} className={twMerge(static_class_name, className)}>
      {children}
    </button>
  );
}
