import React, { useEffect, useState } from 'react'

function AddComment({reply , setReply, AddNewComment ,comments, replyingTo="" , isSmall}) {
   
  const [replying,setRepying]=useState(`@ ${replyingTo}`)
  const [form, setForm]=useState({
     id:Math.floor(Math.random() * 100) + 5,
     createdAt: "Just now",
     replyingTo:replying,
     content:"",
     score:0,
     user:{
      image:{
        png:"./images/avatars/image-juliusomo.png"
      },
      username: "juliusomo"
     },
     replies:[],
     currentUser:true
  })
  
  function handleFormSubmit(e){
     e.preventDefault()
     console.log(form);
     AddNewComment(form)
     setRepying("")
    reply !== undefined && setReply(false)
    document.querySelector("#form").reset()
    
  }
  useEffect(()=>{
     if(isSmall){
       document.querySelector("#form").classList.add("w-94p")
       document.querySelector("#form").classList.remove("w-full")
     }
  },[isSmall])
  function handleTextareaChange(event) {
    const cleanContent = event.target.value.replace(/[@\/?]/g, '');
    setForm({ ...form, content: cleanContent });
  }
  return (
    <form id='form' onSubmit={handleFormSubmit} className='flex-col mt-2  p-6 bg-white w-full flex max-w-47em gap-5 rounded-lg sm:flex-row'>

        <img className='hidden sm:block w-9 h-9' src="./images/avatars/image-juliusomo.png" alt="" />

        <textarea 
          
          onChange={handleTextareaChange}
          name="content"placeholder={replyingTo ? `${replying}` : "Add Comment..."} id="" className="h-24  caret-neutral-600 text-base font-thin px-3 py-2 flex-1 text-gray-700 outline-none resize-none border border-solid border-gray-400 border-b rounded-lg"></textarea>
        
        <div className='flex justify-between items-center sm:flex-none sm:items-start'>
            <img className='w-9 h-9 sm:hidden' src="./images/avatars/image-juliusomo.png" alt="" />
            <button className='uppercase px-7 h-12 bg-modblue-100 font-medium text-white rounded-lg'>{!reply ? "send" : "reply"}</button>
        </div>
        
    </form>
  )
}

export default AddComment