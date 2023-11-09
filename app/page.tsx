"use client";
import MarkdownRenderer from "./components/MdRenderer";
import NavBar from "./components/NavBar";
import Textarea from "./components/Textarea";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
  return (
    <div className="">
      <NavBar page={page} setPage={setPage} />
      {page === 0 && <Textarea />}
      {page == 1 && <MarkdownRenderer />}
    </div>
  );
}
