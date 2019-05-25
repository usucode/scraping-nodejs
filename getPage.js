const client = require("cheerio-httpcli")

// ダウンロード
const url = "https://www.google.com/search?q=google"
const param = {}
client.fetch(url, param, (err, $) => {
  if (err) {
    console.log(`Error: ${err}`)
    return
  }
  const body = $.html()
  console.log(body)
})
