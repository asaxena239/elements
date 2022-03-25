import { Container, Box } from "@doors/core"
import { getDocumentContent } from "@utils/read-documents"

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

export async function getStaticProps({ params }) {
  console.log({ params })
  return {
    props: { hello: "world" },
  }
}

export default function CodePage() {
  return (
    <Container>
      <Box>CodePage. Should have Sidebar</Box>
    </Container>
  )
}
