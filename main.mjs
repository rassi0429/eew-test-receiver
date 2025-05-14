import express from "express"
import fs from "fs"

const app = express()
app.use(express.json())

app.post("/receive",(req, res) => {
    console.log(req.body)
    const bodyStr = JSON.stringify(req.body)
    fs.appendFileSync("body.json", bodyStr + "\n")
    res.set("Content-Type", "text/plain")
    res.send(String(bodyStr.length))
})


app.listen(3338, () => {
    console.log("listen on 3338")
})
