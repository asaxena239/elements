const http = require("http")
const { parseStringPromise } = require("xml2js")

const listingUrl = "https://avail.co/l/realtorcom_lhumJba-p7hNFOB7QnjpXU1uNkg"

const handler = async (req, res) => {
  try {
    const listingsResponse = await fetch(listingUrl)
    if (listingsResponse.ok) {
      const xml = await listingsResponse.text()
      const data = await parseStringPromise(xml)
      const listings = data.Listings.Listing
      const randomListing = listings[Math.ceil(Math.random() * listings.length)]
      res.writeHead(200, { "content-type": "application/json" })
      res.write(JSON.stringify(randomListing))
      res.end()
    }
  } catch (error) {
    res.end(error)
  }
}

const server = http.createServer(handler)

server.listen(3000, () => {
  console.log("listening on port 3000")
})
