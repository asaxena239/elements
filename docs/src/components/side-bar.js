import { Box } from "@doors/core"
import { Fragment } from "react"

function FileList({ items }) {
  return (
    <Fragment>
      {items.map((item) => {
        return (
          <Box as="ul" sx={{ ml: "2rem" }} key={item.pathName}>
            <Box as="li">{item.name}</Box>
            {Boolean(item.children.length) && (
              <FileList items={item.children} />
            )}
          </Box>
        )
      })}
    </Fragment>
  )
}

export function SideBar({ fileList }) {
  console.log({ fileList })
  return (
    <Box className="side-bar">
      <FileList items={fileList} />
    </Box>
  )
}
