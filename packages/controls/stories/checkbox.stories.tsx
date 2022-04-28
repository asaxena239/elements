import { Box, Stack } from "@doors/core"
import { Fragment, useState } from "react"
import { Checkbox, Button } from "../src"

export default {
  title: "Packages/Controls/Checkbox",
}

export function UncontrolledCheckbox() {
  const [data, setData] = useState(null)
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    for (let [key, value] of formData.entries()) {
      setData((p) => ({ ...p, [key]: value }))
    }
  }
  return (
    <Fragment>
      <Stack as="form" onSubmit={handleSubmit}>
        <Checkbox id="checkbox-one" name="thing-1" />
        <Checkbox id="checkbox-two" label="Labeled checkbox" name="thing-2" />
        <Button type="submit">Submit</Button>
      </Stack>
      <Box as="pre">{data && JSON.stringify(data, null, 2)}</Box>
    </Fragment>
  )
}

// export function ControlledCheckbox() {}
