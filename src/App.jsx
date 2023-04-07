import {  useEffect, useState } from 'react'
import AddComment from './components/AddComment'
import Comment  from './components/Comment'
import { comment } from 'postcss'

function App() {
  const [comments ,updateComments]=useState([])
  const fecthData=async function(){
     const res=await fetch('./data/data.json')
     const {comments}=await res.json()
     localStorage.setItem("comments",JSON.stringify(comments))
     updateComments(comments)
  }
  useEffect(()=>{
    localStorage.getItem("comments")?
    updateComments(JSON.parse(localStorage.getItem("comments"))):
    fecthData()
  },[])

  useEffect(()=>{
     localStorage.setItem("comments",JSON.stringify(comments))
  },[comments])

  function AddNewComment(newComment){
    updateComments([...comments,newComment])
    
  }
  function UpdateReplies(id,newReply){
     let commentData=[...comments]
     commentData.forEach(comment=>{
        if(comment.id==id){
           comment.replies.push(newReply)
        }
     })
    updateComments(commentData);
  }

  function editComment(id,updatedContent,type){
    console.log(id,updatedContent,type);
    let commentData=[...comments]
    if(type==="comment"){
       commentData.forEach(comment=>{
        if(comment.id===id){
          comment.content=updatedContent
        }
       })
    }else if(type=="reply"){
       commentData.forEach(comment=>{
           comment.replies.forEach(reply=>{
              if(reply.id===id){
                reply.content=updatedContent
              }
           })
       })
    }
    updateComments(commentData)
  }
  function deleteComment(id,type,parentCommentId){
    let updated=[]
    let commentData=[...comments]
       if(type=="comment"){
            updated=comments.filter(comment=>comment.id !==id)
            updateComments(updated)
       }else if(type=="reply"){
          commentData.forEach(comment=>{
            if(comment.id===parentCommentId){
               comment.replies=comment.replies.filter(data=>data.id !== id)
            }
          })
         updateComments(commentData);
       } 
  }
  
  function updateScore(score,id,type,status){
    let commentData=[...comments]
       if(type=="comment"){
          commentData.forEach((comment)=>{
             if(comment.id===id){
               comment.score=score
               comment.voted= status === 'upvote' ? true :false
             }
          })
       }else if(type=="reply"){
         commentData.forEach(comment=>{
           console.log(score,id,type,status);
            comment.replies.forEach(reply=>{
              if(reply.id===id){
                 reply.score=score
                 reply.voted=status === 'upvote' ? true :false
              }
            })
         })
       }

       updateComments(commentData)
  }

  return (
    <div className="font-Rubik flex flex-col pt-12 gap-5 mx-3 mb-5 ">
       {
        comments?.map(comment=>(
          <Comment
            comment={comment}
            UpdateReplies={UpdateReplies}
            editComment={editComment}
            deleteComment={deleteComment}
            updateScore={updateScore}
          />
        ))
       }
         <AddComment AddNewComment={AddNewComment} comments={comments}/>
    </div>
  )
}

export default App
