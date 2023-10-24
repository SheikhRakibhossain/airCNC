import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoreyBox = ({ lable, icon: Icon }) => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const value = params.get("category");
  // console.log(value);
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = {
      ...currentQuery,
      category: lable,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updateQuery,
      },
      {
        skipNull: true,
      },

      );
      navigate(url)
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="flex flex-col justify-center items-center p-2 gap-2 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500 cursor-pointer"
      >
        <Icon size="26px"></Icon>
        <div className="text-sm font-medium">{lable}</div>
      </div>
    </>
  );
};

export default CategoreyBox;
