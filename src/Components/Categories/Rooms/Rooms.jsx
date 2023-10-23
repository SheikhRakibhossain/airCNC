import { useEffect, useState } from "react";
import Container from "../../../Layout/Shared/Container/Container";
import RoomCard from "./RoomCard";
import { toast } from 'react-toastify';

const Rooms = () => {

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loading(true);
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch(error =>toast(error.message))
  }, []);

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
