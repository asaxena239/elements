// import { mergeRefs, wrapEvent } from "@doors/utils"
import { Box } from "@doors/core"
import {
  Children,
  cloneElement,
  createContext,
  forwardRef,
  HTMLProps,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { useRovingIndex } from "@doors/hooks"
import { Popover } from "./popover"

const MenuContext = createContext(null)

export function Menu({ defaultOpen = false, menuTarget, children }) {
  const containerRef = useRef(null)
  const [open, setOpen] = useState(defaultOpen)
  useEffect(() => {
    menuTarget.current.tabIndex = 0
    menuTarget.current.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        setOpen((o) => !o)
        console.log(containerRef.current)
        containerRef.current.focus()
      }
    })
  }, [menuTarget])
  return (
    <MenuContext.Provider value={{ open, containerRef, menuTarget }}>
      {open && <MenuList ref={containerRef}>{children}</MenuList>}
    </MenuContext.Provider>
  )
}

export const MenuList = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  function MenuList({ children }, ref) {
    const { menuTarget } = useContext(MenuContext)
    const { containerProps, getTargetProps } = useRovingIndex()
    const menuItems = Children.map(children, (child: ReactElement, idx) => {
      if (child.type.toString() === "MenuItem") {
        return cloneElement(child, getTargetProps(idx))
      }
      return child
    })
    return (
      <Popover {...containerProps} as="ul" ref={ref} targetRef={menuTarget}>
        {menuItems}
      </Popover>
    )
  }
)

export const MenuItem = forwardRef<HTMLLIElement, HTMLProps<HTMLLIElement>>(
  function MenuItem(props, ref) {
    return <Box {...props} as="li" ref={ref} />
  }
)
