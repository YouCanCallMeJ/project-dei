import { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/layout.css";
import "../styles/list.css";
import "../styles/addForm.css";

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
      <div class="Layout">
        <h1>
          Posts <span>Aweseme React Post List App</span>
        </h1>
        <div className="postDisplays">
          {listOfPosts.map((post) => {
            return (
              <div class="List">
                <ul>{post.post}</ul>
                <div class="List-buttons">
                  <button onClick={() => updatePost(post._id)}>
                    <i class="fas fa-pen" />
                  </button>
                  <button onClick={() => deletePost(post._id)}>
                    <i class="fas fa-trash" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div class="AddForm">
          <label>New Post</label>
          <input type="text" placeholder="Enter a new post!" onChange={(event) => { setPost(event.target.value); }} />
          <button onClick={createPost}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
