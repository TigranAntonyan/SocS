import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../../Redux/profile-reducer';
import Myposts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => { 
      let action = (updateNewPostTextCreator(text));
      dispatch(action)
    },

    addPost: () => {
      dispatch( addPostCreator() );
    }
  }
}



const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)

export default MypostsContainer;