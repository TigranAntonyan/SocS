import React from 'react';
import Profileinfo from './ProfileInfo/ProfileInfo';
import "./Profile.css"
import MypostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
  
  return (
      <div className="profile">
        <Profileinfo /> 
        <MypostsContainer />
      </div>
    )
};

export default Profile;