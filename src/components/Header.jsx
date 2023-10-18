import React from "react";
import NavHeader from "./NavHeader";

const Header = () => {
  return (
    <>
      <div className="shadow-md sm:w-[70rem] md:w-[70rem] xl:w-full ">
        <div className="bg-slate-100 py-1 sticky">
          {/* left row */}
          <div className="flex flex-row px-4 text-gray-400">
            <div className="basis-8/12">
              <small className="">Download Tokopedia App</small>
            </div>
            <div className="flex">
              <div className="pr-7">
                <small>Tentang Tokopedia</small>
              </div>
              <div className="pr-7">
                <small>Mitra Tokopedia</small>
              </div>
              <div className="pr-7">
                <small>Pusat Edukasi Seller</small>
              </div>
              <div className="pr-7">
                <small>Promo</small>
              </div>
              <div className="pr-7">
                <small>Tokopedia Care</small>
              </div>
            </div>
          </div>
        </div>
        <NavHeader />
      </div>
    </>
  );
};

export default Header;
