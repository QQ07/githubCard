import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useRecoilState, useRecoilValue } from "recoil";
import { colorAtom } from "../store/state";
import { Buttons } from "./Buttons";

export default function GithubCard() {
  const [color, setColor] = useRecoilState(colorAtom);
  const [intervalID, setIntervalID] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [play, setPlay] = useState(true);
  console.log(color);
  const colours = [
    "yellow",
    "chartreuse",
    "blue",
    "lightskyblue",
    "blueviolet",
    "rosybrown",
    "burlywood",
    "wheat",
    "cadetblue",
    "powderblue",
    "palegreen",
    "chocolate",
    "saddlebrown",
    "coral",
    "lightsalmon",
    "cornflowerblue",
    "lightsteelblue",
    "cornsilk",
    "lightyellow",
    "crimson",
    "indianred",
    "cyan",
    "lightcyan",
    "darkblue",
    "midnightblue",
    "darkcyan",
    "teal",
    "darkgoldenrod",
    "goldenrod",
    "darkgray",
    "silver",
    "darkgreen",
    "mediumseagreen",
    "darkgrey",
    "slategrey",
    "darkkhaki",
    "khaki",
    "darkmagenta",
    "mediumorchid",
    "darkolivegreen",
    "olivedrab",
    "darkorange",
    "sandybrown",
    "darkorchid",
    "thistle",
    "darkred",
    "indigo",
    "darksalmon",
    "lightcoral",
    "darkseagreen",
    "mediumaquamarine",
    "darkslateblue",
    "slateblue",
    "darkslategray",
    "lightslategray",
    "darkslategrey",
    "lightslategrey",
    "darkturquoise",
    "mediumturquoise",
    "darkviolet",
    "plum",
    "deeppink",
    "dimgray",
    "antiquewhite",
    "dimgrey",
    "aqua",
    "gray",
    "aquamarine",
    "grey",
    "azure",
    "lightgray",
    "beige",
    "lightgrey",
    "bisque",
    "whitesmoke",
    "lightpink",
    "deepskyblue",
    "skyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "rosybrown",
    "floralwhite",
    "honeydew",
    "forestgreen",
    "darkolivegreen",
    "fuchsia",
    "lavender",
    "gainsboro",
    "lightgray",
    "ghostwhite",
    "white",
    "gold",
    "khaki",
    "goldenrod",
    "darkgoldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "palevioletred",
    "indianred",
    "ivory",
    "beige",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "greenyellow",
    "lemonchiffon",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
  ];

  useEffect(() => {
    console.log("effe")
    let i = 0;
    let intervalIDTemp;
    if (play) {
      intervalIDTemp = setInterval(() => {
        setColor(colours[++i + currentIndex]);
      }, 1000);
      setIntervalID(intervalIDTemp);
    }
    else{
       setColor(colours[i + currentIndex]);
    }

    fetch("https://api.github.com/users/" + id).then((res) => {
      res.json().then((data) => {
        setUser(data);
      });
    });

    return () => {
      clearInterval(intervalIDTemp);
    };
  }, [play, currentIndex]);

  function togglePlay() {
    console.log(play);
    clearInterval(intervalID);
    if (play == true) {
      clearInterval(intervalID);
    } else {
      setPlay(play);
    }
    setPlay((e) => !e);
  }
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className={`flex bg-black w-screen h-screen justify-center items-center flex-col gap-8 overflow-hidden `}
      >
        <div className="border bg-white  text-4xl rounded-md flex flex-col gap-2 items-center font-mono">
          {" "}
          <img className="rounded-full w-32 mt-3" src={user.avatar_url}></img>
          <h3>{user.name}</h3>
          <div className="flex justify-center items-center gap-1">
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
          <div className="flex justify-around  w-full items-center mt-4 text-xl border rounded ">
            <div className="flex flex-col items-center p-4 border-x rounded ">
              <p className="">{user.followers}</p>
              <p className="text-sm">Followers</p>
            </div>
            <div className="flex flex-col items-center p-4 border-x rounded ">
              <p className="">{user.following}</p>
              <p className="text-sm">Following</p>
            </div>
            <div className="flex flex-col items-center p-4 border-x rounded ">
              <p className="">{user.public_repos}</p>
              <p className="text-sm">Repositories</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div
            onClick={() => {
              setCurrentIndex(currentIndex - 1);
              console.log(currentIndex)
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="gray"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
              />
            </svg>
          </div>
          <div onClick={togglePlay}>
            {!play && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="gray"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            )}
            {play && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="gray"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            )}
          </div>
          <div
            onClick={() => {
              setCurrentIndex(currentIndex + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="gray"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
