import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [id, setID] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <br />
      <br />
      <div className="flex flex-col gap-3 items-center justify-center">
        <input
          className="border"
          type="text"
          value={id}
          onChange={(e) => {
            setID(e.target.value);
          }}
        />{" "}
        <br />
        <button
          className="border-md"
          onClick={() => {
            navigate("/" + id);
          }}
        >
          Generate Card
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
