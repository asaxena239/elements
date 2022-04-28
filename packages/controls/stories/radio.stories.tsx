import { FormEvent } from "react"
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
      <RadioButton id="id-1" name="thing" value="one" />
      <RadioButton id="id-2" name="thing" value="two" label="Labeled radio" />
    </RadioGroup>
  )
}
