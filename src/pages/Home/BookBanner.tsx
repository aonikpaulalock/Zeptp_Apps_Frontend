import Container from "../../components/Container/Container";
import image from "../../assets/HeroSection2.png"
const BookBanner = () => {
  return (
    <div className="bg-custom-gradient bg-cover bg-center p-6 md:p-8 mb-10">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-white text-left md:w-2/4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-5">
              Welcome to our
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8">
              Book Community
            </h2>
            <p className="text-sm sm:text-base md:text-base lg:text-base leading-6 md:leading-8 font-poppins font-semibold text-white mb-8 md:mb-14">
              Books are gateways to infinite worlds, offering wisdom, adventure, and human experience.
            </p>
            <button className="px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 border-0 font-bold bg-primary">
              Browse Book
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full mb-8 md:mb-0 md:w-2/4">
            <img
              src={image}
              alt="Hero Section"
              className="w-full h-auto sm:w-3/4 sm:h-auto md:w-full sm:mx-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  )
};

export default BookBanner;