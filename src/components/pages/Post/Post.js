import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { useParams } from "react-router-dom";
import styles from './Post.module.scss';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { removePost } from "../../../redux/postsRedux";
import { Navigate } from "react-router-dom";
import dateToStr from "../../../utils/dateToStr";

const Post = () => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true)
  const handleClose = () =>setShow(false)

  const { id } = useParams();

  const dispatch = useDispatch();



  const postData = useSelector(state => getPostById(state, id))

    const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removePost(id))
  }

  if(!postData) return <Navigate to="/" />
  
  else return (
    
    <div className={styles.post}>
      <div>
        <h4>{postData.title}</h4>
        <p><strong>Author: </strong>{postData.author}</p>
        <p><strong>Published: </strong>{dateToStr(postData.publisheDate)}</p>
        <p><strong>Category: </strong>{postData.category}</p>
        <p dangerouslySetInnerHTML={{ __html: postData.content }}></p>
      </div>
      <div>
        <Link to={"/post/edit/" + id}><Button variant="outline-info">Edit</Button></Link>
        <Button variant="outline-danger" className="mx-1" onClick={handleShow}>Delete</Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This operation will completely remove this post from the app.</p>
          <p>Are you sure you want to do that</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
};

export default Post;