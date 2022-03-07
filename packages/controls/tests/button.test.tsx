import React from "react"
import { render, screen } from "testing"
import { Button } from "../src"

describe("Button", () => {
  it("Has the correct role", () => {
    render(<Button>Hello World</Button>)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })
})
