import { SyntheticEvent } from "react"

type ReactRef<T> = React.Ref<T> | React.RefObject<T> | React.MutableRefObject<T>

function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T) {
  if (ref === null) return
  if (typeof ref === "function") {
    ref(value)
    return
  }
  try {
    // @ts-ignore
    ref.current = value
  } catch (error) {
    throw new Error(`Cannot assign ${value} to ${ref}`)
  }
}

export function mergeRefs<T>(...refs: (ReactRef<T> | undefined)[]) {
  return (node: T | null) => refs.forEach((ref) => assignRef(ref, node))
}

export function throttle(fn: any, ms: number) {
  let timeout: ReturnType<typeof setTimeout>
  function exec() {
    fn.apply(null)
  }
  function clear() {
    return timeout === undefined ? null : clearTimeout(timeout)
  }
  if (fn !== undefined && ms !== undefined) {
    timeout = setTimeout(exec, ms)
  } else {
    console.error("callback function and the timeout must be supplied")
  }
  // API to clear the timeout
  return {
    clearTimeout: clear,
  }
}

export function wrapEvent(original: any, additional: any) {
  return (event: SyntheticEvent) => {
    if (original) original(event)
    if (!event.defaultPrevented) return additional(event)
  }
}

export function noop(): void {}

export function getId() {
  return `_doors-${Math.random().toString(36).substring(2, 9)}`
}

export function isScrollable(node: HTMLElement) {
  const regex = /(auto|scroll)/
  const style = getComputedStyle(node, null)
  if (style.position === "relative") return true
  return regex.test(style.overflow + style.overflowY)
}

export function closestScrollable(element: HTMLElement) {
  let parent = element
  while (parent?.parentElement) {
    parent = parent.parentElement
    if (isScrollable(parent)) return parent
  }
  return typeof document === "undefined" ? null : document.body
}

export function getFocusable(element: HTMLElement) {
  const query = `
    a[href],
    button:not([disabled]),
    input:not([type="hidden"]):not([disabled]),
    textarea:not([disabled]),
    select:not([disabled]),
    details,
    [tabindex]:not([tabindex="-1"])
  `
  return element.querySelectorAll(query)
}

export function resolveChild(value, arg) {
  return typeof value === "function" ? value(arg) : value
}
