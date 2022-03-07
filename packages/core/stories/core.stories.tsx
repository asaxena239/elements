import { Fragment } from "react"
import { Box, Container, Col, Grid, Card, Stack } from "../src"

export default { title: "Packages/Core" }

export function BoxExample() {
  return <Box sx={{ bg: "ui_300", p: "2rem" }}>Box</Box>
}

export function ContainerExample() {
  return (
    <Container>
      <Box sx={{ p: "2rem", bg: "blue_100" }}>Container</Box>
      <h1>Hello Hero Font</h1>
    </Container>
  )
}

export function GridExample() {
  const columnStyles = { p: "2rem", bg: "green_100" }
  return (
    <Grid>
      <Col span="1" sx={columnStyles}>
        Col 1
      </Col>
      <Col span="2" sx={columnStyles}>
        Col 2
      </Col>
      <Col span="3" sx={columnStyles}>
        Col 3
      </Col>
      <Col span="6" sx={columnStyles}>
        Col 4
      </Col>
      <Col span="5" sx={columnStyles}>
        Col 5
      </Col>
      <Col span="7" sx={columnStyles}>
        Col 6
      </Col>
    </Grid>
  )
}

export function CardExample() {
  return <Card>I'm a card.</Card>
}

export function StackExample() {
  const itemStyles = {
    p: "2rem",
    bg: "gold_100",
  }
  return (
    <Fragment>
      <Stack>
        <Box sx={itemStyles}>Item 1</Box>
        <Box sx={itemStyles}>Item 2</Box>
        <Box sx={itemStyles}>Item 3</Box>
      </Stack>
      <Stack direction="row" sx={{ ml: "2rem" }}>
        <Box sx={itemStyles}>Item 1</Box>
        <Box sx={itemStyles}>Item 2</Box>
        <Box sx={itemStyles}>Item 3</Box>
      </Stack>
    </Fragment>
  )
}
