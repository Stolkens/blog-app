import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import { useForm } from 'react-hook-form';
import en from 'date-fns/locale/es';
registerLocale('en', en)


const PostForm = ({action, actionText, ...props}) => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publisheDate, setPublisheDate] = useState(new Date() || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleSubmit = (e) => {
    setContentError(!content)
    setDateError(!publisheDate)
    if(content && publisheDate){
    action({title, author, publisheDate, shortDescription, content});
  }
};

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="col-md-6">
        <Form.Label>Title</Form.Label>
        <Form.Control 
        {...register("title", { required: true, minLength: 4})} 
        type="text" 
        value={title} 
        placeholder="Enter title" 
        onChange={e=>setTitle(e.target.value)}/>
        {errors.title?.type==='required' && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        {errors.title?.type==='minLength' && <small className="d-block form-text text-danger mt-2">min. 4 characters</small>}
        <Form.Label>Author</Form.Label>
        <Form.Control 
        {...register("author", { required: true, minLength: 4})}
        type="text" value={author} placeholder="Enter author" onChange={e=>setAuthor(e.target.value)}/>
        {errors.author?.type==='required' && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        {errors.author?.type==='minLength' && <small className="d-block form-text text-danger mt-2">min. 4 characters</small>}
        <Form.Label>Published</Form.Label>
        <DatePicker  locale="en" selected={publisheDate} onChange={date=>setPublisheDate(date)}/>
        {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
        {...register("shortDescription", { required: true, minLength: 21})}
        as="textarea" rows={3} value={shortDescription} placeholder="Leave a comment here" onChange={e=>setShortDescription(e.target.value)}/>
        {errors.shortDescription?.type==='required' && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        {errors.shortDescription?.type==='minLength' && <small className="d-block form-text text-danger mt-2">min. 20 characters</small>}
        <Form.Label>Main content</Form.Label>
        <ReactQuill theme="snow" value={content} placeholder="Leave a comment here" onChange={value => setContent(value)} />
        {contentError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
      </Form.Group>
      <Button type="submit">{actionText}</Button>
    </Form>
  )
};

export default PostForm;

