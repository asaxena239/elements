import { Box } from "@doors/core"
import { Fragment } from "react"
import { Avatar, AvatarGroup } from "../src/avatar"
// import { AvatarsProvider } from "./src/avatars-provider"

export default {
  title: "Packages/Display/Avatars",
}

const defaultPhoto =
  "https://rentalutions-assets.s3.amazonaws.com/avatars/not-found.svg"

export function AvatarExample() {
  return (
    <Box sx={{ display: "flex", alignItems: "start" }}>
      <Avatar photo={defaultPhoto} />
      <Avatar initials="PK" />
      <Avatar initials="PK">Patrick Krawczykowski</Avatar>
      <Avatar initials="PK">
        <Box>Patrick Krawczykowski</Box>
        <Box sx={{ text: "small" }}>patrick.krawczykowski@realtor.com</Box>
      </Avatar>
    </Box>
  )
}

export function AvatarWithLabelExample() {
  return (
    <Avatar photo={defaultPhoto} bg="blue_100">
      patrick@dreadful.design
    </Avatar>
  )
}

export function AvatarGroupExample() {
  const users = [
    {
      photo: defaultPhoto,
      name: "Hello Tooltip",
      email: "tooltip@aalskdjf.com",
    },
    {
      photo: defaultPhoto,
      name: "Hello Tooltip",
      email: "tooltip@aalskdjf.com",
    },
  ]
  return (
    <AvatarGroup>
      <Avatar bg="blue_100" initials="PK" />
      <Avatar photo={defaultPhoto} bg="blue_100" />
    </AvatarGroup>
  )
}
