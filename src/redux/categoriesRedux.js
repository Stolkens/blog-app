
//selectors
export const getCategories = (state) => state.categories;
export const getCategoryPostValue = ({categories}, categoryId) => categories.find(category=>category.id===categoryId)


// actions
// const createActionName = actionName => `app/categories/${actionName}`;



// action creators



const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default: 
    return statePart;
  };
};

export default categoriesReducer;