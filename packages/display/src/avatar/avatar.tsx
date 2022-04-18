import { forwardRef, HTMLProps, ReactNode } from "react"
import { Box, SXObject } from "@doors/core"

type BaseAvatarProps = {
  sx?: SXObject
  bg?: string
  label?: ReactNode
}

type AvatarProps = BaseAvatarProps &
  ({ initials: string; photo?: never } | { initials?: never; photo: string })

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  { sx = {}, bg = "uiSubtle", initials, photo, label, ...props },
  ref
) {
  return (
    <Box
      {...props}
      ref={ref}
      tabIndex={0}
      sx={{
        bg,
        display: "inline-flex",
        borderRadius: "2rem",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "4rem",
          height: "4rem",
          border: `0.5rem solid transparent`,
          borderColor: bg,
          borderRadius: "50rem",
          overflow: "hidden",
        }}
      >
        {initials ? (
          <Box>{initials}</Box>
        ) : (
          <Box
            as="img"
            src={photo}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </Box>
      {label && (
        <Box sx={{ ml: "0.5rem", mr: "2rem", my: "1rem" }}>{label}</Box>
      )}
    </Box>
  )
})
