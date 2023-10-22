const CategoreyBox = ({ lable, icon: Icon }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-2 gap-2 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500">
        <Icon size="26px"></Icon>
        <div className="text-sm font-medium">{lable}</div>
      </div>
    </>
  );
};

export default CategoreyBox;
