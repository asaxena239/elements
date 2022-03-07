import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import { Box, Stack, Container } from "@doors/core"
import { X } from "@doors/icons"
import {
  Button,
  Input,
  Checkbox,
  RadioButton,
  RadioGroup,
  Slider,
  Switch,
  Select,
  SelectInput,
  SelectList,
  SelectItem,
  SelectContext,
  SelectActions,
  SplitButton,
} from "./src"

export default { title: "Packages/Controls" }

export function InputExample() {
  return <Input label="Hello Input" />
}

InputExample.storyName = "Input"

export function CheckboxExample() {
  return (
    <Stack>
      <Checkbox id="checkbox-one" />
      <Checkbox id="checkbox-two" label="Labeled checkbox" />
    </Stack>
  )
}

CheckboxExample.storyName = "Checkbox"

export function RadioExample() {
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

RadioExample.storyName = "Radio"

export function SliderExample() {
  const [slideValue, setValue] = useState(0)
  return (
    <Slider
      min="0"
      max="100"
      value={slideValue}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value))
      }}
    />
  )
}

SliderExample.storyName = "Slider"

export function SwitchExample() {
  const [checked, setChecked] = useState(false)
  function handleChange(event) {
    setChecked(event.target.checked)
  }
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log(data, checked)
  }
  return (
    <Container>
      <Stack as="form" onSubmit={handleSubmit}>
        <Switch name="switch-one" value="hello" />
        <Switch name="switch-two" onChange={handleChange} checked={checked} />
        <Switch name="switch-three" />
        <Button type="submit">Submit</Button>
      </Stack>
    </Container>
  )
}

SwitchExample.storyName = "Switch"

const statesUrl =
  "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json"

export function SelectExample() {
  const [state, setStatesHash] = useState({ loaded: false, statesArray: [] })
  useEffect(() => {
    async function getStates() {
      const response = await fetch(statesUrl)
      const statesJson = await response.json()
      const statesArray = Object.entries(statesJson)
      setStatesHash({ loaded: true, statesArray })
    }
    getStates()
  }, [])
  if (!state.loaded) return "loading..."
  return (
    <Container sx={{ mt: "4rem" }}>
      <Select id="home-address">
        <SelectInput label="Home State" />
        <SelectList>
          {state.statesArray.map(([key, value]) => (
            <SelectItem
              key={key}
              id={key}
              tokens={[{ name: key, value, id: key }]}
            >
              {value}
            </SelectItem>
          ))}
        </SelectList>
      </Select>
      <Select multi id="another-address" sx={{ mt: "2rem" }}>
        <SelectInput label="Office State" />
        <SelectList>
          {state.statesArray.map(([key, value]) => (
            <SelectItem
              key={key}
              id={key}
              tokens={[{ name: key, value, id: key }]}
            >
              {value}
            </SelectItem>
          ))}
        </SelectList>
      </Select>
      <Select
        multi
        id="third-address"
        sx={{ mt: "2rem" }}
        defaultValue={[
          { name: state.statesArray[24][0], value: state.statesArray[24][1] },
        ]}
      >
        <SelectInput label="Vacation State" />
        <SelectList>
          {state.statesArray.map(([key, value]) => (
            <SelectItem
              key={key}
              id={key}
              tokens={[{ name: key, value, id: key }]}
            >
              {value}
            </SelectItem>
          ))}
        </SelectList>
      </Select>
    </Container>
  )
}

SelectExample.storyName = "Select"

function CustomToken({ name, photo, id }) {
  const { dispatch } = useContext(SelectContext)
  function removeToken() {
    dispatch({
      type: SelectActions.removeToken,
      payload: (token) => token.id !== id,
    })
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bg: "blue_100",
        color: "blue_900",
        text: "small",
        borderRadius: 4,
        overflow: "hidden",
        height: "2rem",
      }}
    >
      <Box
        as="img"
        src={photo}
        sx={{ width: "2rem", height: "2rem", bg: "blue_300" }}
      />
      <Box as="span" sx={{ px: "0.5rem" }}>
        {name}
      </Box>
      <Box
        as={X}
        sx={{ width: "1.5rem", height: "1.5rem", mr: "0.5rem" }}
        onClick={removeToken}
      />
    </Box>
  )
}

const initialState = [
  {
    id: "1",
    title: "Jeff",
    tokens: [
      { id: "12", name: "Jeff Daniels", photo: "https://i.pravatar.cc/72" },
    ],
  },
  {
    id: "2",
    title: "Hugh",
    tokens: [
      { id: "13", name: "Hugh Jackman", photo: "https://i.pravatar.cc/72" },
    ],
  },
  {
    id: "3",
    title: "Rachel",
    tokens: [
      { id: "14", name: "Rachel Evan Wood", photo: "https://i.pravatar.cc/72" },
    ],
  },
]

export function SelectCustomTokenExample() {
  const [applicants, setApplicants] = useState(initialState)
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.value.length) return setApplicants(initialState)
    setApplicants((prevState) =>
      prevState.filter((applicant) =>
        applicant.tokens.some((token) => token.name.includes(e.target.value))
      )
    )
  }
  return (
    <Container sx={{ mt: "4rem" }}>
      <Select
        multi
        id="custom-token-example"
        onSelect={(e) => setApplicants(initialState)}
      >
        <SelectInput
          label="Multi Select"
          token={CustomToken}
          onChange={handleChange}
        />
        <SelectList>
          <Box
            sx={{
              px: "2rem",
              py: "1rem",
              text: "small",
              borderBottom: (theme) => `1px solid ${theme.colors.ui_500}`,
              color: "ui_700",
            }}
          >
            Applicants
          </Box>
          {applicants.map((applicant) => (
            <SelectItem
              key={applicant.id}
              id={applicant.id}
              tokens={applicant.tokens}
            >
              {applicant.title}
            </SelectItem>
          ))}
          <Box
            sx={{
              px: "2rem",
              py: "1rem",
              text: "small",
              borderBottom: (theme) => `1px solid ${theme.colors.ui_500}`,
              color: "ui_700",
            }}
          >
            <button>hwlloa sdf</button>
          </Box>
        </SelectList>
      </Select>
    </Container>
  )
}

SelectCustomTokenExample.storyName = "Select With Custom Token"

export function SplitButtonExample() {
  return <SplitButton />
}

SplitButtonExample.storyName = "Split Button"
