import React from "react";

type Props = {
  totalPrice: number;
};

export default function Header({ totalPrice }: Props) {
  return (
    <div className="header">
      <p className="logo">Bon appetit</p>
      <p>
        <strong>Total price: ${totalPrice}</strong>
      </p>
    </div>
  );
}
