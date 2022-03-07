import { useContext, PropsWithChildren } from "react"
import { createPortal } from "react-dom"
import { Box, SXObject } from "@doors/core"
import { usePortal } from "@doors/hooks"
import { X } from "@doors/icons"
import { DialogContext } from "./context"
import { Confirmation, Fullscreen } from "./variants"

const dialogVariants = {
  fullscreen: Fullscreen,
  confirmation: Confirmation,
}

interface DialogProps {
  id: string
  open: boolean
  variant: "confirmation" | "fullscreen"
  sx?: SXObject
}

export function Dialog({
  id,
  open,
  variant,
  sx,
  children,
}: PropsWithChildren<DialogProps>) {
  const portalTarget = usePortal({ type: "doors-dialog" })
  const Variant = dialogVariants[variant]
  return (
    <DialogContext.Provider value={{ open, id, close: () => {} }}>
      {createPortal(<Variant sx={sx}>{children}</Variant>, portalTarget)}
    </DialogContext.Provider>
  )
}

export function DialogHeader({ children, ...props }) {
  const { close, id, focusAfterClose } = useContext(DialogContext)
  function replaceFocus() {
    close()
    document.querySelector(focusAfterClose).focus()
  }
  function handleKeyDown({ key }) {
    if (key === "Enter" || key === " ") replaceFocus()
  }
  return (
    <Box {...props} as="header" sx={{ display: "flex", mb: "2rem" }}>
      <Box
        id={`${id}_label`}
        className="header__title"
        sx={{ text: "body", fontWeight: "black" }}
      >
        {children}
      </Box>
      <Box
        as={X}
        role="button"
        aria-label="close"
        tabIndex={0}
        onClick={replaceFocus}
        onKeyPress={handleKeyDown}
        sx={{
          ml: "auto",
          cursor: "pointer",
          transition: "120ms",
          "&:hover": { opacity: "0.75" },
        }}
      />
    </Box>
  )
}
