import React from "react";
import { Data } from "../data";
import { ReactComponent as Check } from "../assets/check-mark.svg";

type Props = {
  item: Data;
  onClick: (id: string) => void;
  checked?: boolean;
};

export default function FoodListItem({ item, onClick, checked }: Props) {
  return (
    <div className="card" onClick={() => onClick(item.id)}>
      <div>
        <img src={`assets/${item.image}.jpeg`} className="card-image" />
      </div>
      <div className="card-info">
        <div className="card_title-wrapper">
          <p>
            <span className="title">{item.title}</span>
            <span className="price">${item.price}</span>
          </p>
        </div>
        <div className="card_description">{item.description}</div>
        {checked && (
          <div className="check-icon">
            <Check />
          </div>
        )}
      </div>
    </div>
  );
}
