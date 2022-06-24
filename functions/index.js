const functions = require("firebase-functions")
const { parseStringPromise } = require("xml2js")
const fetch = require("node-fetch")

const listingUrl = "https://avail.co/l/realtorcom_lhumJba-p7hNFOB7QnjpXU1uNkg"

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.getListing = functions.https.onRequest(async (req, res) => {
  try {
    const listingsResponse = await fetch(listingUrl)
    if (listingsResponse.ok) {
      const xml = await listingsResponse.text()
      const data = await parseStringPromise(xml)
      const listings = data.Listings.Listing
      const randomListing = listings[Math.ceil(Math.random() * listings.length)]
      return res.json(randomListing)
    }
  } catch (error) {
    throw error
  }
})
