const express = require('express')
const app = express()
const port = 3000
const open = require('open');
const { getJson, homepage } = require('./utils/utils')

app.get('/', homepage)

app.get('/:filename', getJson)
app.put('/:filename', getJson)
app.post('/:filename', getJson)
app.delete('/:filename', getJson)

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}!`)
    // Opens the URL in a specified browser.
    await open(`http://localhost:${port}`, { app: 'chrome' });
})