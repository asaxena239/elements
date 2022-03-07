import { Box, Container, Grid, Col } from "@doors/core"
import * as icons from "./src"

export default { title: "Packages/Icons/All Icons" }

export function IconsStory() {
  return (
    <Container sx={{ mt: "4rem" }}>
      <Grid sx={{ justifyContent: "center" }}>
        {Object.entries(icons).map(([name, icon]) => (
          <Col
            span={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: "2rem 0",
            }}
          >
            <Box as={icon} />
            <Box sx={{ text: "small", mt: "0.5rem", color: "ui_700" }}>
              {name}
            </Box>
          </Col>
        ))}
      </Grid>
    </Container>
  )
}

IconsStory.storyName = "All Icons"
