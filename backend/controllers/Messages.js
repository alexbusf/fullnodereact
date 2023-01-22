import { where } from "sequelize";
import Message from "../models/messageModel.js";

export const getAllMessages = async(req, res) => {
    try{
        const messages = await Message.findAll({
            order: [ [ 'id', 'DESC' ]]
        })
        res.json(messages)
    } catch (e){
        res.json({message: e.message})
    }
}

export const getMessageById = async(req, res) => {
    try{
        const message = await Message.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(message[0])
    } catch (e){
        res.json({message: e.message})
    }
}

export const createMessage = async(req, res) => {
    try{
        await Message.create(req.body)
        res.json({
            "message": "Message Created"
        })
    } catch (e){
        res.json({message: e.message})
    }
}

export const updateMessage = async(req, res) => {
    try{
        await Message.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "Message Updated"
        })
    } catch (e){
        res.json({message: e.message})
    }
}

export const deleteMessage = async(req, res) => {
    try{
        await Message.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "Message Deleted"
        })
    } catch (e){
        res.json({message: e.message})
    }
}