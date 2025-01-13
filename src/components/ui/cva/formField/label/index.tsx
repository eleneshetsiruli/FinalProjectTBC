// import { cn } from "@/lib/utils";
// import { cva } from "class-variance-authority";
// import { LabelProps } from "../types";

// const labelCva = cva("font-medium", {
//   variants: {
//     color: {
//       secondary: "text-secondary",
//       primary: "text-[#868687]",
//     },
//     size: {
//       sm: "text-sm",
//       md: "text-base",
//       lg: "text-lg",
//     },
//   },
//   defaultVariants: {
//     color: "primary",
//     size: "md",
//   },
// });

// export const LabelCva: React.FC<LabelProps> = ({
//   children,
//   color = "primary",
//   size = "md",
//   className,
//   ...props
// }) => {
//   return (
//     <label className={cn(labelCva({ color, size }), className)} {...props}>
//       {children}
//     </label>
//   );
// };
