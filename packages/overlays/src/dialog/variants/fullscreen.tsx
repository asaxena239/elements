import { forwardRef, HTMLProps } from "react"
import { Box, Container, SXObject } from "@doors/core"
import { LazyMotion, m, domAnimation, AnimatePresence } from "framer-motion"
import { useDialog } from "../../overlays-hooks"

const fullscreenBackdrop = {
  hidden: { opacity: 0, scale: 1.05 },
  shown: { opacity: 1, scale: 1 },
}

interface FullscreenDialogProps extends HTMLProps<HTMLDivElement> {
  sx?: SXObject
}

export const Fullscreen = forwardRef<HTMLDivElement, FullscreenDialogProps>(
  function FullscreenDialog({ children, sx, ...props }, ref) {
    const { open, backdropProps, wrapperProps } = useDialog({
      ...props,
      ref,
    })
    return (
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {open && (
            <Box
              {...backdropProps}
              as={m.div}
              className="fullscreen-dialog__backdrop"
              sx={{ position: "fixed", inset: 0, bg: "ui_100" }}
              variants={fullscreenBackdrop}
              initial="hidden"
              animate="shown"
              exit="hidden"
            >
              <Container
                {...wrapperProps}
                className="fullscreen-dialog__wrapper"
                sx={{ mt: "4rem" }}
              >
                {children}
              </Container>
            </Box>
          )}
        </AnimatePresence>
      </LazyMotion>
    )
  }
)
