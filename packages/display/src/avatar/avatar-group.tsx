import {
  Children,
  cloneElement,
  MutableRefObject,
  PropsWithChildren,
  ReactElement,
  useState,
} from "react"
import { Box, Card } from "@doors/core"
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion"
import { Popover } from "@doors/overlays"
import { Avatar, AvatarProps } from "./avatar"

interface AvatarGroupProps {
  avatars: AvatarProps[]
}

/**
 * AvatarGroup: Component to quickly lay out a set of avatars.
 *
 * Use an avatar group to display a set of avatars in a consice manner.
 */

export function AvatarGroup({ children }) {
  // const [open, setOpen] = useState(false)
  // const avatarChildren = Children.map(children, (child) =>
  //   cloneElement(child as ReactElement<any>, {
  //     ref: (node) => {
  //       console.log(node)
  //     },
  //   })
  // )
  return (
    <Box
      sx={{
        "& *:not(:first-of-type)": {
          ml: "-1rem",
        },
      }}
    >
      {children}
      {/* <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {open && (
            <Popover sx={{ pt: "1rem" }} targetRef={null}>
              <Card
                as={m.div}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                sx={{ p: "1rem", minWidth: "15rem" }}
              >
                thing
              </Card>
            </Popover>
          )}
        </AnimatePresence>
      </LazyMotion> */}
    </Box>
  )
}
