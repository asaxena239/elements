import { useRef, useMemo, useState, useEffect, useContext } from "react"
import {
  mergeRefs,
  wrapEvent,
  getFocusable,
  closestScrollable,
} from "@doors/utils"
import { usePortal, useResize } from "@doors/hooks"
import { DialogContext } from "./dialog/context"

export function usePopover({ ref, targetRef, anchor, style, ...props }: any) {
  const popoverRef = useRef(null)
  const portalTarget = usePortal({ type: "doors-popover" })
  const parent = useMemo(
    () => closestScrollable(targetRef.current),
    [targetRef.current]
  )
  const popoverBounds = useResize(popoverRef, { parent })
  const targetBounds = useResize(targetRef, { parent })
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    visibility: "hidden",
  })
  useEffect(() => {
    if (popoverBounds && targetBounds) {
      const collisions = {
        top: targetBounds.top - popoverBounds.height < 0,
        bottom: window.innerHeight < targetBounds.bottom + popoverBounds.height,
        left: targetBounds.left - popoverBounds.width < 0,
        right: window.innerWidth < targetBounds.left + popoverBounds.width,
      }
      const alignments = {
        top: targetBounds.top - targetBounds.height + parent.scrollTop,
        bottom: targetBounds.bottom,
        left: targetBounds.left,
        right: targetBounds.right - popoverBounds.width,
      }
      if (anchor === "auto") {
        setPosition({
          top: collisions.top ? alignments.bottom : alignments.top,
          left: collisions.right ? alignments.right : alignments.left,
          visibility: "initial",
        })
      } else {
        const [x, y] = anchor.split("-")
        setPosition({
          top: alignments[y],
          left: alignments[x],
          visibility: "initial",
        })
      }
    }
  }, [targetBounds])
  return {
    portalTarget,
    popoverProps: {
      ...props,
      ref: mergeRefs(popoverRef, ref),
      style: { ...style, position: "absolute", ...position },
    },
  }
}

export function useDialog({ ref, onKeyDown, ...props }: any) {
  const wrapperRef = useRef<HTMLElement>(null)
  const {
    open,
    id,
    close,
    // focusAfterClose,
    focusFirst: focusFirstQuery = undefined,
  } = useContext(DialogContext)
  function handleKeyDown({ key }) {
    if (key === "Escape") {
      close()
    }
  }
  useEffect(() => {
    if (open) {
      const parent = wrapperRef.current
      const focusTrap = document.createElement("div")
      const firstFocusable = getFocusable(wrapperRef.current)[0] as HTMLElement
      let focusFirst = parent.querySelector(focusFirstQuery) ?? firstFocusable
      focusTrap.tabIndex = 0
      focusTrap.addEventListener("focus", (e) => {
        e.preventDefault()
        firstFocusable.focus()
      })
      wrapperRef.current.appendChild(focusTrap)
      focusFirst.focus()
    }
  }, [open])
  return {
    open,
    close,
    backdropProps: {
      id: `${id}_backdrop`,
      role: "presentation",
    },
    wrapperProps: {
      ...props,
      ref: mergeRefs(ref, wrapperRef),
      id,
      role: "dialog",
      onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
      "aria-modal": true,
      "aria-labelledby": `${id}_label`,
    },
  }
}
