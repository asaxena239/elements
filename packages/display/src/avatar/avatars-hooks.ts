import { mergeRefs, wrapEvent } from "@doors/utils"
import { useRef, useState } from "react"

export function useAvatarGroup(props) {
  const [open, setOpen] = useState(false)
  const popoverRef = useRef(null)
  const timerRef = useRef(null)
  const avatarRef = useRef(null)
  function handleOpen() {
    clearTimeout(timerRef.current)
    if (open == false) {
      setOpen(true)
    }
  }
  function handleClose() {
    timerRef.current = setTimeout(() => {
      setOpen(false)
    }, 400)
  }
  return {
    open,
    popoverProps: {
      ref: popoverRef,
      targetRef: avatarRef,
      key: "avatar-popover",
      onMouseEnter: handleOpen,
      onMouseLeave: handleClose,
    },
  }
}
