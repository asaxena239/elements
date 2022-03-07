import { forwardRef, HTMLProps, PropsWithChildren, useRef } from "react"
import { Box, SXObject } from "@doors/core"
import { mergeRefs } from "@doors/utils"
interface FixedProgressProps extends HTMLProps<HTMLOListElement> {
  as?: any
  sx?: SXObject
  label: string
}

function useFixedProgress({
  ref,
  onKeyDown,
  label,
  skipLinkId,
  ...props
}: any) {
  const progressRef = useRef<HTMLOListElement>(null)
  return {
    listProps: {
      ...props,
      ref: mergeRefs(ref, progressRef),
      "aria-label": label,
    },
  }
}
/**
 * FixedProgress: A way to show users the steps of a process.
 *
 * @example
 * <FixedProgress steps={[{title: "Step One", complete: false}]} />
 */

export const FixedProgress = forwardRef<HTMLOListElement, FixedProgressProps>(
  function FixedProgress({ children, sx = {}, ...props }, ref) {
    const { listProps } = useFixedProgress({ ...props, ref })
    return (
      <Box
        {...listProps}
        as="ol"
        sx={{ display: "flex", listStyle: "none", position: "relative", ...sx }}
      >
        {children}
      </Box>
    )
  }
)

export type Status =
  | "complete"
  | "current"
  | "incomplete"
  | "disabled"
  | "error"

interface FixedProgressStepProps extends HTMLProps<HTMLLIElement> {
  status?: Status
  title: string
}

export function FixedProgressStep({
  status = "incomplete",
  children,
  title,
}: PropsWithChildren<FixedProgressStepProps>) {
  const styleDict = {
    incomplete: { bg: "ui_500", text: "ui_700" },
    current: { bg: "blue_900", text: "ui_900" },
    complete: { bg: "blue_500", text: "blue_500" },
    error: { bg: "red_300", text: "red_500" },
    disabled: { bg: "ui_500", text: "ui_500" },
  }
  const styles = styleDict[status]
  return (
    <Box
      as="li"
      sx={{
        flex: 1,
        text: "small",
        minWidth: "10rem",
        color: styles.text,
        fontWeight: status === "current" ? "black" : "body",
        "&::before": {
          content: '""',
          display: "block",
          height: "2rem",
          width: "100%",
          bg: styles.bg,
          clipPath: `polygon(
            calc(100% - 1rem) 0%,
            100% 50%,
            calc(100% - 1rem) 100%,
            0% 100%,
            1rem 50%,
            0% 0%
          )`,
          transition: "opacity 120ms",
        },
        "&:hover::before": {
          opacity: 0.5,
        },
        "&:first-of-type::before": {
          borderRadius: "1rem 0 0 1rem",
          clipPath: `polygon(
            0% 0%,
            calc(100% - 1rem) 0%,
            100% 50%,
            calc(100% - 1rem) 100%,
            0% 100%
          )`,
        },
        "&:last-of-type::before": {
          borderRadius: "0 1rem 1rem 0",
          clipPath: `polygon(
            100% 0,
            100% 100%,
            0% 100%,
            1rem 50%,
            0% 0%
          )`,
        },
      }}
    >
      <Box className="visually-hidden">{status}</Box>
      <Box role="button" title={title} sx={{ cursor: "pointer" }}>
        {typeof children === "function" ? children() : children}
      </Box>
    </Box>
  )
}
