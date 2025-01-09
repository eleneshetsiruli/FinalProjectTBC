import React, { useState } from "react";
import { PriceRangeSliderProps } from "../types";

export const PriceRangeSlider = ({
  min,
  max,
  onChange,
}: PriceRangeSliderProps) => {
  const [range, setRange] = useState<[number, number]>([min, max]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = Number(event.target.value);
    const newRange: [number, number] =
      index === 0 ? [value, range[1]] : [range[0], value];
    setRange(newRange);
    onChange(newRange);
  };

  return (
    <div className="my-4 flex items-center space-x-4 w-[100px] justify-center lg:flex-row flex-col">
      <div className="flex gap-2 ">
        <input
          type="number"
          min={min}
          max={max}
          value={range[0]}
          onChange={(e) => handleChange(e, 0)}
          className="w-16 border rounded p-1 text-center"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={range[0]}
          onChange={(e) => handleChange(e, 0)}
          className="flex-1"
        />
      </div>

      <span>-</span>

      <div className="flex  gap-2 ">
        <input
          type="range"
          min={min}
          max={max}
          value={range[1]}
          onChange={(e) => handleChange(e, 1)}
          className="flex-1"
        />
        <input
          type="number"
          min={min}
          max={max}
          value={range[1]}
          onChange={(e) => handleChange(e, 1)}
          className="w-16 border rounded p-1 text-center"
        />
      </div>
    </div>
  );
};
