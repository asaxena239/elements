import { Container, Box } from "@doors/core"
import { useEffect, useRef, useState } from "react"
import { Menu, MenuItem } from "../src"

export default { title: "Packages/Overlays/Menus" }

export function MenuExample() {
  const menuTargetRef = useRef(null)
  return (
    <Container>
      <Box ref={menuTargetRef}>Target Ref</Box>
      <Menu menuTarget={menuTargetRef}>
        <MenuItem>Something</MenuItem>
        <MenuItem>Another</MenuItem>
        <MenuItem>Third</MenuItem>
        <MenuItem>Last</MenuItem>
      </Menu>
    </Container>
  )
}

MenuExample.storyName = "Menu"
