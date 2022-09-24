import { useState, useEffect } from "react";
import Axios from "axios";

function Post() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [post, setPost] = useState("");
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getPosts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  const getPosts = () => {
    Axios.get("http://localhost:3001/getPosts").then((response) => {
      setListOfPosts(response.data);
    });
  }

  const createPost = () => {
    Axios.post("http://localhost:3001/createPost", {
        post: post
      }).then((response) => {
        alert("A post has been created.");
        setListOfPosts([...listOfPosts, {post: post}]);
    })
  }

  const updatePost = (id) => {
    Axios.put("http://localhost:3001/updatePost", {
      id: id, newPost: newPost
    }).then((response) => {
      getPosts();
      alert("The post has been updated.");
    });
  }
  
  const deletePost = (id) => {
    Axios.delete(`http://localhost:3001/deletePost/${id}`).then((response) => {
      getPosts();
      alert("A post has been deleted.");
    });
  }

  return (
    <div className="Post">
      <div className="postDisplays">
        {listOfPosts.map((post) => {
          return (
            <div>
              <h1>Post: {post.post}</h1>
              <input type="text" placeholder="New Post" onChange={(event) => {setNewPost(event.target.value);}}/>
              <button onClick={() => updatePost(post._id)}>Update</button>
              <button onClick={() => deletePost(post._id)}>Delete</button>
            </div>
          )
        })}
      </div>

      <div>
        <input type="text" placeholder="Enter a post!" onChange={(event) => {setPost(event.target.value);}}/>
        <button onClick={createPost}>Create Post</button>
      </div>
    </div>
  );
}

export default Post;
