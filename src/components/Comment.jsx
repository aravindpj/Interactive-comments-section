import React, { useState } from 'react'
import ReplyComment from './ReplyComment'
import Vote from './componentParts/Vote'
import CommentDisplay from './componentParts/CommentDisplay'
import DeleteModel from './componentParts/DeleteModel'
import AddComment from './AddComment'
function Comment({comment,UpdateReplies,editComment,deleteComment,updateScore}) {
   const [opnDelModel,setDelModel]=useState(false)
   const [reply,setReply]=useState(false)
   const [enableEdit,setEnableEdit]=useState(false)
   function addReply(newReply){
      UpdateReplies(comment.id,newReply)
   }
   function DeleteComment(id,type="comment"){
       deleteComment(id,type)
   }
   function modifyComment(id,updatedComment){
      editComment(id,updatedComment,"comment")
   }
  return (
  <div className="max-w-47em">
        <div className="sm:flex-row items-start  md:max-w-47em flex  gap-5 p-7 rounded-lg bg-white flex-col-reverse ">
            <Vote
              comment={comment}
              updateScore={updateScore}
              type={"comment"}
              reply={reply}
              setReply={setReply}
              opnDelModel={opnDelModel}
              setDelModel={setDelModel}
              edit={enableEdit}
              setEdit={setEnableEdit}
            />
            <CommentDisplay 
              comment={comment}
              opnDelModel={opnDelModel}
              setDelModel={setDelModel}
              reply={reply}
              setReply={setReply}
              editComment={modifyComment}
              enableEdit={enableEdit}
              setEnableEdit={setEnableEdit}   
            />   
        </div>
        {
          reply &&  <AddComment reply={reply} setReply={setReply} AddNewComment={addReply} comments={comment?.replies} replyingTo={comment?.user.username}/>
        }
        {/* Reply Container */}
        {
          comment?.replies[0] !== undefined &&
          comment?.replies.map(reply=>(
            <ReplyComment
            comment={reply}
            idofComment={comment.id}
            opnDelModel={opnDelModel}
            setDelModel={setDelModel}
            UpdateReplies={UpdateReplies}
            editComment={editComment}
            deleteComment={deleteComment}
            updateScore={updateScore}
            enableEdit={enableEdit}
            setEnableEdit={setEnableEdit}  
          />
          ))
        }
        {
          opnDelModel && 
           <DeleteModel 
            opnDelModel={opnDelModel}
            setDelModel={setDelModel}
            DeleteCommentorReply={DeleteComment}
            comment={comment}
           />
        }
 </div>
  )
}

export default Comment