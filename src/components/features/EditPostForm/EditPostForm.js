import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';
import { getPostById } from '../../../redux/postsRedux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { editPost } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';

const EditPostForm = () => {
  

  const { id } = useParams();
  const postData = useSelector(state=>getPostById(state, id)) 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (post) => {
    dispatch(editPost({...post, id}))
    navigate("/")
  }

  if (!postData) return <Navigate to="/" />;
  else return (
    <PostForm action={handleSubmit} actionText='Save changes' 
    title={postData.title} 
    author={postData.author} 
    shortDescription={ postData.shortDescription} 
    publisheDate={postData.publisheDate} 
    content={postData.content}/>
  )
};

export default EditPostForm;