import React from "react";
import { render } from "@testing-library/react-native";
import ComponentsScreen from "./ComponentsScreen";

describe("ComponentsScreen", () => {
  it("renders the correct text", () => {
    const { getByText } = render(<ComponentsScreen />);
    const textElement = getByText("This is the components screen");
    expect(textElement).toBeTruthy();
  });

  it("applies the correct styles", () => {
    const { getByText } = render(<ComponentsScreen />);
    const textElement = getByText("This is the components screen");
    expect(textElement.props.style).toEqual({ fontSize: 45 });
  });
});
