const fs = require('fs')
const files = fs.readdirSync('./endpoints')

const homepage = (req, res) => {
    res.send(`<h1>Welcome to mocking server</h1><p>You can use any of the following write to get or manipulate data</p>${files.map((file) => `<p>/${file.replace(".json", "")}</p>`).join("")}`)
}

const getJson = (req, res) => {
    try {
        var file = fs.readFileSync(`./endpoints/${req.params.filename}.json`, 'utf-8')
        res.send(JSON.parse(file))
    } catch (err) {
        res.status(500)
        res.send(`${err.stack}`)
    }
}
module.exports = {
    getJson, homepage
}