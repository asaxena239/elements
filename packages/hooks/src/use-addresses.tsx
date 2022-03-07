import { useRef, useReducer, useEffect, useContext, createContext } from "react"
import { noop } from "@doors/utils"
import { useScript } from "./use-script"

const AddressContext = createContext<{ loaded: boolean; error: boolean }>(null)

enum AddressActionType {
  addToken = "ADD_TOKEN",
  updateQuery = "UPDATE_QUERY",
  updateSuggestions = "UPDATE_SUGGESTIONS",
  updateSelection = "UPDATE_SELECTION",
}

type Address = {}

type AddressError = {}

interface AddressState {
  selection: Address | null
  suggestions: Address[]
  sessionToken: string
  error: AddressError | null
  notFound: boolean
  query: string
}

interface AddressAction {
  type: AddressActionType
  payload: any
}

function AddressProvider({ apiKey, ...props }) {
  if (!apiKey) throw Error("Must use pass an api key to the address provider.")
  const { loaded, error } = useScript(
    `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
  )
  return <AddressContext.Provider value={{ loaded, error }} {...props} />
}

function addressReducer(state: AddressState, action: AddressAction) {
  switch (action.type) {
    case AddressActionType.addToken:
      return { ...state, sessionToken: action.payload }

    default:
      throw Error("Unknown action type: " + action.type)
  }
}

const initialState = {
  selection: null,
  suggestions: [],
  sessionToken: null,
  error: false,
  called: false,
  notFound: false,
  query: "",
}

function useAddresses(input = "", { apiKey = "" }) {
  const { loaded, error } = useContext(AddressContext)
  const [state, context] = useReducer(addressReducer, initialState)

  return state
}

// function autocompleteReducer(state, action) {
//   const {
//     payload: {
//       query = "",
//       selection = null,
//       sessionToken = null,
//       suggestions = [],
//       called,
//     } = {},
//   } = action
//   switch (action.type) {
//     case "ADD_TOKEN":
//       return { ...state, sessionToken }
//     case "SET_QUERY":
//       return { ...state, query }
//     case "UPDATE_SUGGESTIONS":
//       return { ...state, suggestions, called }
//     case "SELECT_PLACE":
//       return { ...state, selection, suggestions: [], sessionToken, query: "" }
//     case "MANUAL_SELECT_PLACE":
//       return { ...state, selection, suggestions: [], query: "" }
//     case "ZERO_RESULTS":
//       return { ...state, called: true, suggestions: [] }
//     case "CLEAR_SELECTION":
//       return {
//         ...state,
//         selection: null,
//         suggestions: [],
//         called: false,
//         query: "",
//       }
//     case "ERROR":
//       return {
//         ...state,
//         selection: null,
//         suggestions: [],
//         error: true,
//         called: true,
//       }
//     default:
//       throw new Error("Must dispatch a known action.")
//   }
// }

// export default function useAutocomplete(input = "") {
//   const { loaded, error } = useAutocompleteKey()
//   const autocompleteRef = useRef(null)
//   const placesRef = useRef(null)
//   const [state, dispatch] = useReducer(autocompleteReducer, initialState)

//   async function getDetails({ id, onSelect = noop, manualSelection }) {
//     if (manualSelection) {
//       dispatch({
//         type: "MANUAL_SELECT_PLACE",
//         payload: {
//           selection: manualSelection.formatted_address,
//         },
//       })
//       onSelect(manualSelection)
//     } else {
//       const request = {
//         placeId: id,
//         fields: ["address_components", "formatted_address"],
//         sessionToken: state.sessionToken,
//       }
//       // eslint-disable-next-line no-undef
//       const newToken = new google.maps.places.AutocompleteSessionToken()
//       placesRef.current.getDetails(request, (place, status) => {
//         if (status === "OK") {
//           dispatch({
//             type: "SELECT_PLACE",
//             payload: {
//               selection: place.formatted_address,
//               sessionToken: newToken,
//             },
//           })
//           onSelect(place)
//         } else {
//           dispatch({
//             type: "ERROR",
//           })
//         }
//       })
//     }
//   }

//   function setQuery(q) {
//     dispatch({ type: "SET_QUERY", payload: { query: q } })
//   }

//   function clearSelection(onClear) {
//     onClear()
//     dispatch({
//       type: "CLEAR_SELECTION",
//     })
//   }

//   useEffect(() => {
//     // Instantiate services for later and create a session token.
//     if (loaded && !error) {
//       // eslint-disable-next-line no-undef
//       autocompleteRef.current = new google.maps.places.AutocompleteService()
//       // eslint-disable-next-line no-undef
//       placesRef.current = new google.maps.places.PlacesService(
//         document.createElement("div")
//       )
//       dispatch({
//         type: "ADD_TOKEN",
//         payload: {
//           // eslint-disable-next-line no-undef
//           sessionToken: new google.maps.places.AutocompleteSessionToken(),
//         },
//       })
//     }
//   }, [loaded])

//   function updateSuggestions(suggestions, status) {
//     switch (status) {
//       case "OK":
//         return dispatch({
//           type: "UPDATE_SUGGESTIONS",
//           payload: { suggestions, called: true },
//         })
//       case "ZERO_RESULTS":
//         return dispatch({
//           type: "UPDATE_SUGGESTIONS",
//           payload: { suggestions: [], called: true },
//         })
//       default:
//         dispatch({ type: "ERROR", payload: { status } })
//     }
//   }

//   useEffect(() => {
//     // Get autocomplete suggestions based on input
//     if (state.query.length > 0) {
//       const request = {
//         input: state.query,
//         types: ["address"],
//         sessionToken: state.sessionToken,
//       }

//       autocompleteRef.current.getPlacePredictions(request, updateSuggestions)
//     } else {
//       dispatch({
//         type: "UPDATE_SUGGESTIONS",
//         payload: { suggestions: [], called: false },
//       })
//     }
//   }, [state.query])

//   return { ...state, setQuery, getDetails, clearSelection }
// }
