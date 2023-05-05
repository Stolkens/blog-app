import PageTitle from "../../views/PageTitle/PageTitle";
import AddPostForm from '../../features/AddPostForm/AddPostForm';
import styles from './AddPost.module.scss';

const AddPost = () => {
  return (
    <div className={styles.form}>
      <PageTitle>Add post</PageTitle>
      <AddPostForm />
    </div>
   
  )
};

export default AddPost;