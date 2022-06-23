import { Meta } from "@storybook/react"
import { Box, Container, Flex, Stack } from "@doors/core"
import { Button } from "@doors/controls"

export default {
  title: "Patterns/Listing Card",
  parameters: {
    layout: "fullscreen",
  },
} as Meta

function Label({ children }) {
  return (
    <Box
      className="label"
      sx={{
        textTransform: "uppercase",
        bg: "brandSecondary",
        display: "inline-flex",
        px: 1,
        borderRadius: 4,
        color: "textInverted",
        text: "small",
        fontWeight: 700,
      }}
    >
      {children}
    </Box>
  )
}

export function ListingCard() {
  return (
    <Container sx={{ py: 4 }}>
      <Box
        sx={{
          maxWidth: "56rem",
          bg: "ui",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            p: 2,
            minHeight: "36.5rem",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: "url(https://picsum.photos/id/1076/600/250)",
          }}
        >
          <Label>new - 22 hours ago</Label>
        </Box>
        <Stack sx={{ p: 2, gap: "4px", display: "flex" }}>
          <Box>For Rent - Apartment</Box>
          <Box sx={{ text: "subtitle", fontWeight: "bold" }}>
            $1,000 / month
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box>Studio Bed</Box>
            <Box>1 Bath</Box>
            <Box>500 sqft</Box>
            <Box>Pets OK</Box>
          </Box>
          <Flex
            sx={{
              alignItems: "end",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ text: "small" }}>
              <Box>1287 N Shellbridge Way, Unit 305</Box>
              <Box>Chicago, IL 60647</Box>
            </Box>
            <Button sx={{ text: "small" }}>Contact Property</Button>
          </Flex>
        </Stack>
      </Box>
    </Container>
  )
}
