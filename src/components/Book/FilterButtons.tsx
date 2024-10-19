import { TTopicState } from "../../types";



const FilterButtons = ({
  topic, subjects, setTopic
}: TTopicState
) => {
  return (
    <div className="flex justify-center mb-10 sm:mb-12 lg:mb-20 w-full overflow-hidden">
      <select
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-2 sm:px-3 py-3 sm:py-4 lg:py-4 border-2 border-[#d0d5e0] rounded text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#9b9da1] bg-white focus:outline-none focus:ring-2 focus:ring-[#e5e7eb] transition duration-300 ease-in-out cursor-pointer"
      >
        <option value="">All Subjects</option>
        {subjects.map((subject, index) => (
          <option key={index} value={subject} className="truncate">
            {subject}
          </option>
        ))}
      </select>
    </div>
  )
};

export default FilterButtons;