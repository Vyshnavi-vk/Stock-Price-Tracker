import express from "express"
import colors from "colors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { data } from './data/data.js'

dotenv.config()

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send(data[0].name)
})


app.get("/api/stock", (req, res) => {
    return res.send(data)
})

const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`.yellow));

        /* ADD DATA ONE TIME */
        // Stock.insertMany(data);

    })
    .catch((error) => console.log(`${error} did not connect`));
