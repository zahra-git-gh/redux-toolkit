import { useSelector } from "react-redux";
import { Card } from "./Card";

export function ContainerCards() {
  const jobs = useSelector((state) => state.jobs);
  console.log(jobs);

  const filters = useSelector((state) => state.filters);
  return (
    <div className="w-full flex flex-col items-center gap-y-10 mt-14 mb-24">
      {jobs.map((obj) => {
        const conditionsArr = [
          obj.role,
          obj.level,
          ...obj.languages,
          ...obj.tools,
        ];
        return (
          filters.length> 0 ? filters.every((filter)=>conditionsArr.includes(filter))? <Card
            key={obj.id}
            data={obj}
            conditionsArr={[
              obj.role,
              obj.level,
              ...obj.languages,
              ...obj.tools,
            ]}
          />: '':<Card
          key={obj.id}
          data={obj}
          conditionsArr={[
            obj.role,
            obj.level,
            ...obj.languages,
            ...obj.tools,
          ]}
        />
          
        );
      })}
    </div>
  );
}
