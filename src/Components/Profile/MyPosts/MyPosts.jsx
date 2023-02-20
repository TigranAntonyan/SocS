import React from 'react';
import "./MyPosts.css"
import Post from './Post/Post';


const Myposts = (props) => {
    
  let postsElements = 
      props.posts.map( p => <Post post={p.post} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    
  }

    return (
        <div className="myposts">
          <h3>my posts</h3>
          <div>
            <div> <textarea onChange={onPostChange} 
                            ref={newPostElement} 
                            value={props.NewPostText} /> 
            </div>
            <div> <button onClick={ onAddPost }>Add post</button> </div>
          </div>
          <div className='posts'>
            { postsElements }
          </div>
        </div>
      )
};

export default Myposts;