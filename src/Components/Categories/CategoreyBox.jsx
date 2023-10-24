import { useSearchParams } from "react-router-dom";

const CategoreyBox = ({ lable, icon: Icon }) => {

const [params, setParams] = useSearchParams();
const value = params.get("category");
console.log(value);


  return (
    <>
      <div className="flex flex-col justify-center items-center p-2 gap-2 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500 cursor-pointer">
        <Icon size="26px"></Icon>
        <div className="text-sm font-medium">{lable}</div>
      </div>
    </>
  );
};

export default CategoreyBox;
