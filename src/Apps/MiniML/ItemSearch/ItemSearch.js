import React from "react";

import "./ItemSearch.css";

const formatMoney = (
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ","
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount && amount - i > 0
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {
    console.log(e);
  }
};

export const ItemSearch = ({ title, image, price, freeShipping, onClick }) => {
  return (
    <div className="ItemSearch">
      <img
        className="ItemSearch_Image"
        src={image}
        alt={title}
        onClick={onClick}
      />
      <div className="ItemSearch_Price">
        <div>$ {formatMoney(price ? price.amount : 0)}</div>
        <div className="ItemSearch_FeePrice">
          en 36x $ {formatMoney(price ? price.amount / 36 : 0)}
        </div>
      </div>
      <div className="ItemSearch_Title" onClick={onClick}>
        {title}
      </div>
      <div className="ItemSearch_ShippingInfo">
        {freeShipping ? "Envío gratis" : ""}
      </div>
    </div>
  );
};
