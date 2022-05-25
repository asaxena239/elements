import { Box } from "@doors/core"
import { useRef } from "react"
import { Tooltip } from "../src/tooltip"

export default { title: "Packages/Overlays/Tooltips" }

export function Tooltips() {
  const targetRef = useRef(null)
  return (
    <Box>
      <Box ref={targetRef}>Target</Box>
      <Tooltip targetRef={targetRef} id="thing-1">
        Hello Tooltip
      </Tooltip>
    </Box>
  )
}
