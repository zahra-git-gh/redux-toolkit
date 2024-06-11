import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FilterButton } from "./filterBtn";

export function DetailsJob() {
  const jobs = useSelector((state) => state.jobs);
  const { id } = useParams();
  const thisJob = jobs.filter((obj) => obj.id === +id)[0];
  console.log(thisJob);
  const arrayOfDep = [
    ...thisJob.languages,
    ...thisJob.tools,
    thisJob.level,
    thisJob.role,
  ];
  return (
    <div className=" w-full h-max py-12 px-5">
      <div className="bg-white w-full h-max py-12 px-5 rounded-lg shadow-lg min-[890px]:flex max-w-[890px] m-auto">
        <section className="bg-[#5BA4A4] p-6 relative rounded-md min-[890px]:flex  ">
          <section className="flex flex-col items-center gap-3 min-[890px]:my-auto">
            <section
              style={{ backgroundImage: `url(${thisJob.logo})` }}
              className="w-16 h-16 bg-center bg-cover absolute -top-5 "
            ></section>
            <p className="text-xl font-light mt-6 text-[#EFFAFA]">
              {thisJob.company}
            </p>
            <p className="text-2xl font-bold text-center text-[#2c3a3a]">
              {thisJob.position}
            </p>
            <p className="text-[#EEF6F6]">{thisJob.location}</p>
            <p className="text-[#EEF6F6]">{thisJob.contract}</p>
            <p className="text-[#EEF6F6]">Salary: {thisJob.salary}</p>
          </section>
        </section>
        <section className="mt-6 w-full min-[890px]:ms-11">
          <p className="border-b pb-3">{thisJob.jobDescription}</p>
          <div className="mt-5 flex flex-wrap gap-2 pb-3 border-b max-w-80">
            {arrayOfDep.map((str) => {
              return (
                <FilterButton key={thisJob.id} clicked={true} text={str} />
              );
            })}
          </div>
          <div className="mt-6">
            <button className="bg-[#5BA4A4] text-[#2c3a3a] hover:bg-[#eef6f6] hover:text-[#5BA4A4] px-4 py-3 rounded-lg">
              Get This Job
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
