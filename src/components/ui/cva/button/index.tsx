// import { cva } from "class-variance-authority";
// import { cn } from "@/lib/utils";
// import React from "react";
// import { ButtonProps } from "./types";

// const buttonStyless = cva(
//   "inline-flex items-center justify-center rounded-md font-medium transition-colors ",
//   {
//     variants: {
//       variant: {
//         default: "bg-card text-white hover:bg-[#e65c00] ",
//         outline:
//           "border border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white",
//         subtle: "bg-[#FF670033] text-[#FF6700] hover:bg-[#FF670066]",
//         ghost: "bg-transparent text-[#FF6700] hover:bg-[#FF670033]",
//       },
//       size: {
//         sm: "px-3 py-1 text-sm",
//         md: "px-4 py-2 text-base",
//         l: "w-[300px]",
//         lg: "px-5 py-3 text-lg",
//         full: "w-full",
//         custom: "w-[20px] h-[10px]",
//       },

//       height: {
//         sm: "h-8",
//         md: "h-10",
//         lg: "h-12",
//         custom: "h-[50px]",
//       },
//       rounded: {
//         none: "rounded-none",
//         sm: "rounded-sm",
//         md: "rounded-md",
//         lg: "rounded-lg",
//         full: "rounded-full",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "full",
//       rounded: "md",
//       height: "custom",
//     },
//   }
// );

// const ButtonCva: React.FC<ButtonProps> = ({
//   children,
//   className,
//   variant,
//   size,
//   rounded,
//   ...props
// }) => {
//   return (
//     <button
//       className={cn(buttonStyless({ variant, size, rounded }), className)}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default ButtonCva;
