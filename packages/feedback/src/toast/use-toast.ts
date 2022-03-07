import { ReactNode, useContext } from "react"
import { resolveChild } from "@doors/utils"
import { ToastContext } from "./provider"
import { ToastObject } from "./reducer"

interface CreateToast {
  blank(children: ReactNode, options?: any): string
  success(children: ReactNode, options?: any): string
  error(children: ReactNode, options?: any): string
  loading(children: ReactNode, options?: any): string
  promise(
    promise: Promise<any>,
    resolvers: {
      loading: ReactNode
      success: ReactNode
      error: ReactNode
    },
    options?: any
  ): Promise<string>
}

export function useToast(options?: any): CreateToast {
  const { createToast } = useContext(ToastContext)
  return {
    blank: createToast("blank"),
    success: createToast("success"),
    error: createToast("error"),
    loading: createToast("loading"),
    promise: async (promise, { loading, success, error }, options) => {
      const id = createToast("loading")(loading, options)
      try {
        const result = await promise
        return createToast("success")(resolveChild(success, result), {
          id,
          ...options,
        })
      } catch (promiseError) {
        return createToast("error")(resolveChild(error, promiseError), {
          id,
          ...options,
        })
      }
    },
  }
}
