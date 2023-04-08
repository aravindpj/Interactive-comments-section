import React, { useState } from 'react'

function Vote({comment,updateScore,type,setReply,reply,opnDelModel,setDelModel}) {
    const [vote,setVote]=useState(comment?.voted ?? false)
    const [score,setScore]=useState(comment?.score)
   function upVote(){
    console.log("work");
      if(comment.currentUser) return
      if(vote==false){
        let num = score +1
        setScore(num)
        updateScore(num,comment.id,type,'upvote')
        setVote(true)
      }

    }

    function downVote(){
        if(comment.currentUser) return
        if(vote==true){
          let num = score -1
          setScore(num)
          updateScore(num,comment.id,type,'downvote')
          setVote(false)
        }
    }

  return (
     <div className='inline-flex  w-full justify-between sm:flex-none sm:w-11'>
        {/* Vote */}
        <div className='flex sm:flex-col items-center gap-3 bg-lightblue-100 py-2 px-3 sm:w-10 sm:py-4 sm:px-2 rounded-lg '>
            <button  onClick={()=>upVote()}>
                <img className="" src="./images/icon-plus.svg" alt="" />
            </button>
            <span className='text-modblue-100 font-medium text-lg'>{comment?.score}</span>
            <button onClick={()=>downVote()}>
                <img src="./images/icon-minus.svg" alt="" />
            </button>
        </div>
        <div className='flex  items-center cursor-pointer sm:hidden '>
            {
              comment?.currentUser ?
               <div className='flex gap-3'>
                <button onClick={()=>setDelModel(!opnDelModel)} className='flex items-center gap-1.5'>
                    <img src="./images/icon-delete.svg" alt="" />
                     <span className='text-red-400 font-normal text-base'>Delete</span>
                </button>

                <button className='flex items-center gap-1.5 '>
                    <img src="./images/icon-edit.svg" alt="" />
                     <span className='text-modblue-100 font-normal text-base'>Edit</span>
                </button> 
               </div>
               :
               <button onClick={()=>setReply(!reply)}  className='flex items-center gap-2'>
                  <img className='w-4 ' src="./images/icon-reply.svg" alt="" />
                  <p className='text-modblue-100 text-lg font-medium '>Reply</p>
               </button>
            }
        </div> 
    </div>
  )
}

export default Vote