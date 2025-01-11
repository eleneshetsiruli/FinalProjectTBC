export const Button = ({ onClick, className, children }: any) => (
  <button
    onClick={onClick}
    className={`btn btn-primary px-4 py-2 text-white rounded-md hover:bg-opacity-80 transition duration-300 ${className}`}
  >
    {children}
  </button>
);
