import {
  cloneElement,
  createContext,
  RefObject,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react"
import { Popover } from "./popover"

export function Tooltip({
  targetRef,
  defaultOpen = false,
  id,
  sx = {},
  ...props
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    open && (
      <Popover
        {...props}
        role="tooltip"
        aria-describedby={id}
        targetRef={targetRef}
        sx={sx}
      />
    )
  )
}

type MapValue = { target: RefObject<HTMLElement>; open: boolean }

const TooltipsContext =
  createContext<{ state: Map<string, MapValue>; registerTooltip: Function }>(
    null
  )

export function TooltipsProvider() {
  const [state, set] = useState(new Map<string, MapValue>())
  const registerTooltip = useCallback((key: string, value: MapValue) => {
    set(new Map(state.set(key, value)))
  }, [])
  return <TooltipsContext.Provider value={{ state, registerTooltip }} />
}

export function useTooltips() {
  const ctx = useContext(TooltipsContext)
  if (!ctx) throw Error("Must use tooltips hook within a tooltips provider.")
  return ctx
}

export function TooltipTarget({ id, defaultOpen, children }) {
  const { state, registerTooltip } = useTooltips()
  useLayoutEffect(() => {
    registerTooltip(id, defaultOpen)
  }, [id])
  return cloneElement(children, { role: "button" })
}

export function TooltipContent({ id, sx = {}, ...props }) {
  const { state } = useTooltips()
  const { target, open } = state.get(id)
  return (
    open && (
      <Popover
        {...props}
        role="tooltip"
        aria-describedby={id}
        targetRef={target}
        sx={sx}
      />
    )
  )
}
