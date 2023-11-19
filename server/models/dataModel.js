import mongoose from "mongoose";

const stockSchema = mongoose.Schema(
    {
        name: {
            type: String
        },

        currPrice: {
            type: String
        }
    }
)


const Stock = mongoose.model("Stocks", stockSchema)
export default Stock