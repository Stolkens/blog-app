import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { Link} from "react-router-dom";
import dateToStr from "../../../utils/dateToStr";
import { useParams } from "react-router-dom";
import { getPostsByCategory } from "../../../redux/postsRedux";

const GenerateCards = () => {

  const {category} = useParams();

  const posts = useSelector((state) => {
    if (category) {
      return getPostsByCategory(state, category); 
    }
    return state.posts
  });

  return (
    <Row xs={1} md={2} lg={3}>
      {posts.map(post => (  
        <Col key={post.id} className="my-2">
          <Card >
            <Card.Body >
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle>Author: {post.author}</Card.Subtitle>
              <Card.Text>Published: {dateToStr(post.publisheDate)}</Card.Text>
              <Card.Text>Category: {post.category} </Card.Text>
              <Card.Text>
                {post.shortDescription}
              </Card.Text>
              <Link to={"/post/" + post.id}><Button>Read more</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
};

export default GenerateCards;