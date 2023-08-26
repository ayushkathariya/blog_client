import React, { useState } from "react";
import {
  useDeletePostsApiMutation,
  useUpdatePostsApiMutation,
} from "../../redux/services/postsApi";
import { toast } from "react-toastify";

type Props = {
  post: {
    _id: string;
    title: string;
    body: string;
  };
};

const Blog: React.FC<Props> = ({ post }) => {
  const [deleteApi] = useDeletePostsApiMutation();
  const [updateApi] = useUpdatePostsApiMutation();
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const deleteBlog = () => {
    try {
      deleteApi({ id: post._id });
      toast.success("Blog deleted successfully", {
        position: "bottom-center",
        autoClose: 500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <div className="card-header">{post.title}</div>
      <div className="card-body">
        <p className="card-text">{post.body}</p>
        {showUpdateForm && (
          <form
            onSubmit={(e) => {
              e.preventDefault();

              try {
                updateApi({ id: post._id, title, body });
                toast.success("Blog updated successfully", {
                  position: "bottom-center",
                  autoClose: 500,
                });
              } catch (error) {
                console.log(error);
              } finally {
                setShowUpdateForm(false);
              }
            }}
          >
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Content"
              onChange={(e) => setBody(e.target.value)}
            />
            <input type="submit" />
          </form>
        )}
        <span className="d-flex gap-3">
          <button
            onClick={() => setShowUpdateForm(true)}
            className="btn btn-primary"
          >
            Update
          </button>
          <button onClick={deleteBlog} className="btn btn-danger">
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default Blog;
