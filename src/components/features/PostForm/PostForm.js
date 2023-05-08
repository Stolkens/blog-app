import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import en from 'date-fns/locale/es';
registerLocale('en', en)

const PostForm = ({action, actionText, ...props}) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publisheDate, setPublisheDate] = useState(new Date() || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  // const [value, setValue] = useState ('');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({title, author, publisheDate, shortDescription, content})
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="col-md-6">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} placeholder="Enter title" onChange={e=>setTitle(e.target.value)}/>
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" value={author} placeholder="Enter author" onChange={e=>setAuthor(e.target.value)}/>
        <Form.Label>Published</Form.Label>
        <DatePicker  locale="en" selected={publisheDate} onChange={date=>setPublisheDate(date)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" rows={3} value={shortDescription} placeholder="Leave a comment here" onChange={e=>setShortDescription(e.target.value)}/>
        <Form.Label>Main content</Form.Label>
        <ReactQuill theme="snow" value={content} placeholder="Leave a comment here" onChange={value => setContent(value)} />
        {/* <Form.Control as="textarea" rows={10} value={content} placeholder="Leave a comment here" onChange={e=>setContent(e.target.value)}/> */}
      </Form.Group>
      <Button type="submit">{actionText}</Button>
    </Form>
  )
};

export default PostForm;

