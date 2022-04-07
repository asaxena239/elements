import { Fragment, useEffect, useState } from "react"
import { rest } from "msw"
import { motion } from "framer-motion"
import { useAsyncData } from "@doors/hooks"
import { Container, Box, Card } from "@doors/core"
import { Filter, Download, ChevronDown, RefreshCcw, Edit } from "@doors/icons"
import { Checkbox, Action } from "@doors/controls"
import { Chip } from "@doors/display"
import { ToastProvider, useToast } from "@doors/feedback"

export default {
  title: "Patterns/Transactions Table",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      return (
        <ToastProvider>
          <Story />
        </ToastProvider>
      )
    },
  ],
}

function TableHead() {
  return (
    <Fragment>
      <Checkbox id="_transactions-all" className="transactions__th" />
      <Box className="transactions__th">Date</Box>
      <Box className="transactions__th">Type</Box>
      <Box className="transactions__th">Category</Box>
      <Box className="transactions__th" sx={{ textAlign: "right" }}>
        Amount
      </Box>
      <Box
        id="transactions__table-actions"
        className="transactions__th"
        sx={{ display: "flex", gap: "2rem", justifyContent: "flex-end" }}
      >
        <Filter />
        <Download />
      </Box>
      <Box
        sx={{
          gridColumn: "1 / -1",
          height: 1,
          bg: "uiSecondary",
          width: "calc(100% + 4rem)",
          mx: "-2rem",
        }}
      />
    </Fragment>
  )
}

const MotionChevron = motion(ChevronDown)

function TableRow({ date, type, amount, category, property }) {
  const [open, setOpen] = useState(false)
  return (
    <Fragment>
      <Checkbox id="_transactions-all" className="transactions__td" />
      <Box className="transactions__td">{date}</Box>
      <Box className="transactions__td">
        <Chip sx={{ bg: type === "expense" ? "gold_500" : "green_500" }}>
          {type}
        </Chip>
      </Box>
      <Box className="transactions__td">{category}</Box>
      <Box className="transactions__td" sx={{ textAlign: "right" }}>
        ${amount / 100}
      </Box>
      <Box
        className="transactions__td row-actions"
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <MotionChevron
          initial={false}
          animate={open ? { rotate: 180 } : { rotate: 0 }}
          onClick={(e) => setOpen((o) => !o)}
          style={{ cursor: "pointer" }}
        />
      </Box>
      <Box
        as={motion.div}
        layout
        initial={false}
        animate={
          open
            ? { height: "auto", visibility: "visible" }
            : {
                height: 0,
                transitionEnd: { visibility: "hidden" },
              }
        }
        sx={{
          boxSizing: "border-box",
          gridColumn: "1 / -1",
          bg: "blue_100",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "grid",
            gridTemplateColumns: "auto min-content",
            gap: "1rem",
          }}
        >
          <Box sx={{ color: "ui_700" }}>Property</Box>
          <Action icon={Edit}>Edit</Action>
          <Box sx={{ gridColumn: "span 2" }}>{property.street_address}</Box>
          <Box sx={{ color: "ui_700", mt: "1rem" }}>Notes</Box>
          <Box
            sx={{
              gridColumn: "span 2",
              p: 2,
              border: "1px solid transparent",
              borderColor: "ui_500",
              borderRadius: 4,
              bg: "ui",
            }}
            contentEditable
          >
            Personal Notes
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}

export function TransactionsPage() {
  const { loading, error, data, refetch } = useAsyncData({
    lazy: true,
    url: "/transactions",
  })
  const createToast = useToast()
  const syncTransactions = (promise: Promise<void>) => {
    createToast.promise(promise, {
      loading:
        "We're syncing existing rent payments, maintenance costs, and other transactions from your portfolio.",
      success: "Your transactions have been successfully synced.",
      error: "There are no eligible transactions to sync at this time.",
    })
  }
  useEffect(() => {
    syncTransactions(refetch())
  }, [])
  return (
    <Container sx={{ my: "4rem" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Action icon={RefreshCcw} onClick={(e) => syncTransactions(refetch())}>
          Resync
        </Action>
      </Box>
      <Card
        sx={{
          display: "grid",
          gridTemplateColumns:
            "2rem max-content max-content auto max-content 8rem",
          gap: "2rem 4rem",
          overflowX: "auto",
          "& .transactions__th": {
            fontWeight: "black",
          },
        }}
      >
        <TableHead />
        {data ? (
          data.map((item) => <TableRow key={item.date} {...item} />)
        ) : (
          <Box>Loading</Box>
        )}
      </Card>
    </Container>
  )
}

TransactionsPage.parameters = {
  msw: {
    handlers: [
      rest.get("/transactions", (req, res, ctx) => {
        return res(
          ctx.delay(4000),
          ctx.json([
            {
              type: "expense",
              amount: 100000,
              category: "Utility",
              date: "01/01/1991",
              property: {
                street_address: "1234 N Martin Luther King Jr. Blvd.",
              },
            },
            {
              type: "income",
              amount: 120000,
              category: "Rent",
              date: "01/02/1991",
              property: {
                street_address: "1234 N Martin Luther King Jr. Blvd.",
              },
            },
          ])
        )
      }),
    ],
  },
}
