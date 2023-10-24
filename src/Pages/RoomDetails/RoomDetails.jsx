import Container from "../../Layout/Shared/Container/Container";
import Header from "./Header/Header";
import RoomReservation from "./Reservation/RoomReservation";
import RoomInfo from "./RoomInfo/RoomInfo";

const RoomDetails = () => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 pt-12">
            <RoomInfo />
            <div className="col-span-3 sm:col-start-auto order-first md:order-last">
              <RoomReservation />
             
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
