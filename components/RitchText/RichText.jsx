import dynamic from 'next/dynamic';
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const toolbarOptions = [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    ['link', 'image',],
    ['clean']
  ];


function RichText() {
  const [value, setValue] = useState("");

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ReactQuill

        value={value}
        className="h-[15rem] border-b-2"
        onChange={handleValueChange}
        modules={{ toolbar: toolbarOptions }}
        placeholder="Type something here..."
      />
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </>
  );
}

export default RichText;
