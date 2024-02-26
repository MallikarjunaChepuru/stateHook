import {useState} from 'react'
import {v4 as uuid} from 'uuid'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onChangeName = event => setName(event.target.value)
  // console.log(name)

  const onAddComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuid(),
      name,
      commentText,
    }

    setCommentsList(previousCommentsList => [
      ...previousCommentsList,
      newComment,
    ])

    setName('')
    setCommentText('')
  }

  const onChangeCommentText = event => setCommentText(event.target.value)
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          onChange={onChangeCommentText}
          value={commentText}
          rows="6"
        />
        <CommentButton type="submit">Comment</CommentButton>
        <CommentsList>
          {commentsList.map(eachComment => (
            <CommentItem commentDetails={eachComment} id={eachComment.id} />
          ))}
        </CommentsList>
      </Form>
    </CommentsContainer>
  )
}

export default Comments
