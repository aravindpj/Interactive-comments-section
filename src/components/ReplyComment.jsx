import React, { useState } from "react";
import Vote from "./componentParts/Vote";
import CommentDisplay from "./componentParts/CommentDisplay";
import AddComment from "./AddComment";
import DeleteModel from "./componentParts/DeleteModel";
function ReplyComment({ replies , idofComment,addReply ,editReply,deleteComment,updateScore}) {
  const [reply, setReply] = useState(false);
  const [opnDelModel, setDelModel]=useState(false)
  function DeleteReplay(id,type="reply"){
       deleteComment(id,type,idofComment);
       setDelModel(false)
  }
  return (
    <div className=" sm:w-93p border-l-2 border-gray-300 float-right mt-5">
      {/*if replay is true i need add gap b/w comment and reply remove mt-5 from here*/}
      {replies?.map((comment, i) => (
        <div className=" flex flex-col items-end mb-2">
          <div className="sm:flex-row items-start md:max-w-47em w-94p flex  gap-5 p-7 rounded-lg bg-white flex-col-reverse ">
            <Vote comment={comment} updateScore={updateScore} type={"reply"} />
            <CommentDisplay
              comment={comment}
              reply={reply}
              setReply={setReply}
              opnDelModel={opnDelModel}
              setDelModel={setDelModel}
              editComment={editReply}
            />
          </div>
          {i == 0 && reply !== false ? (
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
      ))}

    </div>
  );
}

export default ReplyComment;
