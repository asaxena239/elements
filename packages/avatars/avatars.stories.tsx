import { Avatar, AvatarGroup } from "./src"
import { AvatarsProvider } from "./src/avatars-provider"

export default {
  title: "Packages/Avatars",
}

const defaultPhoto =
  "https://rentalutions-assets.s3.amazonaws.com/avatars/not-found.svg"

export function AvatarExample() {
  return (
    <Avatar
      photo={defaultPhoto}
      name="Hello Tooltip"
      email="tooltip@aalskdjf.com"
    />
  )
}

export function AvatarWithLabelExample() {
  return (
    <Avatar
      photo={defaultPhoto}
      label="patrick@dreadful.design"
      bg="blue_100"
      name="Hello Tooltip"
      email="tooltip@aalskdjf.com"
    />
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
      <Avatar
        photo={defaultPhoto}
        bg="blue_100"
        name="Hello Tooltip"
        email="tooltip@aalskdjf.com"
      />
      <Avatar
        photo={defaultPhoto}
        bg="blue_100"
        name="Hello Tooltip"
        email="tooltip@aalskdjf.com"
      />
    </AvatarGroup>
  )
}
