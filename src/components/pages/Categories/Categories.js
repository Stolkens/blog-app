import { useSelector } from "react-redux";
import { getCategories } from "../../../redux/categoriesRedux";




 const Categories = () => {

  const categories = useSelector(getCategories)
  const category = categories.map(category => category)
  console.log (category)
  return (
    <div>

  
    </div>
  )
 };

 export default Categories;