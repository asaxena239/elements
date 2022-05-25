import {
  forwardRef,
  HTMLProps,
  MutableRefObject,
  useLayoutEffect,
  useReducer,
} from "react"
import { SXObject } from "@doors/core"
import { AnimatePresence, motion } from "framer-motion"
import { Popover } from "./popover"

function tooltipReducer(
  state: { open: boolean },
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case "OPEN":
      return { ...state, open: true }
    case "CLOSE":
      return { ...state, open: false }
    default:
      throw Error("unknown action")
  }
}
interface TooltipProps extends HTMLProps<"div"> {
  targetRef: MutableRefObject<HTMLElement>
  sx?: SXObject
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip({ children, targetRef, sx }, ref) {
    const [{ open }, dispatch] = useReducer(tooltipReducer, { open: false })
    useLayoutEffect(() => {
      function handleEnter(e) {
        dispatch({ type: "OPEN" })
      }
      function handleExit(e) {
        dispatch({ type: "CLOSE" })
      }
      const enterEvents = ["focus", "mouseenter"]
      const exitEvents = ["blur", "mouseleave"]
      if (targetRef.current) {
        enterEvents.forEach((evt) => {
          targetRef.current.addEventListener(evt, handleEnter, false)
        })
        exitEvents.forEach((evt) => {
          targetRef.current.addEventListener(evt, handleExit, false)
        })
      }
      return () => {
        if (targetRef.current) {
          enterEvents.forEach((evt) => {
            targetRef.current.removeEventListener(evt, handleEnter, false)
          })
          exitEvents.forEach((evt) => {
            targetRef.current.removeEventListener(evt, handleExit, false)
          })
        }
      }
    }, [targetRef.current])
    return (
      <AnimatePresence>
        {open && (
          <Popover
            // @ts-ignore
            as={motion.div}
            targetRef={targetRef}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{ p: 1, bg: "ui", ...sx }}
          >
            {children}
          </Popover>
        )}
      </AnimatePresence>
    )
  }
)
