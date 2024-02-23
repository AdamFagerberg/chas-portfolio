import { useTheme } from "@/context/ThemeContext";
import { FaMoon, FaRegSun } from "react-icons/fa6";

export default function ButtonComponent() {
  const { state, dispatch } = useTheme();

  function handleDark() {
    state.darkTheme ? dispatch({ type: false }) : dispatch({ type: true });
  }

  return (
    <>
      <button onClick={handleDark}>
        {state.darkTheme ? <FaRegSun /> : <FaMoon />}
      </button>
    </>
  );
}
