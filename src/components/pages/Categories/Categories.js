import { useSelector } from "react-redux";
import { getCategories } from "../../../redux/categoriesRedux";
import { ListGroup } from "react-bootstrap";




 const Categories = () => {

  const categories = useSelector(getCategories)

  return (
    <ListGroup>
      {categories.map(category=><ListGroup.Item key={category}>{category}</ListGroup.Item>)}
  
    </ListGroup>
  )
 };

 export default Categories;