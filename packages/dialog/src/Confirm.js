import React, { useContext, forwardRef, Fragment, memo } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { usePortal } from "@rent_avail/utils"
import { motion, AnimatePresence } from "framer-motion"
import { DialogContext } from "./dialogContext"
import { Box } from "@rent_avail/layout"

const ConfirmationWrapper = styled(motion.section)`
  position: absolute;
  top: 4rem;
  left: 50%;
  padding: 2rem;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  background: ${({ theme }) => theme.colors.ui_100};
  border-radius: 0.25rem;
  width: calc(100% - 2rem);
  max-width: 50rem;
  z-index: 2;
  transform: translate3d(-50%, 0, 0);
  .confirmation__header {
    display: flex;
    margin-bottom: 2rem;
  }
  .confirmation__close {
    cursor: pointer;
    margin-left: auto;
    &:hover {
      opacity: 0.75;
    }
  }
`

function Confirmation({ children, title = null, scrimSx = {}, ...props }, ref) {
  const target = usePortal()
  const { open, id } = useContext(DialogContext)
  if (!target) return null
  return createPortal(
    <AnimatePresence>
      {open && (
        <Fragment>
          <Box
            className="scrim"
            sx={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              background: "rgba(0, 0, 0, 0.24)",
              overflow: "auto",
              ...scrimSx
            }}
          >
            <ConfirmationWrapper
              {...props}
              key={`${id}-dialog`}
              ref={ref}
              initial={{ opacity: 0, scale: 1.05, x: "-50%" }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
              exit={{ opacity: 0, scale: 1.05 }}
            >
              {children}
            </ConfirmationWrapper>
          </Box>
        </Fragment>
      )}
    </AnimatePresence>,
    target
  )
}

export const ConfirmationDialog = memo(forwardRef(Confirmation))
