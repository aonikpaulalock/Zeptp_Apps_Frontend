import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle, FaYoutube } from "react-icons/fa";
import Container from "../Container/Container";
import FooterLogo from "../../assets/newLogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] px-8 md:px-6 ">
      <Container>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8 px-4 py-20">
          {/* ===== First Column (Logo) ======= */}
          <div className="flex items-center justify-center sm:justify-start">
            <img src={FooterLogo} alt="Footer Logo" />
          </div>

          {/* ========= Second Column ========= */}
          <div className="flex flex-col items-start">
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-primary font-medium font-poppins">Home</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Contest</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">How it works</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Articles</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">About us</a></li>
            </ul>
          </div>

          {/* ======= Third Column ======== */}
          <div className="flex flex-col items-start">
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Privacy</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Terms and Conditions</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Support</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">FAQ</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Expert</a></li>
            </ul>
          </div>

          {/* ========= Fourth Column ======== */}
          <div className="flex flex-col items-start">
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Team</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Photographer</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Hire</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Complaints</a></li>
            </ul>
          </div>
        </div>

        {/* ======== Bottom Section for Social Icons ======== */}
        <div className="pb-16 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-base leading-[45px] text-primary font-bold mb-4 sm:mb-0">Follow us on</p>
          <div className="flex justify-center space-x-8 text-gray-600 text-lg">
            <a href="#">
              <FaFacebookF className="hover:text-[#1877F2]" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-[#1DA1F2]" />
            </a>
            <a href="#">
              <FaLinkedinIn className="hover:text-[#0077B5]" />
            </a>
            <a href="#">
              <FaGoogle className="hover:text-[#F4B400]" />
            </a>
            <a href="#">
              <FaYoutube className="hover:text-[#FF0000]" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
