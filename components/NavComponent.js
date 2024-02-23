import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMoon,
  FaRegSun,
} from "react-icons/fa6";

export default function NavComponent() {
  const { state, dispatch } = useTheme();

  function handleDark() {
    state.darkTheme ? dispatch({ type: false }) : dispatch({ type: true });
  }

  return (
    <>
      <nav className="flex flex-row justify-between py-5 mx-20">
        <h1>Logo</h1>
        <ul className="flex flex-row gap-x-5 mx-5">
          <li>
            <Link href={"/pages/"}>Home</Link>
          </li>
          <li>
            <Link href={"/pages/"}>About</Link>
          </li>
          <li>
            <Link href={"/pages/"}>Tech Stack</Link>
          </li>
          <li>
            <Link href={"/pages/"}>Projects</Link>
          </li>
          <li>
            <Link href={"/pages/"}>Contact</Link>
          </li>
          <li>
            <Link href={"/pages/"}>
              {" "}
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link href={"/pages/"}>
              {" "}
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link href={"/pages/"}>
              {" "}
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <button onClick={handleDark}>
              {state.darkTheme ? <FaRegSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
