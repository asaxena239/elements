import { FormEvent } from "react"
import { Box, Flex } from "@doors/core"
import { RadioButton, RadioGroup } from "../src"

export default {
  title: "Packages/Controls/Radio Buttons",
}

export function UncontrolledRadioButton() {
  return (
    <Box>
      <Box sx={{text: "title", mb: 2}}>Choose a sauce.</Box>
      <RadioGroup
        sx={{display: "flex", flexDirection:"column", gap: 1}}
        onChange={(event: FormEvent<HTMLFieldSetElement>) => {
          const target = event.target as HTMLInputElement
          console.log(target.value)
        }}
      >
      <Flex sx={{ gap: "2rem" }}>
        <RadioButton id="sauce-1" name="sauce-preference" value="mayo" />
        <Box as="label" htmlFor="sauce-1">
          Honey Mustard
        </Box>
      </Flex>
      <Flex sx={{ gap: "2rem" }}>
        <RadioButton id="sauce-2" name="sauce-preference" value="mustard" />
        <Box as="label" htmlFor="sauce-2">
          Garlic Aioli
        </Box>
      </Flex>
    </RadioGroup>
    </Box>
  )
}
