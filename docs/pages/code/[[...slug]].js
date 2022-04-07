import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import { Box, Container } from "@doors/core"
import { getDocumentContent } from "@utils/read-documents"
import { SideBar } from "@components/side-bar"

export async function getStaticPaths() {
  const files = await getDocumentContent("**/*.mdx")
  const paths = files.map((file) => {
    const isIndex = file.slug === "index"
    return {
      params: { slug: isIndex ? false : file.slug.split("/") },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

// I hate having to get the documents twice, I wish I could just pass extra data to all
// paths. Not gonna write a cache for it though.

export async function getStaticProps({ params }) {
  const files = await getDocumentContent("**/*.mdx")
  const { content, data } = files.find((file) => {
    if (!params.slug) return file.slug === "index"
    return file.slug === params.slug
  })
  const serializedContent = await serialize(content)
  const fileList = { result: [] }
  for (let file of files) {
    const pathSegments = file.slug.split("/")
    pathSegments.reduce((tree, pathName) => {
      if (!tree[pathName]) {
        tree[pathName] = { result: [] }
        tree.result.push({
          pathName,
          children: tree[pathName].result,
          name: file.data.name,
        })
      }
      return tree[pathName]
    }, fileList)
  }
  return {
    props: { fileList: fileList.result, content: serializedContent, data },
  }
}

export default function CodePage({ fileList, content }) {
  return (
    <Container>
      <SideBar fileList={fileList} />
      <MDXRemote {...content} />
    </Container>
  )
}
