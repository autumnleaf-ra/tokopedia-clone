import React from "react";
import Search from "../assets/search.svg";
import Cart from "../assets/cart.svg";
import Notification from "../assets/notification.svg";
import Message from "../assets/message.svg";
import Logo from "../assets/logo.svg";

function NavHeader() {
  return (
    <>
      <div className="mx-4 py-3 flex flex-row">
        <div className="">
          <a className="" href="https://tokopedia.com">
            <img className="fixed mt-1" src={Logo} alt="tokopedia-logo" />
          </a>
        </div>
        <div className="ml-[170px] mt-2 pr-3">
          <span>Kategori</span>
        </div>
        <div className="border-2 rounded-lg flex sm:mb-[35px] xl:mb-[10px]">
          <div className="mr-5">
            <img className="search" src={Search} alt="search logo" />
          </div>
          <div className="">
            <input
              className="search-bar sm:w-[400px] xl:w-[60rem]"
              type="text"
              placeholder="Cari di Tokopedia"
            />
          </div>
        </div>
        {/* Notification User */}
        <div className="flex mr-[40px]">
          <div className="pl-[30px] mt-1 md:pr-[50px] sm:pr-[40px]">
            <a href="">
              <img className="cart fixed " src={Cart} alt="" />
            </a>
          </div>
          <div className="md:pr-[50px]">
            <a href="">
              <img src={Notification} className="notification fixed" alt="" />
            </a>
          </div>
          <div className="md:pr-[50px]">
            <a href="">
              <img src={Message} className="notification fixed" alt="" />
            </a>
          </div>
          <div className="vertical-line"></div>
        </div>
        <div className="border rounded-lg px-10 ml-4 sm:h-[50px]">
          <p className=" mt-3 sm:text-[10px] md:text-base">Nama Toko</p>
        </div>
        <div className="border rounded-lg px-10 ml-4">
          <p className="mt-3">Nama Profile</p>
        </div>
      </div>
      <div className="container flex justify-center pr-[40rem] text-gray-500 pb-2">
        <a href="">
          <small className="pr-2 hover:text-green-600">Lampu Gantung</small>
        </a>
        <a href="">
          <small className="pr-2 hover:text-green-600">Samsung</small>
        </a>
        <a href="">
          <small className="pr-2 hover:text-green-600">Dus Jumbo</small>
        </a>
        <a href="">
          <small className="pr-2 hover:text-green-600">Plavon Pvc</small>
        </a>
        <a href="">
          <small className="pr-2 hover:text-green-600">Tab s8</small>
        </a>
      </div>
    </>
  );
}

export default NavHeader;
