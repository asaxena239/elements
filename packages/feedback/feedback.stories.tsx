import { Fragment, useEffect, useState } from "react"
import { Box, Container } from "@doors/core"
import {
  FixedProgress,
  FixedProgressStep,
  FluidProgress,
  SkeletonLoader,
  Status,
} from "./src"
import { Input } from "@doors/controls"

export default { title: "Packages/Feedback" }

function CustomTitle() {
  return (
    <Fragment>
      <Box as="p">Step Five</Box>
      <Box as="p" sx={{ fontSize: "1rem" }}>
        Example invalid step
      </Box>
    </Fragment>
  )
}

function StepTitle() {
  return (
    <Fragment>
      <Box as="a" href="https://google.com" className="link">
        Step One
      </Box>
    </Fragment>
  )
}

export function FixedProgressExample() {
  const steps = [
    { label: StepTitle, id: "4152", status: "complete", title: "First step" },
    { label: "Step Two", id: "2342", status: "current", title: "Second step" },
    {
      label: "Step Three",
      id: "9828",
      status: "incomplete",
      title: "Third step",
    },
    {
      label: "Step Four",
      id: "9389",
      status: "disabled",
      title: "Fourth step",
    },
    { label: CustomTitle, id: "7748", status: "error", title: "Fifth step" },
  ]
  return (
    <Container>
      <FixedProgress label="Fixed Progress Label">
        {steps.map((step) => (
          <FixedProgressStep
            title={step.title}
            key={step.id}
            status={step.status as Status}
          >
            {step.label}
          </FixedProgressStep>
        ))}
      </FixedProgress>
      <Box as="section" id="current-step">
        Hello World
      </Box>
      <Box as="section" sx={{ mt: "4rem" }}>
        <Input label="I should be focusable" />
      </Box>
    </Container>
  )
}

export function FluidProgressExample() {
  return (
    <Container sx={{ mt: "4rem" }}>
      <FluidProgress label="Current Step" current={2} total={5} />
    </Container>
  )
}

export function SkeletonLoaderExample() {
  const [data, set] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      set({
        name: "Patrick Krawczykowski",
        email: "patrick@avail.co",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem tempora excepturi, molestiae eos error, facilis tenetur libero, minima veniam adipisci ad iste fugit quod officiis quidem at. Nam, enim?",
      })
    }, 6000)
  }, [])
  return (
    <Container>
      <SkeletonLoader
        loaded={!!data}
        initialHeight="10rem"
        sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
      >
        <Box sx={{ text: "subtitle" }}>{data?.name}</Box>
        <Box sx={{ text: "small" }}>{data?.email}</Box>
        <Box>{data?.bio}</Box>
      </SkeletonLoader>
    </Container>
  )
}
