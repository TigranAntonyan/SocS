const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";

let initialState = {
    posts: [
        {id:1, post:"Hi, How are you?", likesCount:33},
        {id:2, post:"It's my first post", likesCount:999},
        {id:1, post:"Hi", likesCount:800},
        {id:2, post:"first post", likesCount:99} 
    ],
    newPostText: "algoritm.am",
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            };           
            state.posts.push(newPost);
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        
        default:
            return state;
    }
}


export const addPostCreator = () => {
    return {
      type: ADD_POST
    }
  }
  
export const updateNewPostTextCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
  }
  



export default profileReducer;