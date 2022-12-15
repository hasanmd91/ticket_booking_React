import React from "react";

function PriceCalc({
  price,
  kids,
  adults,
  elders,
  paymentHandler,
  totalPrice,
}) {
  return (
    <div className="w-[620px] mx-auto m-[50px]">
      <table className="w-full border shadow-lg">
        <thead className="bg-sky-300">
          <tr>
            <th className="p-2 w-[150px] border text-left font-bold">
              Travel Class
            </th>
            <th className="p-2 w-[150px] border text-center font-bold">
              Unit Price
            </th>
            <th className="p-2 w-[150px] border text-center font-bold">
              Units
            </th>
            <th className="p-2 w-[150px] border text-center font-bold">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border text-left p-3">Adult</td>
            <td className="border text-center p-3">{price * 1}</td>
            <td className="border text-center p-3">{Number(adults)}</td>
            <td className="border text-center p-3">
              {(adults * price * 1).toFixed(2)}€
            </td>
          </tr>

          <tr>
            <td className="border text-left p-3">Kids/Students</td>
            <td className="border text-center p-3">{price * 1}</td>
            <td className="border text-center p-3">{Number(kids)}</td>
            <td className="border text-center p-3">
              {(kids * price * 0.45).toFixed(2)}€
            </td>
          </tr>

          <tr>
            <td className="border text-left p-3">Elders/Veterans</td>
            <td className="border text-center p-3">{price * 1}</td>
            <td className="border text-center p-3">{Number(elders)}</td>
            <td className="border text-center p-3">
              {(elders * price * 0.45).toFixed(2)}€
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-xl mt-4">
        Total to Pay:&nbsp;
        {totalPrice}€
      </p>
      {totalPrice > 0 && (
        <button className="py-2 px-4 mt-4" onClick={paymentHandler}>
          Pay
        </button>
      )}
    </div>
  );
}

export default PriceCalc;
