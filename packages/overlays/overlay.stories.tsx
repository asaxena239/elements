import { Fragment, useRef, useState } from "react"
import { Box, Container, Grid, Col, Stack, Flex } from "@doors/core"
import { Action, Button, Switch } from "@doors/controls"
import { EyeOff, Eye, Edit, UserCheck } from "@doors/icons"
import { Dialog, DialogHeader, Popover } from "./src"

export default { title: "Packages/Overlays" }

const listingPartners = [
  {
    partner: "Avail",
    status: "Off Market",
    logo: "https://rentalutions-assets.s3.amazonaws.com/avail-logos/icon.svg",
  },
  {
    partner: "Zillow",
    status: "Off Market",
    logo: "https://rentalutions-assets.s3.amazonaws.com/Logos/Zillow.svg",
  },
  {
    partner: "Trulia",
    status: "Off Market",
    logo: "https://rentalutions-assets.s3.amazonaws.com/Logos/Trulia.svg",
  },
  {
    partner: "Zumper",
    status: "Off Market",
    logo: "https://rentalutions-assets.s3.amazonaws.com/Logos/Zumper.svg",
  },
]

// export function ConfirmationDialogExample() {
//   const [open, setOpen] = useState(false)
//   const close = () => setOpen(false)
//   return (
//     <Container sx={{ mt: "4rem" }}>
//       <Grid as="header" className="listing-header">
//         <Col span={6}>
//           <Box sx={{ text: "small" }} id="listing-status">
//             Listing Status
//           </Box>
//           <Box sx={{ text: "title" }} aria-live="polite">
//             Off Market
//           </Box>
//         </Col>
//         <Col
//           span={6}
//           className="listing-actions"
//           sx={{ justifySelf: "end", alignSelf: "end" }}
//         >
//           <Button variant="primary">Publish Listing</Button>
//         </Col>
//         <Col
//           as={Grid}
//           sx={{
//             bg: "blue_100",
//             borderRadius: 4,
//             padding: "2rem",
//             gridAutoRows: "auto",
//           }}
//         >
//           <Col sx={{ display: "flex" }}>
//             <Box>Listing Partners</Box>
//             <Action
//               icon={Edit}
//               onClick={() => setOpen(true)}
//               sx={{ ml: "auto" }}
//               id="dialog-focus"
//             >
//               Edit
//             </Action>
//           </Col>
//           <Col sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
//             {listingPartners.map((partner) => (
//               <ListingPartnerChip key={partner.partner} {...partner} />
//             ))}
//             <Box
//               role="button"
//               sx={{
//                 bg: "ui_100",
//                 color: "blue_500",
//                 text: "body",
//                 fontWeight: "black",
//                 px: "1.5rem",
//                 py: "1rem",
//                 borderRadius: "2rem",
//               }}
//             >
//               + 6 More Sites
//             </Box>
//           </Col>
//           <Col className="listing-actions">
//             <Action as="a" icon={UserCheck} href="https://google.com">
//               Applications
//             </Action>
//           </Col>
//         </Col>
//       </Grid>
//       <Dialog
//         id="dialog-id"
//         open={open}
//         close={close}
//         focusAfterClose="#dialog-focus"
//         focusFirst={`#${listingPartners[0].partner}`}
//       >
//         <ConfirmationDialog>
//           <DialogHeader>Dialog Header</DialogHeader>
//           <Box sx={{ my: "2rem" }}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
//             delectus fugit necessitatibus? Deleniti, quos! Officia inventore
//             tempore, quia cum mollitia rem provident nobis! Nostrum, non
//             excepturi. Quaerat labore id in?
//           </Box>
//           <Stack sx={{ display: "flex", alignItems: "stretch" }} role="group">
//             {listingPartners.map(({ partner }) => (
//               <Flex
//                 key={partner}
//                 sx={{ gap: "2rem", justifyContent: "space-between" }}
//               >
//                 <Box as="label" htmlFor={`${partner}-name`}>
//                   {partner}
//                 </Box>
//                 <Switch name={`${partner}-name`} id={partner} />
//               </Flex>
//             ))}
//           </Stack>
//         </ConfirmationDialog>
//       </Dialog>
//     </Container>
//   )
// }

function ListingPartnerChip({ partner, status, logo }) {
  const published = status === "published"
  return (
    <Box
      sx={{
        display: "inline-flex",
        gap: "1rem",
        py: "1rem",
        px: "1.5rem",
        bg: "ui_100",
        borderRadius: "2rem",
      }}
    >
      <Box
        as="img"
        role="presentation"
        src={logo}
        sx={{ width: "2rem", height: "2rem" }}
      />
      <Stack direction="row" gap="0.5rem">
        <Box as="span" sx={{ fontWeight: "black" }}>
          {partner}
        </Box>
        <Box as="span">|</Box>
        <Box as="span" sx={{ color: "ui_700" }}>
          {status}
        </Box>
      </Stack>
      <Box
        as={published ? Eye : EyeOff}
        sx={{ color: published ? "blue_500" : "ui_500" }}
      />
    </Box>
  )
}

// export function FullscreenDialogExample() {
//   const [open, setOpen] = useState(false)
//   const close = () => setOpen(false)
//   return (
//     <Container sx={{ mt: "4rem" }}>
//       <Button id="toggle-button" onClick={() => setOpen(true)}>
//         Fullscreen Dialog Toggle
//       </Button>
//       <Dialog
//         id="fullscreen-id"
//         open={open}
//         close={close}
//         focusAfterClose="#toggle-button"
//       >
//         <FullscreenDialog>
//           <DialogHeader>Hello World</DialogHeader>
//         </FullscreenDialog>
//       </Dialog>
//     </Container>
//   )
// }

// ConfirmationDialogExample.storyName = "Confirmation Dialog"

// FullscreenDialogExample.storyName = "Fullscreen Dialog"

export function PopoverExample() {
  const target = useRef<HTMLDivElement>(null)
  return (
    <Fragment>
      <Box ref={target}>Target</Box>
      <Popover targetRef={target}>
        <Box>Hello Popover</Box>
      </Popover>
    </Fragment>
  )
}

PopoverExample.storyName = "Popover"
