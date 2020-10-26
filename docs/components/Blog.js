import React from "react"
import { Box, Container, Grid, Col } from "@rent_avail/layout"
import Link from "next/link"
import { textAlign } from "styled-system"

export function BlogHeader() {
  return (
    <Box
      as="header"
      sx={{
        display: "flex",
        "& > a": { color: "blue_500", cursor: "pointer" },
      }}
    >
      <Link href="/">
        <Box
          as="a"
          sx={{
            display: "flex",
            alignItems: "center",
            "&:hover": {
              color: "blue_900",
              "> img": {
                filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.24))",
              },
            },
          }}
        >
          <Box
            as="img"
            src="/images/avail_icon.svg"
            sx={{ height: "3rem", mr: "1rem", transition: "200ms" }}
          />
          <Box as="span" sx={{ fontSize: "3rem" }}>
            Design
          </Box>
        </Box>
      </Link>
      <Link href="/blog">
        <Box
          as="a"
          sx={{
            ml: "auto",
            fontSize: "3rem",
            "&:hover": { color: "blue_900" },
          }}
        >
          Articles
        </Box>
      </Link>
    </Box>
  )
}

export function BlogFooter() {
  return (
    <Box as="footer" sx={{ bg: "blue_100", pt: "8rem", pb: "2rem" }}>
      <Container as={Grid}>
        <Col span={5}>
          <Box as="h5">Avail Design</Box>
          <Box as="p" mt="1rem">
            This blog is an effort led by a group of designers, writers, and
            engineers working at Avail.
          </Box>
        </Col>
        <Col
          span={4}
          offset={9}
          sx={{
            textAlign: "right",
            display: "grid",
            gap: "1rem",
            "& > a": { justifySelf: "end" },
          }}
        >
          <Link href="/careers">
            <Box as="a" className="link" color="inherit">
              Careers
            </Box>
          </Link>
          <Link href="/careers">
            <Box as="a" className="link" color="inherit">
              Foundations
            </Box>
          </Link>
          <Link href="/careers">
            <Box as="a" className="link" color="inherit">
              Components
            </Box>
          </Link>
          <Link href="/careers">
            <Box as="a" className="link" color="inherit">
              Patterns
            </Box>
          </Link>
        </Col>
        <Col span={12} sx={{ color: "ui_700", mt: "4rem" }}>
          Copyright 2020 Avail, Inc. All rights reserved. Various trademarks
          held by their respective owners.
        </Col>
      </Container>
    </Box>
  )
}
