import creditCard from '../Models/Card.js'
const getCard = async (req, res) => {
    try {
        const cards = await creditCard.find()
        res.status(200).json(cards)
    }
    catch (err) {
        // return res.status(400).send({ error: errorHandler.getErrorMessage(err) })
        return res.status(400).send({ error: err })
    }

}

const addCard = async (req, res) => {
    const cards = new creditCard(req.body)
    try {
        await cards.save();
        return res.status(200).json({
            message: "successfully saved",
            cards
        })

    } catch (err) {
        // return res.status(400).json({
        //     error: errorHandler.getErrorMessage(err)
        // })
        return res.status(400).json({
            error: err
        })
    }


}
const updateCard = async (req, res) => {
    try {
        console.log(req.params.id, req.body)
        const card = await creditCard.findByIdAndUpdate(req.params.id, req.body)
        if (!card) {
            return res.status(400).json({ err: "card not found" })
        }
        return res.status(200).json({ message: "Card successfully updated", card })
    } catch (err) {
        return res.status(400).json({ error: "Couldn't retrieve card" })
    }
}
const deleteCard = async (req, res) => {
    try {
        let card = await creditCard.findByIdAndDelete(req.params.id)
        if (!card) {
            return res.status(400).json({ error: 'Card Not found' })
        }
        return res.status(200).json({ message: 'delete Card', card: card })
    }
    catch (err) {
        // res.status(400).json({
        //     error: errorHandler.getErrorMessage(err)
        // })
        return res.status(400).json({ error: 'Could not retrieve user' })
    }

}
export default { getCard, addCard, updateCard, deleteCard }