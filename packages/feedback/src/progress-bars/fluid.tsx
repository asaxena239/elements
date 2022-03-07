import { Box } from "@doors/core"

interface FluidProgressProps {
  label: string
  current: number
  total: number
}

export function FluidProgress({
  label,
  current,
  total,
  ...props
}: FluidProgressProps) {
  return (
    <Box {...props}>
      <Box
        className="track"
        sx={{
          position: "relative",
          height: "2rem",
          bg: "ui_500",
          borderRadius: "1rem",
        }}
      >
        <Box
          className="progress"
          sx={{
            height: "100%",
            bg: "green_500",
            borderRadius: "1rem",
            transition: "200ms",
          }}
          style={{ width: `${(current / total) * 100}%` }}
        />
        <Box
          className="steps"
          sx={{
            position: "absolute",
            right: "1rem",
            top: 0,
            lineHeight: "2rem",
          }}
        >{`${current} / ${total}`}</Box>
      </Box>
      {label && <Box sx={{ text: "small", mt: "1rem" }}>{label}</Box>}
    </Box>
  )
}
