import React, { useState } from "react";
import Vote from "./componentParts/Vote";
import CommentDisplay from "./componentParts/CommentDisplay";
import AddComment from "./AddComment";
import DeleteModel from "./componentParts/DeleteModel";
function ReplyComment({ comment , idofComment,UpdateReplies ,deleteComment,updateScore,editComment}) {
  const [reply, setReply] = useState(false);
  const [opnDelModel, setDelModel]=useState(false)
  const [enableEdit,setEnableEdit]=useState(false)
  function DeleteReplay(id,type="reply"){
       deleteComment(id,type,idofComment);
       setDelModel(false)
  }
  function editReply(id,updatedComment){
     editComment(id,updatedComment,"reply")
  }
  function addReply(newReply){
     UpdateReplies(idofComment,newReply)
  }
  return (
    <div className="w-full sm:w-93p border-l-2 border-gray-300 float-right mt-5">
        <div className=" flex flex-col items-end mb-2">
          <div className="sm:flex-row items-start md:max-w-47em w-94p flex  gap-5 p-7 rounded-lg bg-white flex-col-reverse ">
            <Vote 
              comment={comment}
              updateScore={updateScore}
              type={"reply"} 
              reply={reply}
              setReply={setReply}
              opnDelModel={opnDelModel}
              setDelModel={setDelModel}
              edit={enableEdit}
              setEdit={setEnableEdit} 
              />
            <CommentDisplay
              comment={comment}
              reply={reply}
              setReply={setReply}
              opnDelModel={opnDelModel}
              setDelModel={setDelModel}
              editComment={editReply}
              enableEdit={enableEdit}
              setEnableEdit={setEnableEdit} 
            />
          </div>
          {reply !== false ? (
            <AddComment
              isSmall={true}
              reply={reply}
              setReply={setReply}
              AddNewComment={addReply}
              comments={comment}
              replyingTo={comment?.user.username}
            />
          ) : (
            ""
          )}
        {
          opnDelModel!==false && 
          <DeleteModel
            opnDelModel={opnDelModel}
            setDelModel={setDelModel}
            DeleteCommentorReply={DeleteReplay}
            comment={comment}
          />
        }

        </div>

    </div>
  );
}

export default ReplyComment;
