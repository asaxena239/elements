import { Box, Container } from "../src"

export default {
  title: "Packages/Core/Theme",
}

export function ThemeExample() {
  return (
    <Container>
      <Box sx={{ text: "hero" }}>
        Next Saturday night, we're sending you back to the future.
      </Box>
      <Box sx={{ text: "headline" }}>This is it. This is the answer.</Box>
      <Box sx={{ text: "title" }}>
        I gotta go but I wanted to tell you that it's been educational. Where?
        Are you sure about this storm?
      </Box>
      <Box sx={{ text: "subtitle" }}>
        Just say anything, George, say what ever's natural, the first thing that
        comes to your mind.
      </Box>
      <Box sx={{ text: "body" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Box>
      <Box sx={{ text: "small" }}>
        Turpis egestas maecenas pharetra convallis posuere morbi leo urna
        molestie. Placerat orci nulla pellentesque dignissim. Dui vivamus arcu
        felis bibendum ut tristique et egestas. Consectetur lorem donec massa
        sapien faucibus et molestie. Convallis a cras semper auctor neque vitae.
        Amet porttitor eget dolor morbi non arcu risus. Nisl suscipit adipiscing
        bibendum est ultricies integer. Tortor id aliquet lectus proin nibh nisl
        condimentum id venenatis. Consectetur purus ut faucibus pulvinar
        elementum integer enim neque volutpat. Mollis aliquam ut porttitor leo a
        diam sollicitudin. Egestas sed sed risus pretium quam vulputate
        dignissim suspendisse. Imperdiet nulla malesuada pellentesque elit eget
        gravida cum sociis. Commodo viverra maecenas accumsan lacus. Egestas
        tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.
        Turpis nunc eget lorem dolor sed viverra. Vel elit scelerisque mauris
        pellentesque pulvinar pellentesque habitant morbi.
      </Box>
      <Box sx={{ display: "flex", gap: 2, height: "10rem", mt: "2rem" }}>
        <Box sx={{ bg: "brand", flex: 1 }} />
        <Box sx={{ bg: "brandSecondary", flex: 1 }} />
        <Box sx={{ bg: "brandSecondaryDark", flex: 1 }} />
        <Box sx={{ bg: "success", flex: 1 }} />
        <Box sx={{ bg: "error", flex: 1 }} />
      </Box>
    </Container>
  )
}

ThemeExample.storyName = "Theme"
