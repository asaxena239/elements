import React, { forwardRef, useState, useEffect } from "react"
import { wrapEvent, noop, useId } from "@rent_avail/utils"
import { Box } from "@rent_avail/layout"
import { Calendar } from "react-feather"
import clsx from "clsx"

function Input(
  {
    as = "input",
    className,
    defaultValue,
    disabled,
    error,
    icon,
    label,
    labelId,
    required,
    onChange = noop,
    sx = {},
    type = "text",
    value,
    ...props
  },
  ref
) {
  const isDate = type === "date"
  const isTextarea = as === "textarea"
  const ariaId = useId(labelId || label)
  const [filled, setFilled] = useState(
    isDate || Boolean(value) || Boolean(defaultValue)
  )
  function handleChange({ target: { value: innerValue } }) {
    setFilled(innerValue?.length || isDate)
  }
  useEffect(() => {
    setFilled(value?.length || isDate)
  }, [value])
  return (
    <Box sx={{ minHeight: "9rem" }} className={className}>
      <Box
        as="label"
        className={clsx({ filled, error })}
        sx={{
          position: "relative",
          display: "block",
          color: disabled ? "ui_700" : "ui_900",
          cursor: disabled ? "not-allowed" : "text",
          lineHeight: "small",
          width: "100%",
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "ui_500",
          borderRadius: 4,
          "&:focus-within": {
            borderColor: "blue_500",
            color: "blue_500",
          },
          "&:focus-within .input__label-row, &.filled .input__label-row": {
            transform: "translateY(-1rem) scale(0.889)",
          },
          "&.filled:not(:focus-within):not(.error) .input__label-row": {
            color: disabled ? "ui_500" : "ui_700",
          },
          "&.error": {
            borderColor: "red_500",
            color: "ui_900",
          },
          "&.error .input__label-row": {
            color: "red_500",
          },
          "& > *": {
            transition: "120ms",
          },
          ...sx,
        }}
      >
        <Box
          {...props}
          ref={ref}
          as={as}
          type={type}
          aria-labelledby={ariaId}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={wrapEvent(onChange, handleChange)}
          placeholder={isDate ? "mm/dd/yyyy" : undefined}
          sx={{
            all: "unset",
            appearance: "none",
            p: icon ? "3rem 2rem 1rem 5rem" : "3rem 2rem 1rem",
            boxSizing: "border-box",
            position: "relative",
            fontFamily: "body",
            fontSize: "body",
            lineHeight: "body",
            width: "100%",
            height: isTextarea ? "auto" : "6.5rem",
            outline: "none",
            clipPath: isTextarea ? "inset(3rem 0 0 0)" : "none",
            "&::-webkit-calendar-picker-indicator": {
              background: "transparent",
              opacity: 1,
              cursor: "pointer",
            },
            "&::-webkit-calendar-picker-indicator:hover + svg": {
              color: "ui_300",
            },
          }}
        />
        {isDate && (
          <Box
            as={Calendar}
            className="calendar-icon"
            sx={{
              pointerEvents: "none",
              position: "absolute",
              right: "2rem",
              top: "3rem",
            }}
          />
        )}
        <Box
          className="input__label-row"
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            top: "2.25rem",
            left: icon ? "5rem" : "2rem",
            transformOrigin: "top left",
            pointerEvents: "none",
            color: disabled ? "ui_500" : "inherit",
          }}
        >
          <Box as="span" id={ariaId}>
            {label}
          </Box>
          {required && (
            <Box
              as="span"
              sx={{
                width: 6,
                height: 6,
                bg: "red_500",
                borderRadius: "50%",
                ml: "1rem",
              }}
            />
          )}
        </Box>
        {icon && (
          <Box
            as={icon}
            aria-label="input icon"
            sx={{ position: "absolute", left: "2rem", top: "2.25rem" }}
          />
        )}
      </Box>
      {error && (
        <Box
          role="alert"
          sx={{
            fontSize: "small",
            lineHeight: "small",
            color: "red_500",
            width: "100%",
          }}
        >
          {error}
        </Box>
      )}
    </Box>
  )
}

export default forwardRef(Input)
