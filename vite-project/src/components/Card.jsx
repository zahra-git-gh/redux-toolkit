import { Link } from "react-router-dom";
import { FilterButton } from "./filterBtn";

export function Card({ data, conditionsArr }) {
  return (
    <div className="w-full max-w-[330px] h-64 bg-white rounded-xl relative flex flex-col md:flex-row md:w-full md:max-w-[720px] md:h-40 md:items-center shadow-xl min-[1200px]:max-w-[1110px] md:justify-between">
      {/* left border */}
      <div className=" pt-9 px-6 pb-5 md:flex md:p-0 md:ps-6">
        <div className="w-1.5 h-full bg-[#46a9a9] absolute left-0 top-0 rounded-s-xl"></div>
        <div
          style={{ backgroundImage: `url(${data.logo})` }}
          className="rounded-full w-[50px] h-[50px] bg-center bg-cover absolute -top-6 left-5 bg-[url(./images/insure.svg)] md:w-[90px] md:h-[90px] md:my-auto md:static md:mr-5"
        ></div>
        <div className="md:inline">
          <h2 className="text-[#5ba4a4] font-medium inline me-4">
            {data.company}
          </h2>
          {data.new ? (
            <h2 className="me-2.5 px-2 pt-[5px] pb-1 bg-[#5ba4a4] text-white inline rounded-xl text-xs font-semibold">
              NEW!
            </h2>
          ) : (
            ""
          )}
          {data.featured ? (
            <h2 className="me-2.5 px-2 pt-[5px] pb-1 bg-[#2c3a3a] text-white inline rounded-xl text-xs font-semibold">
              FEATURED
            </h2>
          ) : (
            ""
          )}

          <Link
            to={`/${data.id}`}
            className="cursor-pointer block hover:text-[#5ba4a4] font-bold text-[#2c3a3a] text-xl mt-3"
          >
            {data.position}
          </Link>
          <p className="font-thin text-sm mt-[5px] text-[#7b8e8e]">
            {data.postedAt} <span>•</span> {data.contract} <span>•</span>{" "}
            {data.location}
          </p>
        </div>
      </div>
      <div className="py-3.5 mx-6 flex flex-wrap border-t gap-y-3 gap-x-3 md:items-center md:border-t-0 md:w-[250px] md:justify-end min-[1120px]:w-[555px]">
        {conditionsArr.map((str, i) => {
          return <FilterButton text={str} key={i} />;
        })}
      </div>
    </div>
  );
}
