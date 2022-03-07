// import {  Card } from "@doors/core"
// import { Popover } from "@doors/overlays"
// import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion"

import { Popover } from "@doors/overlays"

// export function AvatarTooltip({name, open, ...props}) {
//   return <LazyMotion features={domAnimation}>
//   <AnimatePresence>
//     {open && (
//       <Popover {...props} sx={{ pt: "1rem" }}>
//         <Card
//           as={m.div}
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0 }}
//           sx={{ p: "1rem", minWidth: "15rem" }}
//         >
//           {name}
//         </Card>
//       </Popover>
//     )}
//   </AnimatePresence>
// </LazyMotion>
// }

export function AvatarTooltip({ avatarRef, name, email }) {
  return <Popover targetRef={avatarRef}></Popover>
}
