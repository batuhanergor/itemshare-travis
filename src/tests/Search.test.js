import React from "react";
import { render } from "../test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "../components/Search";

test("search testing", () => {
  const { getByTestId } = render(
    <Router>
      <Search searchQuery="clothing" />
    </Router>
  );
  const input = getByTestId("search-input");
  expect(input.value).toBe("clothing");
});
