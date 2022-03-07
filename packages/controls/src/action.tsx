import { ComponentType, PropsWithChildren, HTMLProps } from "react"
import { SXObject, Box } from "@doors/core"
import { wrapEvent } from "@doors/utils"

interface ActionProps extends HTMLProps<HTMLAnchorElement & HTMLButtonElement> {
  icon: ComponentType<any>
  sx?: SXObject
  as?: any
}

function useAction({ onKeyDown, ...props }: any) {
  function handleKeyDown({ key, target }) {
    if (key === "Enter" || key === " ") target.click()
  }
  return {
    wrapperProps: {
      ...props,
      role: "button",
      tabIndex: 0,
      onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
    },
    iconProps: {
      "aria-hidden": true,
    },
  }
}

export function Action({
  icon,
  children,
  sx = {},
  ...props
}: PropsWithChildren<ActionProps>) {
  const { wrapperProps, iconProps } = useAction(props)
  return (
    <Box
      {...wrapperProps}
      sx={{
        display: "inline-flex",
        gap: "0.5rem",
        color: "avail.actionPrimary",
        cursor: "pointer",
        "&:hover": { color: "avail.actionSecondary" },
        ...sx,
      }}
    >
      <Box {...iconProps} as={icon} />
      <Box as="span" sx={{ fontWeight: "black" }}>
        {children}
      </Box>
    </Box>
  )
}
