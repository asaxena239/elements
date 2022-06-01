import { Box, Flex, Stack } from "@doors/core"
import { Button, Input } from "@doors/controls"
import {} from "@doors/icons"

export default {
  title: "Patterns/Auth",
  parameters: {
    layout: "fullscreen",
  },
}

export function AuthPage() {
  return (
    <Flex sx={{ minHeight: "100vh" }}>
      <Stack
        sx={{
          flex: "1 0 50%",
          p: 4,
          alignItems: "end",
          justifyContent: "center",
          bg: "ui",
        }}
      >
        <Stack sx={{ maxWidth: "45rem", width: "100%", alignItems: "stretch" }}>
          <Button
            sx={{
              color: "text",
              borderColor: "text",
              display: "flex",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <GoogleIcon /> Continue with Google
          </Button>
          <Box sx={{ textAlign: "center" }}>or</Box>
          <Stack as="form" sx={{ alignItems: "stretch", gap: 1 }}>
            <Input label="Email" name="email" autoComplete="email" />
            <Input
              label="Password"
              type="password"
              name="password"
              autoComplete="new-password"
            />
            <Button type="button">Create account</Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{ flex: "1 0 50%", p: 4, justifyContent: "center" }}>
        <Stack sx={{ maxWidth: "45rem", width: "100%" }}>
          <Box>Illustration</Box>
          <Box>Listings</Box>
          <Box>Screening</Box>
          <Box>Leases</Box>
          <Box>Payments</Box>
          <Box>Maintenance</Box>
        </Stack>
      </Stack>
    </Flex>
  )
}

function GoogleIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 18 18" {...props}>
      <path
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="#4285f4"
        stroke="none"
      ></path>
      <path
        d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="#34a853"
        stroke="none"
      ></path>
      <path
        d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="#fbbc05"
        stroke="none"
      ></path>
      <path
        d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="#ea4335"
        stroke="none"
      ></path>
    </svg>
  )
}
