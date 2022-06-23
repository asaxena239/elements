import { Fragment } from "react"
import { Box, Container, Col, Grid, Card, Stack } from "../src"

export default {
  title: "Packages/Core/Layout",
  subcomponents: { Box, Container, Col, Grid, Card, Stack },
}

export function Layout() {
  return (
    <Container>
      <Grid>
        <Col>
          <Box sx={{ p: 2, bg: "brand", color: "textInverted" }}>Header</Box>
        </Col>
        <Col as={Grid}>
          <Col span={[12, 8]} sx={{ bg: "ui", p: 2 }}>
            Main
          </Col>
          <Col span={[12, 4]} sx={{ bg: "brandSecondarySubtle", p: 2 }}>
            Sidebar
          </Col>
        </Col>
        <Col sx={{ bg: "uiSecondary", p: 2 }}>Footer</Col>
      </Grid>
    </Container>
  )
}

export function BoxExample() {
  return <Box sx={{ bg: "ui_300", p: "2rem" }}>Box</Box>
}

BoxExample.storyName = "Box"

export function ContainerExample() {
  return (
    <Container>
      <Box sx={{ p: "2rem", bg: "blue_100" }}>
        Containers will center within it's parent and keep content inside a max
        width.
      </Box>
    </Container>
  )
}

ContainerExample.storyName = "Container"

const columnStyles = { p: "2rem", bg: "green_100" }

export function GridExample() {
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

GridExample.storyName = "Grid"

export function CardExample() {
  return <Card>I'm a card.</Card>
}

CardExample.storyName = "Card"

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

StackExample.storyName = "Stack"
