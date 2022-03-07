import { MutableRefObject, useCallback, useEffect, useState } from "react"
import { closestScrollable } from "@doors/utils"

export function useResize<T extends HTMLElement>(
  target: MutableRefObject<T>,
  options: { parent?: HTMLElement } = {}
) {
  const [bounds, setBounds] = useState<Partial<DOMRect> | null>()
  const handleResize = useCallback(() => {
    if (target.current) {
      const parent = options.parent ?? closestScrollable(target.current)
      const targetRect = target.current.getBoundingClientRect()
      const parentRect = parent.getBoundingClientRect()
      setBounds({
        x: targetRect.x - parentRect.x,
        y: targetRect.y - parentRect.y,
        top: targetRect.top - parentRect.top,
        bottom: targetRect.y + targetRect.height - parentRect.y,
        left: targetRect.left - parentRect.left,
        right: targetRect.x + targetRect.width - parentRect.x,
        width: targetRect.width,
        height: targetRect.height,
      })
    }
  }, [target.current])
  const [observer] = useState(() => new ResizeObserver(handleResize))
  useEffect(() => {
    observer.observe(document.body)
    if (target.current) observer.observe(target.current)
    return () => observer.disconnect()
  }, [target.current])
  return bounds
}
