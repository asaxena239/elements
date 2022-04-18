import {
  Children,
  cloneElement,
  Fragment,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { Box, Card } from "@doors/core"
import { Popover } from "@doors/overlays"
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion"
import { Avatar } from "./avatar"

/**
 * AvatarGroup: Component to quickly lay out a set of avatars.
 *
 * Use an avatar group to display a set of avatars in a consice manner.
 */

export function AvatarGroup(props) {
  const [activeIndex, setIndex] = useState(undefined)
  const avatarRefs = useRef([])
  const activeRef = useMemo(
    () => avatarRefs.current[activeIndex],
    [activeIndex]
  )
  const children = Children.map(props.children, (child) => {
    return cloneElement(child, {
      className: "avatar-group__child",
      ref: (node: any) => {
        if (node && !avatarRefs.current.includes(node)) {
          avatarRefs.current.push(node)
        }
      },
      onMouseEnter: ({ currentTarget }) => {
        const idx = avatarRefs.current.findIndex((el) => el === currentTarget)
        setIndex(idx)
      },
      onMouseLeave: () => {
        setIndex(undefined)
      },
    })
  })
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          "& .avatar-group__child:not(:first-of-type)": {
            ml: "-1rem",
          },
        }}
      >
        {children}
      </Box>
      {activeRef && <Popover targetRef={{ current: activeRef }}>Hello</Popover>}
    </Fragment>
  )
}

// export function AvatarGroup({ children }) {
//   // const [open, setOpen] = useState(false)
//   // const avatarChildren = Children.map(children, (child) =>
//   //   cloneElement(child as ReactElement<any>, {
//   //     ref: (node) => {
//   //       console.log(node)
//   //     },
//   //   })
//   // )
//   return (
//     <Box
//       sx={{
//         "& *:not(:first-of-type)": {
//           ml: "-1rem",
//         },
//       }}
//     >
//       {children}
//       {/* <LazyMotion features={domAnimation}>
//         <AnimatePresence>
//           {open && (
//             <Popover sx={{ pt: "1rem" }} targetRef={null}>
//               <Card
//                 as={m.div}
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 sx={{ p: "1rem", minWidth: "15rem" }}
//               >
//                 thing
//               </Card>
//             </Popover>
//           )}
//         </AnimatePresence>
//       </LazyMotion> */}
//     </Box>
//   )
// }
