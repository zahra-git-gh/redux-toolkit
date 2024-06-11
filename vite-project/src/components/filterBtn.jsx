import { useDispatch } from "react-redux";
import { actions } from "../redux/jobsSlice";

export function FilterButton({ text, clicked=false }) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(actions.addFilter(text));
  }

  return (
    <button
      disabled={clicked? true: false}
      onClick={handleClick}
      className="bg-[#eef6f6] h-max py-1 px-2 rounded-md font-medium text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6]"
    >
      {text}
    </button>
  );
}
