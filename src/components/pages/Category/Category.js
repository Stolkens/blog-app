import PageTitle from "../../views/PageTitle/PageTitle";
import GenerateCards from "../../features/GenerateCards/GenerateCards";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsByCategory } from "../../../redux/postsRedux";

const Category = () => {

  const {category} = useParams();
  console.log(category)

  const posts = useSelector(state => getPostsByCategory(state, category)); 
  

  console.log(posts)

  return (
    <div>
        <PageTitle>Category: {category}</PageTitle>
        {posts.length === 0 ? (
        <p>There are no posts in this category</p>
      ) : (
        <GenerateCards posts={posts} />
      )}
    </div>
      
  )
};

export default Category