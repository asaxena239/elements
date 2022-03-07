import { createContext, useMemo, useReducer } from "react"

export const AvatarsContext = createContext(undefined)

function avatarsReducer(state, action) {
  switch (action.type) {
    case "REGISTER":
      return [...state, action.payload]
    case "DEREGISTER":
      return state.filter((node) => node.id !== action.payload)
    default:
      throw Error(`Unknown action type: ${action.type}`)
  }
}

export function AvatarsProvider(props) {
  const [descendants, dispatch] = useReducer(avatarsReducer, [])
  const context = useMemo(() => ({ descendants, dispatch }), [])
  return <AvatarsContext.Provider value={context} {...props} />
}
