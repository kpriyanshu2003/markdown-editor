import React from "react";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { MdPreview } from "react-icons/md";
// import { FaFilePdf } from "react-icons/fa6";
import { BsMarkdownFill } from "react-icons/bs";

interface NavBarProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function NavBar(props: NavBarProps) {
  return (
    <div className="border-b p-4 md:flex justify-between items-center ">
      <Link
        href="/"
        className="flex items-center gap-3 justify-center py-6 md:py-0"
      >
        <FiEdit className="h-8 w-8" />
        <span className="text-2xl font-bold">Markdown Editor</span>
      </Link>
      <div className="flex items-center gap-5 justify-center py-3 md:py-0">
        <div
          className={`p-3 rounded-md flex justify-center items-center gap-3 transition-all duration-300  border-2 border-[#2f2f2f] ${
            props.page === 0
              ? "bg-[#2f2f2f] cursor-default text-white"
              : "cursor-pointer"
          }`}
          onClick={() => props.setPage(0)}
        >
          <BsMarkdownFill />
          <span>Markdown</span>
        </div>
        <div
          className={`p-3 rounded-md flex justify-center items-center gap-3 transition-all duration-300  border-2 border-[#f02f2f] ${
            props.page === 1
              ? "bg-[#f02f2f] cursor-default text-white "
              : "cursor-pointer"
          }`}
          onClick={() => props.setPage(1)}
        >
          <MdPreview />
          <span>Preview</span>
        </div>
        {/* <div
          className={`p-3 rounded-md flex justify-center items-center gap-3 transition-all duration-300  ${
            props.page === 2
              ? "bg-[#f02f2f] cursor-default text-white"
              : "cursor-pointer border-2 border-[#f02f2f]"
          }`}
          // onClick={() => convertToPdf()}
        >
          <FaFilePdf />
          <span>Save to PDF</span>
        </div> */}
      </div>
    </div>
  );
}

export default NavBar;
