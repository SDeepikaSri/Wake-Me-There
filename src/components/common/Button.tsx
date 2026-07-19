import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-emerald-500 hover:bg-emerald-600 text-white",
    secondary:
      "bg-slate-700 hover:bg-slate-600 text-white",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3
        rounded-xl
        font-semibold
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}

export default Button;