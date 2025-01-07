import { useState } from "react";

export const useToggleSet = () => {
  const [toggledItems, setToggledItems] = useState<Set<string>>(new Set());

  const handleToggle = (itemId: string) => {
    setToggledItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return { toggledItems, handleToggle };
};
