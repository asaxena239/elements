import { Box, SXObject } from "@doors/core"
import { forwardRef, ReactNode } from "react"

interface AvatarProps {
  size: "small" | "large"
  photo: string
  label?: ReactNode
  sx?: SXObject
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  { size, sx = {}, ...props },
  ref
) {
  if (size === "large") {
    return <Box />
  }
  return <Box ref={ref} sx={{ bg: "ui.light", ...sx }} {...props} />
})
