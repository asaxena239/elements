import { Meta } from "@storybook/react"
import { Flex } from "@doors/core"
import { ShoppingCart, Mail, User, Package } from "@doors/icons"
import { Badge } from "../src"

export default {
  title: "Packages/Display/Badge",
  component: Badge,
} as Meta

export function BadgeExample() {
  return (
    <Flex sx={{ p: 2, gap: 4 }}>
      <Badge badgeContent={0}>
        <User />
      </Badge>
      <Badge dot>
        <ShoppingCart />
      </Badge>
      <Badge badgeContent={"3"}>
        <Mail />
      </Badge>
      <Badge badgeContent={"99+"}>
        <Mail />
      </Badge>
    </Flex>
  )
}
