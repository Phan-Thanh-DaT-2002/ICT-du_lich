// import { render, screen } from '@testing-library/react';
// import App from './App';

import { RouterProvider } from "react-router-dom";
import { router } from "./router.js";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
