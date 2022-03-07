import styled from "styled-components"
import { forwardRef, HTMLProps } from "react"
import { SXObject, Box, sx } from "@doors/core"
import css from "@styled-system/css"

interface RadioButtonProps extends HTMLProps<HTMLInputElement> {
  label?: string
  sx?: SXObject
  id: string
}

/**
 * RadioButton: A single input button, used to select one of many options.
 *
 * Radio buttons should be always be used in a group of two or more and should be the
 * default over select inputs for choices of less than 5.
 */

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  function RadioButton({ sx = {}, label, ...props }, ref) {
    return (
      <Box
        as="label"
        sx={{
          position: "relative",
          display: "inline-flex",
          gap: "1rem",
          "& input:checked ~ .radio-button": {
            bg: "blue_300",
            borderColor: "blue_500",
          },
          "& input:checked ~ .radio-button:after": {
            bg: "blue_500",
          },
          "&:focus-within": {
            outline: "2px solid",
            outlineColor: "blue_500",
          },
          ...sx,
        }}
      >
        <Box
          {...props}
          ref={ref}
          as="input"
          type="radio"
          sx={{
            clip: "rect(0 0 0 0)",
            clipPath: "inset(50%)",
            height: 1,
            overflow: "hidden",
            position: "absolute",
            whiteSpace: "nowrap",
            width: 1,
          }}
        />
        <Box
          className="radio-button"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            borderWidth: 2,
            borderColor: "ui_500",
            borderStyle: "solid",
            "&:after": {
              content: '""',
              width: "1rem",
              height: "1rem",
              background: "transparent",
              borderRadius: "50%",
              transition: "200ms",
            },
          }}
        />
      </Box>
    )
  }
)

interface RadioGroupProps {
  sx?: SXObject
}

/**
 * RadioGroup: A helpful container for multiple RadioButton components.
 *
 * RadioGroups should be used to collect information from a user when they make a choice
 * using a radio button.
 *
 * @example
 *
 * <RadioGroup onChange={(e) => console.log(e.target.value)}>
 *   <RadioButton name="favorite-food" value="chips" />
 *   <RadioButton name="favorite-food" value="fruit" />
 *   <RadioButton name="favorite-food" value="meat" />
 * </RadioGroup>
 */

export const RadioGroup = styled.fieldset<RadioGroupProps>(
  css({
    appearance: "none",
    border: "none",
    p: 0,
    m: 0,
  }),
  sx
)
