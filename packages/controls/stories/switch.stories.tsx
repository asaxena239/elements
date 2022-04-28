import { Container, Stack } from "@doors/core"
import { Switch, Button } from "../src"

export default {
  title: "Packages/Controls/Switch",
}

export function UncontrolledSwitch() {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log(data)
  }
  return (
    <Container>
      <Stack as="form" onSubmit={handleSubmit}>
        <Switch name="switch-one" value="has-lettuce" />
        <Switch name="switch-two" value="has-bacon" />
        <Switch name="switch-three" value="has-tomato" />
        <Button type="submit">Submit</Button>
      </Stack>
    </Container>
  )
}
