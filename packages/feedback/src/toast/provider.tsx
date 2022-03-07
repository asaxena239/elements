import {
  createContext,
  Fragment,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
} from "react"
import { createPortal } from "react-dom"
import { Box } from "@doors/core"
import { getId } from "@doors/utils"
import { usePortal } from "@doors/hooks"
import { ToastObject, toastReducer } from "./reducer"
import { AnimatePresence } from "framer-motion"
import { Toast } from "./toast"

type verticalPositions = "top" | "bottom"
type horizontalPositions = "left" | "center" | "right"

interface ToastProviderOptions {
  position: `${verticalPositions}-${horizontalPositions}`
}

interface ToastProviderProps {
  options?: ToastProviderOptions
}

const durationDefaults = {
  blank: 3000,
  success: 2000,
  error: 5000,
  loading: Infinity,
}

export const ToastContext = createContext(null)

const getPosition = (pos) => {
  const top = pos.includes("top")
  const left = pos.includes("left")
  const right = pos.includes("center")
  const vertical = top ? { top: 0 } : { bottom: 0 }
  const horizontal = left
    ? { left: 0 }
    : right
    ? { right: 0 }
    : { right: 0, left: 0 }
  return { ...vertical, ...horizontal }
}

export function ToastProvider({
  options: { position } = { position: "bottom-left" },
  ...props
}: PropsWithChildren<ToastProviderProps>) {
  const portalTarget = usePortal()
  const positionStyles = getPosition(position)
  const [{ toasts, paused }, dispatch] = useReducer(toastReducer, {
    toasts: [],
    paused: false,
  })
  const createToast = useCallback((type = "blank") => {
    return (children: ReactNode, options: any = {}) => {
      const {
        duration = durationDefaults[type],
        id = getId(),
        ...toastOptions
      } = options
      const toast = {
        id,
        createdAt: Date.now(),
        duration,
        pausedFor: 0,
        role: type === "error" ? "alert" : "status",
        type,
        visible: true,
        children,
        dismiss(dismissedId) {
          dispatch({ type: "REMOVE_TOAST", payload: dismissedId })
        },
        ...toastOptions,
      } as ToastObject
      dispatch({ type: "INSERT_TOAST", payload: toast })
      return toast.id
    }
  }, [])
  useEffect(() => {
    if (paused) return
    const now = Date.now()
    const timeouts = toasts.map((toast) => {
      if (toast.duration === Infinity) return null
      const timeLeft =
        (toast.duration || 0) + toast.pausedFor - (now - toast.createdAt)
      if (timeLeft < 0) {
        if (toast.visible) toast.dismiss(toast.id)
        return
      }
      return setTimeout(() => toast.dismiss(toast.id), timeLeft)
    })
    return () => timeouts.forEach((timeout) => timeout && clearTimeout(timeout))
  }, [toasts, paused])
  return (
    <Fragment>
      <ToastContext.Provider value={{ createToast }} {...props} />
      {portalTarget &&
        createPortal(
          <Box
            sx={{
              position: "fixed",
              p: "2rem",
              display: "flex",
              flexDirection: "column-reverse",
              gap: "1rem",
              alignItems: "flex-start",
              zIndex: 999,
              ...positionStyles,
            }}
          >
            <AnimatePresence>
              {toasts.map(({ id, ...props }) => (
                <Toast key={id} id={id} {...props} />
              ))}
            </AnimatePresence>
          </Box>,
          portalTarget
        )}
    </Fragment>
  )
}
