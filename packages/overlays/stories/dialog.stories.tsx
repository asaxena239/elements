import { Box } from "@doors/core"
import { Dialog, DialogHeader } from "../src"

export default { title: "Packages/Overlays/Dialogs" }

export function ConfirmationDialog() {
  return (
    <Dialog variant="confirmation" open={true} id="confirmation_1">
      <DialogHeader>Hello Header</DialogHeader>
      <Box>Hello Confirmation Dialog</Box>
    </Dialog>
  )
}

export function FullscreenDialog() {
  return (
    <Dialog variant="fullscreen" open={true} id="fullscreen_1">
      <DialogHeader>Fullscreen Header</DialogHeader>
    </Dialog>
  )
}
