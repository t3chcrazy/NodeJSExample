const express = require("express")
const app = express()
const bodyParser = require("body-parser")

var handlebars = require("express-handlebars").create({defaultLayout: "main"})
app.engine("handlebars", handlebars.engine)
app.set("view engine", "handlebars")

app.use(express.static(__dirname+"/public"))
app.use(bodyParser.urlencoded({extended: true}))

const port = process.env.PORT || 3000

app.get("/", (req, res) => res.render("login"))

app.get("/thankYou", (req, res) => {
    const {name, email, password, mobile} = req.query
    res.render("thankyou", {name, email, password, mobile})
})

app.post("/thankYou", (req, res) => {
    const {name, email, password, mobile} = req.body
    res.render("thankyou", {name, emai, password, mobile})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})