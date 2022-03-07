import { useRef } from "react"
import { Box } from "@doors/core"
import { useResize } from "../src"

export default {
  title: "Packages/Hooks/Use Resize",
}

export function UseResizeExample() {
  const targetRef = useRef()
  const bounds = useResize(targetRef)
  console.log("bounds: ", bounds)
  return <Box ref={targetRef}>Hello World</Box>
}

UseResizeExample.storyName = "Use Resize"
