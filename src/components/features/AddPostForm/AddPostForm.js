import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisheDate, setPublisheDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({title, author, publisheDate, shortDescription, content}))
    navigate("/")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="col-md-6">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} placeholder="Enter title"  onChange={e=>setTitle(e.target.value)}/>
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" value={author} placeholder="Enter author"  onChange={e=>setAuthor(e.target.value)}/>
        <Form.Label>Published</Form.Label>
        <Form.Control type="text" value={publisheDate} placeholder="Enter date"  onChange={e=>setPublisheDate(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" rows={3} value={shortDescription} placeholder="Leave a comment here" onChange={e=>setShortDescription(e.target.value)}/>
        <Form.Label>Main content</Form.Label>
        <Form.Control as="textarea" rows={10} value={content} placeholder="Leave a comment here" onChange={e=>setContent(e.target.value)}/>
      </Form.Group>
      <Button type="submit">Add post</Button>
    </Form>
  )
};

export default AddPostForm;

