import { useState } from "react";
import { JobAPI } from "../api";

export function JobCreate() {
  const [quantity, setQuantity] = useState<string | "">("");

  const create = () => {
    const quantity_number = Number(quantity);
    if (isNaN(quantity_number)) {
      throw Error("Invalid number");
    }
    if (quantity_number > 1000000) {
      throw Error("Number too large");
    }
    JobAPI.add_multiple(quantity_number);
    setQuantity("");
  };

  return (
    <div className="py-16 w-full flex justify-center">
      <div className="flex">
        <label className="m-4 flex items-center justify-end w-60 block text-gray-700 text-sm font-bold">
          Jobs Quantity
        </label>
        <input
          className="m-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={quantity}
          placeholder="Quantity"
          onChange={(event) => setQuantity(event.target.value)}
        />
        <button
          className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={create}
        >
          Create
        </button>
      </div>
    </div>
  );
}
