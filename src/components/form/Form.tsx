import React from "react";
import "./Form.css";

const Form: React.FC = () => {
  const [message, setMessage] = React.useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="btn btn-success">
        Search
      </button>
    </form>
  );
};

export default Form;
