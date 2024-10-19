import { LayoutProps } from "../../types";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Layout = ({
  children,
}: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
};

export default Layout;