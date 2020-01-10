const fs = require('fs')
const files = fs.readdirSync('./endpoints')

const delay = ms => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
};

const homepage = (req, res) => {
    res.send(`
    <body style='font-family: sans-serif'>
        <h1>Welcome to mocking server</h1>
        <p>You can use any of the following write to get or manipulate data</p>
        ${getEndpointNames()}
        <p>You can add delay=2000 query parameter to slow down the reply to any requests</p>
    </body>`)
}

const getEndpointNames = () => {
    return files.map((file) => `<p>/${file.replace(".json", "").split("_")[1]}</p>`).join("")
}

const getJson = async (req, res) => {
    try {
        var file = fs.readFileSync(`./endpoints/${req.method.toLowerCase()}_${req.params.filename}.json`, 'utf-8')
        await delay(req.query.delay || 0)
        res.send(JSON.parse(file))
    } catch (err) {
        res.status(500)
        res.send(`${err.stack}`)
    }
}
module.exports = {
    getJson, homepage
}