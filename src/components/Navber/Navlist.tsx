import { Link } from "react-router-dom";

const Navlist = () => {
  return (
    <>
    <ul className="md:flex md:space-x-6 space-y-2 md:space-y-0">
      <li className="cursor-pointer">
        <Link to="/" className="text-primary font-poppins font-semibold text-[16px] leading-normal">Home</Link>
      </li>
      <li className="cursor-pointer">
        <Link to="/wishlist" className="text-SecondPrimary font-poppins font-medium text-[16px] leading-normal">Wishlist</Link>
      </li>
    </ul>
    </>
  )
};

export default Navlist;