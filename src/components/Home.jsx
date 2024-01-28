import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [id, setID] = useState("");
  const navigate = useNavigate();
  function handleEnterKeyPress(e) {
    if (e.key == "Enter") {
      navigate("/" + id);
    }
  }
  return (
    <>
      <div className="dark bg-black min-h-screen flex items-center justify-center">
        <div
          className="border text-card-foreground mx-auto max-w-sm bg-gray-900 rounded-lg shadow-lg overflow-hidden"
          data-v0-t="card"
        >
          <div className="flex-col space-y-1.5 p-6 bg-gray-800 px-6 py-4 flex justify-between items-center">
            <h3 className="font-semibold whitespace-nowrap tracking-tight text-xl text-gray-100">
              GitHub User Card
            </h3>
            <div className="flex space-x-2">
              <i className="fas fa-github text-gray-400"></i>
              <i className="fas fa-user text-gray-400"></i>
            </div>
          </div>
          <div className="p-6 px-6 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
                  for="username"
                >
                  GitHub Username
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 text-gray-100 border-gray-700"
                  onChange={(e) => {
                    setID(e.target.value);
                  }}
                  onKeyDown={handleEnterKeyPress}
                  placeholder="qq07"
                />
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-gray-700 text-gray-200 hover:bg-gray-600"
                onClick={() => {
                  navigate("/" + id);
                }}
              >
                Generate Card
              </button>
            </div>
          </div>
          <div className="px-6 py-4 font-red flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="red"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
              />
            </svg>

            <p className="text-rose-600"> Flash Alert</p>
          </div>
        </div>
      </div>
    </>
  );
}
