import { NavLink } from "react-router-dom";

const Navlist = () => {
  return (
    <>
      <ul className="md:flex md:space-x-6 space-y-2 md:space-y-0">
        <li className="cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-poppins text-[16px] leading-normal transition-colors duration-300 
              ${isActive ? 'text-primary font-bold' : 'text-SecondPrimary font-semibold'}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              `font-poppins text-[16px] leading-normal transition-colors duration-300 
              ${isActive ? 'text-primary font-bold' : 'text-SecondPrimary font-semibold'}`
            }
          >
            Wishlist
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navlist;
