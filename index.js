const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
var cors = require('cors');
const errorMiddleware = require('./middlewares/errors')
const connectToDatabase = require("./db");
const app = express();

// Handling uncaught error
process.on("uncaughtException", (err)=>{
    console.log(`Error message: ${err.message}`);
    console.log("\n\n\n\nError: ", err);
    console.log("\n\n\n\n", "Shutting Down because of uncaught error")
    process.exit(1)
})

var currentPath = process.cwd();
dotenv.config({path: path.join(currentPath, 'config/config.env')})

connectToDatabase();

app.use(express.json());
app.use(cors());


//Routes
app.use('/api/v1', require('./routes/docDownloadRoute'))

// Middleware for error
app.use(errorMiddleware)

const PORT = process.env.PORT || 5000;

// Heroku step 3
if(process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

const server = app.listen(PORT, ()=>{
    console.log(`Server is working on ${PORT}`)
})

// Unhandled Promise Rejection error
process.on("unhandledRejection", (err)=>{
    console.log(`error: ${err.message}`);
    console.log("Shutting Down because of unhandled Rejection error")

    server.close(()=>{
        process.exit(1)
    });
})