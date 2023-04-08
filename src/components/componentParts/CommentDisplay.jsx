import React, { useState } from "react";
function CommentDisplay({
  comment,
  opnDelModel,
  setDelModel,
  setReply,
  reply,
  editComment,
}) {
  const [edit, setEdit] = useState(false);
  const [content, setUpdateContent] = useState(comment?.content);
  function handleEditForm(e) {
    e.preventDefault();
    editComment(comment.id, content);
    setEdit(false);
  }
  return (
    <div className="w-full ">
      {/* header */}
      <div className=" flex justify-between items-center">
        <div className="flex gap-2 sm:gap-4 items-center">
          <img className="w-9" src={comment?.user.image.png} alt="" />
          <span className="text-sm sm:text-lg font-medium">
            {comment?.user.username}
          </span>
          {comment?.currentUser && (
            <span className="text-sm  sm:text-base font-normal px-2 text bg-modblue-100 text-white rounded-sm">
              you
            </span>
          )}
          <span className="text-sm sm:text-base text-gray-500">
            {comment?.createdAt}
          </span>
        </div>
        <div className="hidden sm:flex gap-2 items-center cursor-pointer ">
          {!comment?.currentUser && (
            <button
              onClick={() => setReply(!reply)}
              className="flex gap-2 items-center"
            >
              <img className="w-4 " src="./images/icon-reply.svg" alt="" />
              <p className="text-modblue-100 text-lg font-medium ">Reply</p>
            </button>
          )}
          {/* edit || delete */}

          {comment?.currentUser && (
            <>
              <button
                onClick={() => setDelModel(!opnDelModel)}
                className="flex items-center gap-1.5 mr-5"
              >
                <img src="./images/icon-delete.svg" alt="" />
                <span className="text-red-400 font-medium text-lg">Delete</span>
              </button>

              <button
                onClick={() => setEdit(!edit)}
                className="flex items-center gap-1.5 "
              >
                <img src="./images/icon-edit.svg" alt="" />
                <span className="text-modblue-100 font-medium text-lg">
                  Edit
                </span>
              </button>
            </>
          )}
        </div>
      </div>
      {/*comment*/}
      {!edit ? (
        <div className="  mt-2">
          <p className="text-16px break-words pr-6 leading-normal">
             <span className="pr-1 text-modblue-100 font-medium">{comment?.replyingTo}</span>
             <span className=" text-gray-500 ">{comment?.content} </span>  
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleEditForm}
          className="flex flex-col items-end mt-4 gap-5"
        >
          <textarea
            onChange={(e) => setUpdateContent(e.target.value)}
            name=""
            value={content}
            placeholder="Update reply..."
            id=""
            className=" w-full text-base font-thin px-3 py-2 flex-1 text-gray-700 outline-none resize-none border border-solid border-gray-400 border-b rounded-lg"
          ></textarea>
          <button className="uppercase px-7 h-12 bg-modblue-100 font-semibold text-white rounded-lg">
            Update
          </button>
        </form>
      )}
    </div>
  );
}

export default CommentDisplay;
