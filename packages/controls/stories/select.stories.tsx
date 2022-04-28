import { X } from "@doors/icons"
import { Box, Container } from "@doors/core"
import { useState, useEffect, useContext, ChangeEvent } from "react"
import {
  Select,
  SelectInput,
  SelectList,
  SelectItem,
  SelectContext,
  SelectActions,
} from "../src"

export default {
  title: "Packages/Controls/Select",
}

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
