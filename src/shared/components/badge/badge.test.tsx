import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Badge, BadgeProps } from "./badge";

describe("<Badge />", () => {
  it("renders correctly", () => {
    // Arrange
    expect.assertions(3);
    const props: BadgeProps = {
      label: "Badge text",
      variant: "grey",
    };

    // Act
    render(<Badge {...props} />);

    // Assert
    expect(screen.getByTestId("badge")).toBeVisible();
    expect(screen.getByTestId("badge-label")).toBeVisible();
    expect(screen.getByText(props.label)).toBeVisible();
  });

  it("throws an error when invalid variant is provided", () => {
    // Arrange
    expect.assertions(2);
    const props: BadgeProps = {
      label: "Badge text",
      variant: "invalid" as any,
    };

    // Act & Assert
    expect(() => {
      render(<Badge {...props} />);
    }).toThrow("Invalid badge variant");
  });

  it("applies the correct class for secondary variant", () => {
    // Arrange
    const variant = "secondary";
    const text = "Secondary Badge";

    // Act
    render(<Badge variant={variant} label={text} />);
    const badgeElement = screen.getByTestId("badge");

    // Assert
    expect(badgeElement).toHaveClass("text-primary bg-secondary");
  });

  it("displays the correct text", () => {
    // Arrange
    const variant = "grey";
    const text = "Grey Badge";

    // Act
    render(<Badge variant={variant} label={text} />);
    const badgeElement = screen.getByTestId("badge");

    // Assert
    expect(badgeElement).toHaveTextContent("Grey Badge");
  });
});
