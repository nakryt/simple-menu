import React from "react";
import FoodListItem from "./FoodListItem";
import data, { TypeOfFood } from "../data";

type Props = {
  typeToShow: TypeOfFood;
  selectItem: (id: string) => void;
  checkedItems?: string[];
};

export default function FoodList({
  typeToShow,
  selectItem,
  checkedItems,
}: Props) {
  const sortedData =
    typeToShow === "all"
      ? data
      : data.filter((item) => item.typeOfFood === typeToShow);
  return (
    <div className="food-list">
      {sortedData.map((item) => (
        <FoodListItem
          key={item.id}
          checked={checkedItems?.indexOf(item.id) !== -1}
          item={item}
          onClick={selectItem}
        />
      ))}
    </div>
  );
}
