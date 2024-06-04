import { useDispatch, useSelector } from "react-redux";
import { FiltersTitleCard } from "./filtersTitleCard";
import { actions } from "../redux/jobsSlice";

export function FilterCard() {
  const filterArr = useSelector((store) => store.filters);
  console.log(filterArr);
  const dispatch=useDispatch()
  function handleClearAll(){
    dispatch(actions.deleteAllFilters())
  }
  return (

    <>
    {filterArr.length>0? <div
        className="w-full max-w-[330px] md:max-w-[720px] min-[1200px]:max-w-[1110px] bg-white min-h-[82px]
    max-h-max rounded-xl shadow-xl mx-auto -mt-11 py-5 px-8 flex justify-between items-center "
      >
        <div className="flex flex-wrap gap-y-3 gap-x-3">
        {filterArr.map((text, i) => {
          return (
            <FiltersTitleCard  key={i} text={text}/>
          );
        })}

        </div>
        <div> 
        <button onClick={handleClearAll} className="text-[#7b8e8e] hover:text-[#46a9a9] hover:underline">Clear</button>
        </div>
      </div>: ''}
    </>
  );
}
