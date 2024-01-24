import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:id" Component={GithubCard} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
function GithubCard() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log("hello");
    fetch("https://api.github.com/users/" + id).then((res) => {
      res.json().then((data) => {
        setUser(data);
        console.log("data");
      });
    });
  }, []);

  return (
    <>
      <div className="flex bg-black w-screen h-screen justify-center items-center flex-col ">
        <div className="border bg-white p-6 text-4xl rounded-md flex flex-col gap-2 items-center">
          {" "}
          <img className="rounded-full w-32" src={user.avatar_url}></img>
          <h3>{user.name}</h3>
          <div className="flex justify-center items-center gap-0.5">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-slate-900"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
              ></path>
            </svg>
            <p className="text-xl text-gray-500">{user.login}</p>
          </div>
          <div className="flex justify-around gap-2 w-full items-center">
            <p className="text-xl">{user.followers}</p>
            <p className="text-xl">{user.following}</p>

            <h3>{user.public_repos}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
