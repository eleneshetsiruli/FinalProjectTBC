// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { PaginationControlsProps } from "../types";

// const PaginationControls = ({
//   page,
//   totalPages,
//   onPrevious,
//   onNext,
//   onPageChange,
// }: PaginationControlsProps) => {
//   return (
//     <Pagination>
//       <PaginationContent>
//         <PaginationItem>
//           <PaginationPrevious
//             href="#"
//             onClick={onPrevious}
//             className={`${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
//           />
//         </PaginationItem>

//         {[...Array(totalPages)].map((_, index) => (
//           <PaginationItem key={index}>
//             <PaginationLink
//               href="#"
//               onClick={() => onPageChange(index + 1)}
//               className={`${
//                 page === index + 1 ? "bg-blue-500 text-white" : ""
//               }`}
//             >
//               {index + 1}
//             </PaginationLink>
//           </PaginationItem>
//         ))}

//         <PaginationItem>
//           <PaginationNext
//             href="#"
//             onClick={onNext}
//             className={`${
//               page === totalPages ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           />
//         </PaginationItem>
//       </PaginationContent>
//     </Pagination>
//   );
// };

// export default PaginationControls;
