import { useEffect, useState } from "react";
import Container from "../../../Layout/Shared/Container/Container";
import RoomCard from "./RoomCard";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      });
  }, []);

  console.log(rooms);
  return (
    <>
      <Container>
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
          {rooms.map((room) => (<RoomCard key={room.image} room={room}></RoomCard>
            
          ))}
        </div>
      </Container>
    </>
  );
};

export default Rooms;
