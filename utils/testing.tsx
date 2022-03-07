import React, { ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { DoorsProvider } from "@doors/core"
import "@testing-library/jest-dom/extend-expect"

function TestWrapper({ children }) {
  return <DoorsProvider>{children}</DoorsProvider>
}

export function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, { wrapper: TestWrapper, ...options })
}

export * from "@testing-library/react"
export { customRender as render }
export {
  act,
  renderHook,
  RenderHookResult,
  RenderHookOptions,
} from "@testing-library/react-hooks"
export { default as userEvent } from "@testing-library/user-event"
