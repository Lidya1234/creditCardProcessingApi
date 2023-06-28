import express from "express"
import cardController from "../controller/cardController.js"
const router = express.Router();
router.get('/', cardController.getCard)
router.post('/addCard', cardController.addCard);
router.put('/updateCard/:id', cardController.updateCard)
router.delete('/deleteCard/:id', cardController.deleteCard)


export default router;