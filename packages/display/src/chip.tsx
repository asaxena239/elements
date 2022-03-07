import { Box } from "@doors/core"

export function Chip({ sx = {}, ...props }) {
  return (
    <Box
      {...props}
      sx={{
        display: "inline-flex",
        px: "1rem",
        text: "small",
        borderRadius: "1rem",
        ...sx,
      }}
    />
  )
}
