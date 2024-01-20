import { useEffect, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

function Textarea() {
  const [text, setText] = useState("");
  const handleChange = (value: string) => {
    setText(value);
    localStorage.setItem("text", value);
  };
  useEffect(() => {
    handleChange(localStorage.getItem("text") as string);
  }, []);

  return (
    <div className="">
      <ReactTextareaAutosize
        autoFocus
        className="w-full h-full p-8 bg-transparent resize-none font-mono outline-none border-none"
        placeholder="Start writing your markdown..."
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default Textarea;
