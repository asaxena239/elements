import {
  forwardRef,
  MutableRefObject,
  PropsWithChildren,
  HTMLProps,
} from "react"
import { createPortal } from "react-dom"
import { Box, SXObject } from "@doors/core"
import { usePopover } from "./overlays-hooks"

type yPosition = "top" | "bottom"

type xPosition = "left" | "right"

interface PopoverProps extends HTMLProps<HTMLElement> {
  targetRef: MutableRefObject<HTMLElement>
  anchor?: `${xPosition}-${yPosition}` | "auto"
  sx?: SXObject
}

/**
 * Popover: A low level positioning component
 *
 * Popovers should be used to position an absolutely placed element on the screen. This
 * addresses the problem of disrupting the tab flow and confusing screen readers. Popovers
 * capture focus by default and should surrender focus to the correct next element on
 * close. This component shouldn't need to be used much outside of these packages.
 */

export const Popover = forwardRef<HTMLElement, PropsWithChildren<PopoverProps>>(
  function Popover({ anchor = "auto", ...props }, ref) {
    const { popoverProps, portalTarget } = usePopover({
      ...props,
      anchor,
      ref,
    })
    return createPortal(<Box {...popoverProps} />, portalTarget)
  }
)
