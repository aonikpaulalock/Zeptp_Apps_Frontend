import { createBrowserRouter } from "react-router-dom";
import Wishlist from "../pages/Home/Wishlist";
import Home from "../pages/Home/Home";
import Layout from "../components/layout/Layout";
import BookDetails from "../pages/Home/BookDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>
      <Home />
    </Layout>,
  },
  {
    path: "/wishlist",
    element: (
      <Layout>
        <Wishlist /> 
      </Layout>
    ),
  },
  {
    path: "/books/:id",
    element: (
      <Layout>
        <BookDetails /> 
      </Layout>
    ),
  },
]);