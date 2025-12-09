import React from "react";

const FilterSection = ({
  search,
  setSearch,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleBrandChange,
  categoryOnlyData,
  brandOnlyData
}) => {
  return (
    <div className="w-full lg:w-[300px] p-4 bg-white border rounded-md shadow-sm">

      <h1 className="font-semibold text-xl mb-3">Category</h1>
      <div className="flex flex-col gap-2">
        {(categoryOnlyData || []).map((item, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="checkbox"
              name={item}
              checked={category === item}
              value={item}
              onChange={setCategory}
            />
            <button className="cursor-pointer uppercase">{item}</button>
          </div>
        ))}
      </div>

      <h1 className="mt-5 font-semibold text-xl mb-3">Brand</h1>
      <select
        className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
        value={brand}
        onChange={handleBrandChange}
      >
        {(brandOnlyData || []).map((item, index) => (
          <option key={index} value={item}>
            {(item || "").toUpperCase()}
          </option>
        ))}
      </select>

      <h1 className="mt-5 font-semibold text-xl mb-3">Price</h1>
      <input
        type="range"
        min="0"
        max="2000"
        value={priceRange}
        onChange={e => setPriceRange(e.target.value)}
        className="w-full"
      />
      <p className="text-black mt-2">Up to: <span className="font-semibold">${priceRange}</span></p>

      <h1 className="mt-5 font-semibold text-xl mb-3">Search</h1>
      <input
        type="text"
        placeholder="Search Products..."
        className="w-full p-2 border-gray-200 border-2 rounded-md"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

    </div>
  );
};

export default FilterSection;
