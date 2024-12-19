import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "./button";
import { describe, expect, it, vi } from "vitest";

describe("<Button />", () => {
  it("renders", () => {
    // Arrange
    expect.assertions(2);
    const props: ButtonProps = {
      onClick: vi.fn(),
      label: "Click me",
      className: "custom-class",
    };
    // Act
    render(<Button {...props} />);

    // Assert
    expect(screen.getByText(props.label)).toBeVisible();
    expect(screen.getByTestId("button")).toBeVisible();
  });

  it("triggers onClick correctly", () => {
    // Arrange
    expect.assertions(2);
    const props: ButtonProps = {
      onClick: vi.fn(),
      label: "Click me",
      className: "custom-class",
    };
    // Act
    render(<Button {...props} />);

    // Assert
    expect(props.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByTestId("button"));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it("applies the disabled attribute correctly", () => {
    // Arrange
    expect.assertions(1);
    const props: ButtonProps = {
      onClick: vi.fn(),
      label: "Click me",
      className: "custom-class",
      disabled: true,
    };
    // Act
    render(<Button {...props} />);

    // Assert
    expect(screen.getByTestId("button")).toBeDisabled();
  });

  it("applies the custom className correctly", () => {
    // Arrange
    expect.assertions(1);
    const props: ButtonProps = {
      onClick: vi.fn(),
      label: "Click me",
      className: "custom-class",
    };
    // Act
    render(<Button {...props} />);

    // Assert
    expect(screen.getByTestId("button")).toHaveClass("custom-class");
  });
});
