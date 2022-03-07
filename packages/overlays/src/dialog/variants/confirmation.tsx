import { forwardRef, HTMLProps } from "react"
import { Box, Card, SXObject } from "@doors/core"
import { LazyMotion, domAnimation, AnimatePresence, m } from "framer-motion"
import { useDialog } from "../../overlays-hooks"

interface ConfirmationDialogProps extends HTMLProps<HTMLDivElement> {
  backdropSx?: SXObject
  sx?: SXObject
}

const backdropVariants = { hidden: { opacity: 0 }, shown: { opacity: 1 } }

const wrapperVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  shown: { opacity: 1, scale: 1 },
}

export const Confirmation = forwardRef<HTMLElement, ConfirmationDialogProps>(
  function ConfirmationDialog(
    { children, backdropSx = {}, sx = {}, ...props },
    ref
  ) {
    const { open, backdropProps, wrapperProps } = useDialog({
      ...props,
      ref,
    })
    return (
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {open ? (
            <Box
              {...backdropProps}
              as={m.div}
              variants={backdropVariants}
              initial="hidden"
              animate="shown"
              exit="hidden"
              className="backdrop"
              sx={{
                display: "flex",
                position: "fixed",
                inset: 0,
                bg: "rgba(0,0,0,0.24)",
                alignItems: ["stretch", "stretch", "start"],
                justifyContent: "center",
                ...backdropSx,
              }}
            >
              <Card
                {...wrapperProps}
                as={m.aside}
                variants={wrapperVariants}
                className="confirmation"
                sx={{
                  width: "100%",
                  maxWidth: "60rem",
                  maxHeight: ["100vh", "100vh", "calc(100vh - 6rem)"],
                  mt: [0, 0, "4rem"],
                  borderRadius: [0, 0, 4],
                  position: "relative",
                  overflowY: "auto",
                }}
              >
                {children}
              </Card>
            </Box>
          ) : null}
        </AnimatePresence>
      </LazyMotion>
    )
  }
)
