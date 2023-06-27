import express from "express"
// import cardController from "../controller/cardController"
const router = express().router();
// router.get('/', cardController.getCard)
// router.post('/addCard', cardController.addCard);
router.get('/', (req, res) => {
    res.send("hello there")
})

export default router;