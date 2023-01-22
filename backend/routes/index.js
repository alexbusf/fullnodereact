import express from "express"

import {
    getAllMessages,
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessage
} from "../controllers/Messages.js"

const router = express.Router()

router.get('/', getAllMessages)
router.get('/:id', getMessageById)
router.post('/', createMessage)
router.patch('/:id', updateMessage)
router.delete('/:id', deleteMessage)

export default router;

