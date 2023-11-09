import { FaFilePdf } from "react-icons/fa6";
import { MdPreview } from "react-icons/md";
import { BsMarkdownFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import React from "react";
import Link from "next/link";
// import htmlToPdf from "html-pdf";

interface NavBarProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
// const convertToPdf = () => {
//   htmlToPdf
//     .create(localStorage.getItem("text") as string)
//     .toFile("./markdown_output.pdf", (err, res) => {
//       if (err) return console.log(err);
//       console.log(res);
//     });
// };

function NavBar(props: NavBarProps) {
  return (
    <div className="border-b p-4 flex justify-between items-center ">
      <Link href="/" className="flex items-center gap-3">
        <FiEdit />
        <span className="text-xl">Markdown Editor</span>
      </Link>
      <div className="flex items-center gap-5">
        <div
          className={`p-3 rounded-md flex justify-center items-center gap-3 transition-all duration-300 ${
            props.page === 0
              ? "bg-[#2f2f2f] cursor-default text-white"
              : "cursor-pointer border-2 border-[#2f2f2f]"
          }`}
          onClick={() => props.setPage(0)}
        >
          <BsMarkdownFill />
          <span>Markdown</span>
        </div>
        <div
          className={`p-3 rounded-md flex justify-center items-center gap-3 transition-all duration-300  ${
            props.page === 1
              ? "bg-[#2f2ff0] cursor-default text-white "
              : "cursor-pointer border-2 border-[#2f2ff0]"
          }`}
          onClick={() => props.setPage(1)}
        >
          <MdPreview />
          <span>Preview</span>
        </div>
        <div
          className={`p-3 rounded-md flex justify-center items-center gap-3 transition-all duration-300  ${
            props.page === 2
              ? "bg-[#f02f2f] cursor-default text-white"
              : "cursor-pointer border-2 border-[#f02f2f]"
          }`}
          // onClick={() => convertToPdf()}
        >
          <FaFilePdf />
          <span>Save to PDF</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
