import {
  forwardRef,
  PropsWithChildren,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { Box, SXObject } from "@doors/core"
import { mergeRefs } from "@doors/utils"

type BaseAvatarProps = {
  sx?: SXObject
  bg?: string
  small?: boolean
}

type AvatarProps = BaseAvatarProps &
  ({ initials: string; photo?: never } | { initials?: never; photo: string })

export const Avatar = forwardRef<
  HTMLDivElement,
  PropsWithChildren<AvatarProps>
>(function Avatar(
  {
    sx = {},
    bg = "uiSubtle",
    initials,
    photo,
    children,
    small = false,
    ...props
  },
  ref
) {
  const [multiLine, setMulti] = useState(false)
  const avatarRef = useRef(null)
  useLayoutEffect(() => {
    if (avatarRef.current) {
      setMulti((prev) => {
        return avatarRef.current.getBoundingClientRect().height > 54
      })
    }
  }, [!!avatarRef.current])
  return (
    <Box
      {...props}
      ref={mergeRefs(avatarRef, ref)}
      tabIndex={0}
      sx={{
        bg,
        display: "inline-flex",
        borderRadius: "10rem",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          width: "4rem",
          height: "4rem",
          border: `0.5rem solid transparent`,
          borderColor: bg,
          borderRadius: "50rem",
          overflow: "hidden",
          ml: multiLine ? "1rem" : 0,
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
      {children && !!small && (
        <Box sx={{ ml: "0.5rem", mr: "2rem", my: "1rem" }}>{children}</Box>
      )}
    </Box>
  )
})
