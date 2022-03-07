import React, { Fragment } from "react"
import { render, screen } from "testing"
import { Box, Container, Grid, Col, Card, Stack, Flex } from "../src"

describe("Core", () => {
  it("Renders layout components without crashing", () => {
    render(
      <Container>
        <Box>
          <Grid>
            <Col />
          </Grid>
          <Card>Card El</Card>
          <Stack />
          <Flex />
        </Box>
      </Container>
    )
    expect(screen.getByText("Card El")).toBeInTheDocument()
  })
})
