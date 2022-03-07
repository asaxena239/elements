import { forwardRef, HTMLProps, useContext } from "react"
import {
  LazyMotion,
  domAnimation,
  m,
  AnimatePresence,
  Transition,
} from "framer-motion"
import { ThemeContext } from "styled-components"
import { Box, SXObject } from "@doors/core"
interface SkeletonLoaderProps extends HTMLProps<HTMLDivElement> {
  loaded: boolean
  initialHeight?: number | string
  sx?: SXObject
  startColor?: string
  endColor?: string
}

export const SkeletonLoader = forwardRef<HTMLDivElement, SkeletonLoaderProps>(
  function SkeletonLoader(
    { children, loaded, sx = {}, initialHeight = "2rem", startColor, endColor },
    ref
  ) {
    const theme = useContext(ThemeContext)
    const _startColor = startColor ?? theme.colors["blue_100"]
    const _endColor = endColor ?? theme.colors["blue_300"]
    const animation = loaded
      ? { backgroundColor: "initial" }
      : { backgroundColor: _endColor }
    const transition = { repeat: Infinity, duration: 1, repeatType: "reverse" }
    return (
      <LazyMotion features={domAnimation}>
        <Box
          role="presentation"
          ref={ref}
          as={m.div}
          initial={{ backgroundColor: _startColor }}
          animate={animation}
          transition={transition as Transition}
          sx={{ height: loaded ? "auto" : initialHeight }}
        >
          <AnimatePresence>
            {loaded && (
              <Box
                role="presentation"
                key="skeleton-loader"
                as={m.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                sx={sx}
              >
                {children}
              </Box>
            )}
          </AnimatePresence>
        </Box>
      </LazyMotion>
    )
  }
)
