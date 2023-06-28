import mongoose, { Schema } from "mongoose"

const cardModel = new mongoose.Schema({
    cardName: { type: String },
    cardNumber: { type: Number },
    cardLimit: { type: Number },
    cardBalance: { type: Number },
    currency: { type: String }
})
export default mongoose.models.creditCard || mongoose.model('creditCard', cardModel)