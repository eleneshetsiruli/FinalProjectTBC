// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export function PriceRange() {
//   return (
//     <Select>
//       <SelectTrigger className="w-[180px] h-12 text-blue-600">
//         <SelectValue placeholder="Select a price" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectItem value="apple">Low to hight</SelectItem>
//           <SelectItem value="banana">Hight to low</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   );
// }

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PriceRangeProps {
  onSortChange: (sortOrder: string) => void;
}

export function PriceRange({ onSortChange }: PriceRangeProps) {
  return (
    <Select onValueChange={onSortChange}>
      <SelectTrigger className="w-[180px] h-12 text-blue-600">
        <SelectValue placeholder="Select a price" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="low-to-high">Low to High</SelectItem>
          <SelectItem value="high-to-low">High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
