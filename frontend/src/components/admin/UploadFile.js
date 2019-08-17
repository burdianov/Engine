import React, { useState } from "react";
import axios from "axios";

const UploadFile = () => {
  const [selectedFile, selectFile] = useState(null);

  const fileSelectedHandler = e => {
    selectFile(e.target.files[0]);
  };

  const fileUploadHandler = async () => {
    const formData = new FormData();

    formData.set("title", "Lesson 22");
    formData.append("media", selectedFile, selectedFile.name);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };

    // const body = JSON.stringify({ name, email, password });

    const res = await axios.post("/api/admin/lesson", formData, config);
    console.log(res);
  };

  return (
    <div>
      <h1 className="mt-4">Upload file</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input name="title" type="text" placeholder="Enter lesson Title" />{" "}
      </div>
      <input
        name="media"
        type="file"
        onChange={fileSelectedHandler}
        className="card card-body text-primary"
      />
      <button onClick={fileUploadHandler} className="btn btn-primary mt-2">
        Upload
      </button>
    </div>
  );
};

export default UploadFile;
