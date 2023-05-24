import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const toolbarOptions = [
  [{ header: [1, 2, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  ["link", "image"],
  ["clean"],
];

function RichText({ setProduct, product }) {
  const handleValueChange = (newValue) => {
    setProduct({ ...product, description: newValue });
  };

  return (
    <>
      <ReactQuill
        value={product.description}
        className="h-[20rem] min-h-[20rem]  mb-2"
        onChange={handleValueChange}
        modules={{ toolbar: toolbarOptions }}
        placeholder="Type something here..."
      />
      {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
    </>
  );
}

export default RichText;
