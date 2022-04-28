import { FormEvent } from "react"
import { Box, Flex } from "@doors/core"
import { RadioButton, RadioGroup } from "../src"

export default {
  title: "Packages/Controls/Radio Buttons",
}

export function ControlledRadioButton() {
  return (
    <RadioGroup
      onChange={(event: FormEvent<HTMLFieldSetElement>) => {
        const target = event.target as HTMLInputElement
        console.log(target.value)
      }}
    >
      <Flex sx={{ gap: "2rem" }}>
        <Box as="label" htmlFor="sauce-1">
          Mayo
        </Box>
        <RadioButton id="sauce-1" name="sauce-preference" value="mayo" />
      </Flex>
      <Flex sx={{ gap: "2rem" }}>
        <Box as="label" htmlFor="sauce-2">
          Mustard
        </Box>
        <RadioButton id="sauce-2" name="sauce-preference" value="mustard" />
      </Flex>
    </RadioGroup>
  )
}
