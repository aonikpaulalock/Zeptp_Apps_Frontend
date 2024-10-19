
import { useState } from "react";
import Container from "../Container/Container";
import Logo from "../../assets/newLogo.png"
import Navlist from "../Navber/Navlist";
import NavIcon from "../Navber/NavIcon";
import Menubar from "../Navber/Menubar";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
      <Container>
        <nav className="px-5 py-6 w-full mx-auto">
          <div className="mx-auto flex justify-between items-center">
            {/* ======= Logo ======= */}
            <img src={Logo} alt="" className="w-12 h-12" />

            {/* ======= Desktop Menu ======= */}
            <ul className="hidden md:flex space-x-10">
              <Navlist />
            </ul>

            {/*======= Icons (Notification + Avatar) ====== */}
            <NavIcon />

            {/* ======= Mobile Menu Button ======= */}
            <Menubar
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>

          {/* ======= Mobile Menu ======= */}
          {isMenuOpen && (
            <ul className="md:hidden mt-4 space-y-4">
              <Navlist />
            </ul>
          )}
        </nav>
      </Container>
  )
};

export default Header;

