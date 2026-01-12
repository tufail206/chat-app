import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import Conversation from "../models/converSation.model.js";

const sendMessage=async(req,res,next)=>{
    try {
        //  {senderId,receiverId}
        const senderId=req.user.id;
        const receiverId=req.params.id
        const {message}=req.body

      let gotConversation = await Conversation.findOne({
        participants: { $all: [ senderId, receiverId] } ,
      });

      if (!gotConversation){
        gotConversation = await Conversation.create({
          participants: [senderId, receiverId],
        });
      }
     //socket.io implement


      const newMessage = await Message.create({
        senderId,
        receiverId,
        message,
      });

      if (newMessage){
        gotConversation.messages.push(newMessage._id)
      }

      await gotConversation.save()
        return res.status(200).json({
          message: "message send successfully",
          data: message,
        });
    } catch (error) {
        next(error)
    }
}

const getMessage=async(req,res,next)=>{
    try {
        const receiverID=req.params.id
         const sendId=req.user.id
         console.log("sender",sendId);
         console.log("receiverID", receiverID);
        const conversation = await Conversation.findOne({
          participants: { $all: [sendId,receiverID] },
        }).populate("messages");
        return res.status(201).json({message:conversation})
    } catch (error) {
        next(error)
    }
}
export { sendMessage, getMessage };