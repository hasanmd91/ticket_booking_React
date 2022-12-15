import React from "react";

function PersonalInfo({ infoHandler, showPriceCalcHandler }) {
  return (
    <div className="w-[620px] mx-auto my-[50px] border p-4">
      <h2 className="text-2xl">Your Information</h2>
      <form className="py-2" onChange={infoHandler}>
        <div className="mb-2">
          <label className="block" htmlFor="name">
            Fullname:
          </label>
          <input
            className="border p-1 mt-1 w-[300px]"
            type="text"
            name="name"
            id="name"
            placeholder="For ex. John Doe"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block" htmlFor="phone">
            Email:
          </label>
          <input
            className="border p-1 mt-1 w-[300px]"
            type="email"
            name="email"
            id="email"
            placeholder="For ex. sample@example.com"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block" htmlFor="phone">
            Phone:
          </label>
          <input
            className="border p-1 mt-1 w-[300px]"
            type="tel"
            name="phone"
            id="phone"
            placeholder="For ex. 040-000-0000"
            required
          />
        </div>
        <p className="text-xl my-4">Passengers:</p>
        <div className="mb-2">
          <label className="inline-block w-[130px]" htmlFor="adults">
            Adults:
          </label>
          <input
            className="border ml-4 p-1"
            type="number"
            name="adults"
            id="adults"
            defaultValue={0}
            min="0"
            max="10"
          />
        </div>
        <div className="mb-2">
          <label className="inline-block w-[130px]" htmlFor="kids">
            Kids/Students:
          </label>
          <input
            className="border ml-4 p-1"
            type="number"
            name="kids"
            id="kids"
            defaultValue={0}
            min="0"
            max="10"
          />
        </div>
        <div className="mb-2">
          <label className="inline-block w-[130px]" htmlFor="elders">
            Elders/Veterans:
          </label>
          <input
            className="border ml-4 p-1"
            type="number"
            name="elders"
            id="elders"
            defaultValue={0}
            min="0"
            max="10"
          />
        </div>
        <button onClick={showPriceCalcHandler} className="py-2 px-4 mt-4">
          Book
        </button>
      </form>
      <p className="text-[12px]">
        * This is a project website. Please don't put sensitive information.
      </p>
    </div>
  );
}

export default PersonalInfo;
