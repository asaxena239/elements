import { forwardRef, HTMLProps, ReactNode } from "react"
import { Box, SXObject } from "@doors/core"

// There's some weird label attribute that's allowed on div elements... So removing that.
export interface AvatarProps extends Omit<HTMLProps<HTMLDivElement>, "label"> {
  sx?: SXObject
  photo: string
  label?: ReactNode
  bg?: string
  name?: string
  email: string
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  { sx = {}, bg = "uiPrimary", photo, label },
  ref
) {
  return (
    <Box
      ref={ref}
      tabIndex={0}
      sx={{
        bg,
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "2rem",
        ...sx,
      }}
    >
      <Box
        as="img"
        src={photo}
        sx={{
          width: "4rem",
          height: "4rem",
          border: `0.5rem solid transparent`,
          borderColor: bg,
          borderRadius: "50rem",
        }}
      />
      {label && (
        <Box sx={{ ml: "0.5rem", mr: "2rem", my: "1rem" }}>{label}</Box>
      )}
    </Box>
  )
})
