import Button from "../../../Layout/Shared/Button/Button";
import Calender from "../Calender/Calender";

const RoomReservation = () => {
  return (
    <>
      <div className=" bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
        <div className="flex flex-col items-start p-4 gap-1">
          <div className="text-2xl font-semibold"> $550</div>
          <div className="font-light text-neutral-600">Moon Night</div>
        </div>
        <hr />
        <Calender />
        <hr />
        <div className="p-3">
          <Button label="Reserve Room" />
        </div>
        <hr />
        <div className="flex flex-row justify-between font-semibold text-lg p-4">
          <h2>Total</h2>
          <h2>$400</h2>
        </div>
      </div>
    </>
  );
};

export default RoomReservation;
