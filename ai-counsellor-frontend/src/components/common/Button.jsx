export default function Button({ children, onClick, type = "button", variant = "primary", disabled }) {
  const base = "px-4 py-2 rounded font-medium transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${disabled && "opacity-50 cursor-not-allowed"}`}
    >
      {children}
    </button>
  );
}
