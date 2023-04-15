import Layout from "./layout";
import {
  createBrowserRouter,
} from "react-router-dom";
import PostDetail from "./layout/PostDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: '/',
      element: <div>HOME</div>,
    }, {
      path: 'about-us',
      element: <div>About Us</div>
    }, {
      path: '/post/:postId',
      element: <PostDetail />
    }]
  },
]);

export default router