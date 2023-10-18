import React from "react";
import BoxBarang from "./BoxBarang";
import BoxTagihan from "./BoxTagihan";

const Category = () => {
  return (
    <>
      <div className="flex flex-row border-2 rounded-lg container h-[10rem] ml-[90px] w-[85rem] gap-4 pl-[50px] pt-2">
        <div className="flex-col">
          <div className="mr-[30rem]">Kategori Pilihan</div>
          <div>
            <BoxBarang />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mr-[30rem]">Top Up & Tagihan</div>
          <div>
            <BoxTagihan />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
