import { Stack } from "@doors/core"
import { Button, Input } from "../src"

/**
 * Well the required prop doesn't do anything VISUALLY.
 */

export default {
  title: "Packages/Controls/Input",
}

export function UncontrolledInput() {
  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    for (let [name, value] of formData) {
      console.log(name, value)
    }
  }
  return (
    <Stack as="form" gap="1rem" onSubmit={handleSubmit}>
      <Input label="Full Name" name="full-name" />
      <Input label="Phone" name="phone" inputMode="tel" required />
      <Button type="submit">Submit</Button>
    </Stack>
  )
}
