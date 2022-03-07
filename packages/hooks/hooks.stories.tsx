import { useRef } from "react"
import { createPortal } from "react-dom"
import { Box } from "@doors/core"
import { useResize, usePortal, useRovingIndex, useAsyncData } from "./src"

export default { title: "Packages/Hooks" }

export function UsePortalExample() {
  const portalTarget = usePortal()
  return createPortal(<Box>Hello Portal</Box>, portalTarget)
}

export function UseRovingIndex() {
  const { containerProps, getTargetProps } = useRovingIndex()
  return (
    <div {...containerProps}>
      <div {...getTargetProps(0)}>0</div>
      <div {...getTargetProps(1)}>1</div>
      <div {...getTargetProps(2)}>2</div>
      <div {...getTargetProps(3)}>3</div>
    </div>
  )
}

export function UseAsyncData() {
  const { loading, data, error } = useAsyncData({
    url: "https://pokeapi.co/api/v2/pokemon/pikachu",
  })
  if (loading) return <Box>Loading</Box>
  return <Box>{JSON.stringify(data, null, 2)}</Box>
}
