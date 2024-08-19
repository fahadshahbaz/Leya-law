import { useState } from "react";
import { leyanav, bars, crossblack } from "../assets/";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  const navItems = ["Security", "Clients", "Customers", "Blog", "Login"];
  return (
    <>
      <nav className="border border-gray-300 w-[90%] flex justify-between items-center mx-auto m-4 p-2 rounded-xl">
        <div>
          <img src={leyanav} alt="leya logo" className="ml-1 size-9" />
        </div>
        <div>
          <ul className="md:flex justify-between items-center gap-6 px-3 text-sm hidden">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={
                  item === "Login"
                    ? "bg-black px-[1rem] py-[0.4rem] text-white rounded-lg uppercase tracking-wide"
                    : ""
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={toggleMobileMenu}
          className="block md:hidden bg-black rounded-md overflow-hidden p-2 cursor-pointer"
        >
          <img
            src={bars}
            alt="menu icom"
            className="size-5 rounded-md filter invert"
          />
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col filter backdrop-blur-2xl">
          <div className="flex justify-between items-center w-full p-4 my-5">
            <div className="absolute right-4 top-[0.4rem] cursor-pointer m-5 bg-black rounded-md p-2">
              <img
                onClick={toggleMobileMenu}
                src={crossblack}
                alt="Close menu"
                className="cursor-pointer size-5 filter invert"
              />
            </div>
          </div>
          <ul className="flex flex-col items-center gap-6 text-xl mx-5 font-medium">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={
                  item === "Login"
                    ? " cursor-pointer bg-black text-center w-full py-[0.4rem] text-white rounded-md uppercase tracking-wide"
                    : "cursor-pointer w-full p-4"
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
