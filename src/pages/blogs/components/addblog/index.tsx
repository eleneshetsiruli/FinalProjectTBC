import { pageEnums } from "@/pages/enums/pageEnums";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const AddBlogComponent = () => {
  return (
    <div className="flex justify-center items-center gap-4 m-10 p-3 bg-gradient-to-r  rounded-lg ">
      <Link
        to={pageEnums.ADDBLOG}
        className="text-xl font-extrabold italic tracking-wide drop-shadow-md"
      >
        Add Blog
      </Link>
      <Link
        to={pageEnums.ADDBLOG}
        className="flex justify-center items-center p-4 bg-white text-orange-600 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
      >
        <FontAwesomeIcon className="w-8 h-8" icon={faCirclePlus} />
      </Link>
    </div>
  );
};
