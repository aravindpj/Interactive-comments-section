import React from 'react'

function DeleteModel({opnDelModel,setDelModel,comment,DeleteCommentorReply}) {
  return (
    <div className=' fixed bg-transparent-100 top-0 left-0 right-0 bottom-0 flex justify-center items-center '>
        <div className=' w-93p sm:w-96 bg-white p-5 sm:p-7 rounded-lg flex flex-col gap-2'>
            <p className='text-lg sm:text-1.2rem font-medium  text-gray-700' >Delete comment</p>
            <p className='text-gray-600 leading-normal font-light'>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
            <div className= ' flex gap-4 ' >
                <button onClick={()=>setDelModel(!opnDelModel)} className='px-2 py-2  uppercase bg-gray-400 sm:px-7 sm:py-3  sm:font-medium text-white rounded-md'>no,cancel</button>
                <button onClick={()=>DeleteCommentorReply(comment.id)} className='px-2 py-2  uppercase bg-red-400 sm:px-7 sm:py-3 sm:font-medium text-white rounded-md'> yes,delete</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteModel