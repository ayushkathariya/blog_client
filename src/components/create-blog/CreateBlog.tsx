import React from "react";
import { useCreatePostsApiMutation } from "../../redux/services/postsApi";
import { toast } from "react-toastify";

const CreateBlog: React.FC = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [createPostApi] = useCreatePostsApiMutation();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      createPostApi({ title, body });
      toast.success("Blog created successfully", {
        position: "bottom-center",
        autoClose: 500,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setTitle("");
      setBody("");
    }
  }

  return (
    <div className="my-4">
      <button
        type="button"
        className="btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create your blog
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form className="modal-dialog" onSubmit={handleSubmit}>
          <div className="modal-content">
            <div className="modal-header">
              <input
                className="modal-title fs-5 form-control"
                id="exampleModalLabel"
                placeholder="Enter your title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <input
              className="modal-title fs-5 form-control"
              id="exampleModalLabel"
              placeholder="Enter your content"
              onChange={(e) => setBody(e.target.value)}
            />
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
