import { Stack } from "@doors/core"
import { Button } from "../src"

export default {
  title: "Packages/Controls/Button",
}

export function StandardButton() {
  return (
    <Stack>
      <Button>Standard</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger" onClick={(e) => console.log("danger click")}>
        Error
      </Button>
      <Button variant="danger" disabled>
        Error
      </Button>
    </Stack>
  )
}

export function SplitButton() {
  return <Button>Thing thing</Button>
}
