import React from "react";

function TimeTable({ times }) {
  return (
    <div className="max-w-[1240px] mx-auto m-[50px]">
      <table className="w-full border shadow-lg">
        <thead className="bg-sky-300">
          <tr>
            <td className="p-2 w-[150px] border text-center font-bold">
              Departure
            </td>
            <td className="p-2 w-[150px] border text-center font-bold">
              Destination
            </td>
            <td className="p-2 w-[150px] border text-center font-bold">Time</td>
            <td className="p-2 w-[150px] border text-center font-bold">
              Price
            </td>
            <td className="p-2 w-[150px] border text-center font-bold">
              Action
            </td>
          </tr>
        </thead>
        <tbody>{times}</tbody>
      </table>
    </div>
  );
}

export default TimeTable;
