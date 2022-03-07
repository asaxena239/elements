import fg from "fast-glob"
import { readFile } from "fs/promises"
import path from "path"
import matter from "gray-matter"

/**
 * Import local mdx files at build time.
 * @param {string} pathname
 * @param {string} basePath Base folder to resolve. Defaults to "docs"
 * @returns {Promise} that resolves to an object with the content of the document and the
 * frontmatter as data.
 */
export async function getDocument(pathname, basePath = "docs") {
  const source = await readFile(path.resolve(basePath, pathname))
  return matter(source)
}

/**
 *
 * @param {string} glob
 * @param {string} basePath
 * @returns {Promise}
 */
export async function getDocumentPaths(glob, basePath = "docs") {
  return await fg(glob, { cwd: path.resolve(basePath) })
}

export function removePathSegments(path, segments) {
  return segments.reduce((newPath, segment) => {
    return newPath.replace(segment, "")
  }, path)
}

/**
 * Import a glob pattern of local mdx files at build time.
 * @param {string} glob
 * @param {string} basePath Base folder to resolve to. Defaults to "docs"
 * @returns {Promise} Array of gray matter files.
 */
export async function getDocumentContent(glob, basePath = "docs") {
  const entries = await getDocumentPaths(glob, basePath)
  const pages = []
  for (let entry of entries) {
    const page = await getDocument(entry, basePath)
    pages.push({ ...page, slug: entry.split(".")[0] })
  }
  return pages
}
