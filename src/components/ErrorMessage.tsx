import { ReactNode } from "react";

type ErrorMessageProps ={
  children: ReactNode;
}

export function ErrorMessage({children}: ErrorMessageProps) {
  return (
    <div className="text-center my-4 bg-red-600 text-white font-bold p-3">
      {children}
    </div>
  )
}
