import React from "react";
import "./Home.css";
import Form from "../../components/form/Form";
import Blog from "../../components/blog/Blog";
import CreateBlog from "../../components/create-blog/CreateBlog";
import { useGetPostsApiQuery } from "../../redux/services/postsApi";
import Loading from "../../components/loading/loading";

const Home: React.FC = () => {
  const { data, isLoading } = useGetPostsApiQuery();

  if (isLoading) return <Loading />;

  return (
    <div className="container mt-2">
      <Form />
      <span className="create-post">
        <CreateBlog />
      </span>
      <h1>Blogs</h1>
      <span className="d-flex flex-column flex-md-row flex-md-wrap gap-md-2 gap-4 justify-content-evenly">
        {data && data.map((item) => <Blog key={item._id} post={item} />)}
      </span>
    </div>
  );
};

export default Home;
