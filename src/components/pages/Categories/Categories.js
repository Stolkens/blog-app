import { useSelector } from "react-redux";
import { getCategories } from "../../../redux/categoriesRedux";
import { ListGroup } from "react-bootstrap";
import PageTitle from "../../views/PageTitle/PageTitle";
import styles from './Categories.module.scss';
import { Link } from "react-router-dom";

const Categories = () => {

  const categories = useSelector(getCategories)

  return (
    
    <div className={styles.categories}>
      <PageTitle>All categories</PageTitle>
      <ListGroup  className={styles.list}>
        {categories.map(category=>
          <Link
          to={`/categories/${category}`}
          key={category}>
          <ListGroup.Item as="li" action>
            {category}
          </ListGroup.Item>
        </Link>
      )}
      </ListGroup>
    </div>
    
    
  )
 };

 export default Categories;