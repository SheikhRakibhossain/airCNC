import { useEffect, useState } from "react";
import Container from "../../../Layout/Shared/Container/Container";
import RoomCard from "./RoomCard";
import { toast } from "react-toastify";
import Loader from "../../Loader/Loader";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setRooms(data);
      })
      .catch((error) => toast(error.message));
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Container>
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
          {rooms.map((room) => (
            <RoomCard key={room.image} room={room}></RoomCard>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Rooms;
