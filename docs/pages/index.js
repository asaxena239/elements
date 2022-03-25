import { Fragment } from "react"
import { Box, Container, Grid, Col, Stack, Card, Flex } from "@doors/core"
import { Action } from "@doors/controls"
import {
  ExternalLink,
  Code,
  Palette,
  PenTool,
  LayoutDashboard,
} from "@doors/icons"
import Link from "next/link"

const sectionStyles = {
  p: 2,
  bg: "brandSecondarySubtle",
  borderRadius: 4,
  color: "brandSecondaryContrast",
  transition: "200ms",
  cursor: "pointer",
  gap: "1rem",
  "&:hover": {
    bg: "brandSecondary",
    boxShadow: (theme) => `${theme.colors.brandSecondary} 0 0 0 0.25rem`,
  },
}

export default function Home() {
  return (
    <Fragment>
      <Box
        className="hero"
        sx={{
          py: 4,
          bg: "brandContrast",
          color: "ui",
        }}
      >
        <Container
          as={Grid}
          sx={{ minHeight: "calc(100vh - 24rem)", placeItems: "center" }}
        >
          <Col span={6} as={Stack}>
            <Box as="h1">Doors Design System</Box>
            <Box as="h2" sx={{ text: "body" }}>
              Resources, tools, and patterns for building products at Avail.
            </Box>
          </Col>
        </Container>
      </Box>
      <Container sx={{ mb: 4 }}>
        <Card sx={{ mt: "-4rem", p: 0, overflow: "hidden" }} as={Flex}>
          <Stack sx={{ p: 4 }}>
            <Box as="h3" sx={{ text: "title" }}>
              Design Library
            </Box>
            <Box>Ready to use design components for your figma prototypes.</Box>
            <Action icon={ExternalLink} sx={{ mt: "auto" }}>
              View on figma
            </Action>
          </Stack>
          <Box
            as="img"
            src="/images/design-components.png"
            sx={{ height: "25rem", ml: "auto" }}
          />
        </Card>
      </Container>
      <Container as={Grid} sx={{ pb: 4 }}>
        <Link href="/code">
          <Col as={Stack} sx={sectionStyles} span={[12, 6]}>
            <Code />
            <Box as="h3" sx={{ text: "subtitle" }}>
              Implementation
            </Box>
            <Box>
              Components, patterns, and animation how-tos to help you launch
              faster.
            </Box>
          </Col>
        </Link>
        <Col as={Stack} sx={sectionStyles} span={[12, 6]}>
          <Palette />
          <Box as="h3" sx={{ text: "subtitle" }}>
            Brand Guidelines
          </Box>
          <Box>
            Foundations, writing style, color, type, and identity of our brand.
          </Box>
        </Col>
        <Col as={Stack} sx={sectionStyles} span={[12, 6]}>
          <PenTool />
          <Box as="h3" sx={{ text: "subtitle" }}>
            Illustration & Icons
          </Box>
          <Box>
            Illustrations and guidelines for creating cohesive and expressive
            images.
          </Box>
        </Col>
        <Col as={Stack} sx={sectionStyles} span={[12, 6]}>
          <LayoutDashboard />
          <Box as="h3" sx={{ text: "subtitle" }}>
            Presentation Resources
          </Box>
          <Box>
            Deck templates and common layouts that let you focus on telling a
            story.
          </Box>
        </Col>
      </Container>
    </Fragment>
  )
}
