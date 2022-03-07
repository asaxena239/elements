import { PropsWithChildren } from "react"
import { motion } from "framer-motion"
import { Box, SXObject } from "@doors/core"
import { Loader } from "@doors/icons"
import { resolveChild as resolveChildren } from "@doors/utils"
import { ToastObject } from "./reducer"

const typeStyles = {
  blank: {
    bg: "ui_900",
    color: "ui_100",
    borderColor: "ui_900",
  },
  success: {
    bg: "green_500",
    color: "ui_900",
    borderColor: "green_900",
  },
  error: {
    bg: "red_300",
    color: "ui_900",
    borderColor: "red_500",
  },
  loading: {
    bg: "ui_300",
    borderColor: "ui_500",
    color: "ui_700",
  },
}

const ToastLoader = motion(Loader)

export function Toast({
  type,
  children,
  sx = {},
  ...props
}: PropsWithChildren<ToastObject & { sx?: SXObject }>) {
  return (
    <Box
      as={motion.aside}
      variants={{
        shown: { opacity: 1, y: "0rem" },
        hidden: { opacity: 0, y: "1rem" },
      }}
      initial="hidden"
      animate="shown"
      exit="hidden"
      sx={{
        display: "inline-flex",
        flexGrow: 0,
        p: "2rem",
        borderRadius: "0.25rem",
        border: "1px solid transparent",
        maxWidth: "40rem",
        pointerEvents: "all",
        transition: "background-color 400ms ease-in",
        ...typeStyles[type],
        ...sx,
      }}
    >
      {type === "loading" && typeof children !== "function" && (
        <Box sx={{ mr: 2 }}>
          <ToastLoader
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </Box>
      )}
      {children && resolveChildren(children, props)}
    </Box>
  )
}
