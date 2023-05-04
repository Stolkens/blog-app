import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { getPosts } from "../../../redux/postsRedux";
import { Link } from "react-router-dom";

const GenerateCards = () => {

  const posts = useSelector(getPosts);

  return (
    <Row xs={1} md={2} lg={3}>
      {posts.map(post => (  
        <Col key={post.id} className="my-2">
          <Card >
            <Card.Body >
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle>Author: {post.author}</Card.Subtitle>
              <Card.Text>Published: {post.publisheDate}</Card.Text>
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