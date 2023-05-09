import { useSelector } from "react-redux";
import { getCategories } from "../../../redux/categoriesRedux";
import { ListGroup } from "react-bootstrap";
import PageTitle from "../../views/PageTitle/PageTitle";
import styles from './Categories.module.scss'




 const Categories = () => {

  const categories = useSelector(getCategories)

  return (
    <div className={styles.categories}>
      <PageTitle>All categories</PageTitle>
      
        <ListGroup as="ul" className={styles.list}>
          {categories.map(category=><ListGroup.Item as="li" action href={"#" + category} key={category}>{category}</ListGroup.Item>)}
        </ListGroup>
      </div>
  )
 };

 export default Categories;