import { leyanav } from "../assets/";

const Navbar = () => {
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
      </nav>
    </>
  );
};

export default Navbar;
