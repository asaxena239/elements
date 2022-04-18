import { useRef } from "react"
import { Box } from "@doors/core"
import { useResize, useNewResize } from "../src"

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

export function NewResize() {
  const target = useRef()
  const bounds = useNewResize(target)
  console.log(bounds)
  return (
    <Box ref={target} sx={{ width: 150 }}>
      Hello New Resize
    </Box>
  )
}
