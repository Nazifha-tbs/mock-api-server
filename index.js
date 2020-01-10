const express = require('express')
const app = express()
const port = 3000
const open = require('open');
const { getJson, homepage } = require('./utils/utils')

app.use('/assets', express.static('assets'))
app.get('/', homepage)

app.get('/:filename', getJson)
app.put('/:filename', getJson)
app.post('/:filename', getJson)
app.delete('/:filename', getJson)

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}! You need to use http://<your_ip_address>:${port}/ as base url.`)
    // Opens the URL in a specified browser.
    await open(`http://localhost:${port}`, { app: 'chrome' });
})