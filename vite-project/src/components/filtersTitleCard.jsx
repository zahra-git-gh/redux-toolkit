import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { actions } from "../redux/jobsSlice";
import { useDispatch } from "react-redux";
export function FiltersTitleCard({ text }) {
    const dispatch=useDispatch()
    // console.log();
    function handleClick(){
        dispatch(actions.deleteOneFilter(text))
    }
  return (
    <div className=" bg-[#eef6f6] h-max w-max flex gap-x-3 justify-between  rounded-s-md">
      <div className="pl-4 rounded-md font-medium text-[#5ba4a4] py-1">
        {text}
      </div>
      <button onClick={handleClick} className="hover:bg-[#2c3a3a] px-2 rounded-e-md max-h-full bg-[#46a9a9] text-white text-center font-semibold text-xl">
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}
