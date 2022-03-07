import { PropsWithChildren } from "react"

export type ToastObject = PropsWithChildren<{
  id: string
  createdAt: number
  duration: number
  pausedFor: number
  role: string
  type: string
  visible: boolean
  dismiss(id: string): void
}>

interface ToastsState {
  toasts: ToastObject[]
  paused: boolean
}

type ToastsAction =
  | { type: "INSERT_TOAST"; payload: ToastObject }
  | { type: "REMOVE_TOAST"; payload: string }
  | { type: "UPDATE_TOAST"; payload: { id: string; toast: ToastObject } }

export function toastReducer(state: ToastsState, action: ToastsAction) {
  switch (action.type) {
    case "INSERT_TOAST": {
      const { payload: toast } = action
      const update = state.toasts.find(({ id }) => id === toast.id)
      if (update) {
        return {
          ...state,
          toasts: state.toasts.map((t) =>
            t.id === toast.id ? { ...t, ...toast } : t
          ),
        }
      }
      return { ...state, toasts: [...state.toasts, action.payload] }
    }
    case "REMOVE_TOAST":
      if (action.payload === undefined) {
        return { ...state, toasts: [] }
      }
      return {
        ...state,
        toasts: state.toasts.filter(({ id }) => id !== action.payload),
      }
    case "UPDATE_TOAST":
      const {
        payload: { id, toast },
      } = action
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === id ? { ...t, ...toast } : t)),
      }
  }
}
