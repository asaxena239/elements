import { Box } from "@doors/core"

const types = {
  "success": {
    bg: "success",
  },
  "error": {
    bg: "error"
  },
  "premium": {
    bg: "brandSecondaryContrast",
    color: "ui",
  },
  "info": {
    bg: "brandSubtle"
  },
  "warning": {
    bg: "straw_500",
  },
}

export function Chip({ sx = {}, type = "info", ...props }) {
  return (
    <Box
      {...props}
      sx={{
        display: "inline-flex",
        px: "1rem",
        text: "small",
        borderRadius: "1rem",
        ...types[type],
        ...sx,
      }}
    />
  )
}
