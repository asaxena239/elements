import { Container, Box } from "@doors/core"
import { getDocumentContent } from "@utils/read-documents"

export async function getStaticProps() {
  const pageContent = await getDocumentContent("packages/**/*.mdx")
  const pages = pageContent.map(({ data, slug }) => ({ ...data, slug }))
  return { props: { pages } }
}

export default function PackagesIndexPage({ pages }) {
  return (
    <Container sx={{ mt: "4rem" }}>
      <Box as="h1">Getting Started</Box>
      {/* <MDXRemote {...content} /> */}
    </Container>
  )
}
