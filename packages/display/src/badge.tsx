import { PropsWithChildren, ReactNode } from "react"
import { Box, SXObject } from "@doors/core"

type x = "left" | "right"

type y = "top" | "bottom"
interface BadgeBaseProps {
  anchor?: `${x}-${y}` | "auto"
  sx?: SXObject
}

type BadgeProps = BadgeBaseProps &
  (
    | { badgeContent: ReactNode; dot?: never }
    | { dot: boolean; badgeContent?: never }
  )

function getPosition(anchor: string) {
  const top = anchor.includes("top")
  const left = anchor.includes("left")
  const x = left
    ? { right: "calc(100% - 0.75rem)" }
    : { left: "calc(100% - 0.75rem)" }
  const y = top
    ? { bottom: "calc(100% - 0.75rem)" }
    : { top: "calc(100% - 0.75rem)" }
  return { ...x, ...y }
}

export function Badge({
  badgeContent,
  dot,
  children,
  sx = {},
  anchor = "right-top",
}: PropsWithChildren<BadgeProps>) {
  const position = getPosition(anchor)
  const show = dot || Boolean(badgeContent)
  return (
    <Box as="span" sx={{ position: "relative", ...sx }}>
      {children}
      {show && (
        <Box
          className="doors-badge"
          sx={{
            position: "absolute",
            px: dot ? 0 : 1,
            maxWidth: "10rem",
            width: dot ? "1rem" : "max-content",
            height: dot ? "1rem" : "auto",
            bg: "brand",
            color: "textInverted",
            text: "legal",
            borderRadius: "2rem",
            ...position,
          }}
        >
          {badgeContent}
        </Box>
      )}
    </Box>
  )
}
