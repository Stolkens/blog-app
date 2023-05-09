import GenerateCards from "../../features/GenerateCards/GenerateCards";
import PageTitle from "../../views/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from './Home.module.scss';

const Home = () => {
 
  return (
    <div className="container px-0">
      <div className={styles.title}>
        <PageTitle>All posts</PageTitle>
        <Link to={"/post/add"}><Button variant="outline-primary">Add post</Button></Link>
      </div>
      <GenerateCards />
    </div>
  )
};

export default Home;