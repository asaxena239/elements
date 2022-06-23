import { useMemo } from "react"
import merge from "deepmerge"
import { baseTheme, CustomTheme, colorModes } from "./theme"

/**
 *
 * useTheme: Return the current theme from any component.
 *
 * TODO: Implement color modes.
 * A modes section within the colors key along with a useColorModes hook for changing the
 * color scheme of the application either manually or with the users preference.
 */
export function useTheme(customTheme: CustomTheme = {}) {
  const memoizedTheme = useMemo(() => {
    const { baseSize, space, config = { colorMode: "avail" } } = customTheme
    if (baseSize && !space) {
      customTheme.space = Array.from(Array(15).keys()).map((i) => i * baseSize)
    }
    customTheme.colors = {
      ...customTheme.colors,
      ...colorModes[config.colorMode],
    }
    return merge(baseTheme, customTheme, { arrayMerge: (x, y) => y })
  }, [customTheme])
  return memoizedTheme
}
