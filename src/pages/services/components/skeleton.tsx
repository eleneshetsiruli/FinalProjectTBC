import { Skeleton } from "@/components/ui/skeleton";

export const RenderSkeletons = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="w-[350px] h-auto m-4 p-4 border border-gray-300 rounded-md bg-white shadow-md"
        >
          <Skeleton className="w-full h-40 rounded-md mb-4" />
          <Skeleton className="w-3/4 h-6 rounded-md mb-2" />
          <Skeleton className="w-1/2 h-4 rounded-md mb-2" />
          <Skeleton className="w-2/3 h-4 rounded-md" />
        </div>
      ))}
    </div>
  );
};
