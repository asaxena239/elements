import { useEffect } from "react"
import { Container, Box } from "@doors/core"
import { ToastProvider, useToast } from "../src/toast"

export default {
  title: "Packages/Feedback/Toast",
  decorators: [
    (Story) => {
      return (
        <ToastProvider>
          <Story />
        </ToastProvider>
      )
    },
  ],
}

export function DefaultToast() {
  const createToast = useToast()
  return (
    <Box
      onClick={(e) => {
        const id = createToast.blank((t) => {
          return (
            <Box>
              <Box>Blank Toast</Box>
              <Box
                sx={{ color: "red" }}
                onClick={(e) => {
                  console.log("inside toast", t)
                  t.dismiss(t.id)
                }}
              >
                close
              </Box>
            </Box>
          )
        })
        const idTwo = createToast.error("error")
        console.log(id, idTwo)
      }}
    >
      Hello Toast
    </Box>
  )
}

export function PromiseToast(props) {
  const createToast = useToast()
  useEffect(() => {
    const getData = new Promise((res) => {
      setTimeout(() => res(true), 4000)
    })
    createToast.promise(getData, {
      loading:
        "We're syncing existing rent payments, maintenance costs, and other transactions from your portfolio.",
      success: "Your transactions have been successfully synced.",
      error: "There are no eligible transactions to sync at this time.",
    })
  }, [])
  return (
    <Container sx={{ my: 4 }}>
      <Box>Promise Toast</Box>
    </Container>
  )
}
