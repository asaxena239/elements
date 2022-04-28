import { getId } from "@doors/utils"
import { useMemo } from "react"

export function useId(seed = "doors") {
  return useMemo(() => getId(), [seed])
}
