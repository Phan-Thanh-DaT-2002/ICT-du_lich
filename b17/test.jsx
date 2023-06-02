import React from "react";
import LoginForm from "../Login";
import { render, screen, fireEvent } from "@testing-library/react";

// Testing case: Username not entered
test("Username not entered", () => {
  render(<LoginForm />);
  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Please enter the username.")).toBeInTheDocument();
});

// Testing case: Password not entered
test("Password not entered", () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "admin" },
  });
  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Please enter the password.")).toBeInTheDocument();
});

// Testing case: Incorrect username and password entered
test("Incorrect username and password", () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "incorrect" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "incorrect" },
  });
  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Incorrect login information.")).toBeInTheDocument();
});

// Testing case: Correct username and password entered
test("Display welcome message when username and password are correct", () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "admin" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "admin123" },
  });
  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Welcome, Admin!")).toBeInTheDocument();
});
