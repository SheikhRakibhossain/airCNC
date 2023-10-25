import { useEffect, useState } from "react";
import Container from "../../../Layout/Shared/Container/Container";
import RoomCard from "./RoomCard";
import { toast } from "react-toastify";
import Loader from "../../Loader/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../../../Layout/Shared/Heading/Heading";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  console.log(category);

  useEffect(() => {
    setLoading(true);
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }
        setLoading(false);
      })
      .catch((error) => toast(error.message));
  }, [category]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Container>
        {rooms && rooms.length > 0 ? (
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {rooms.map((room) => (
              <RoomCard key={room.image} room={room}></RoomCard>
            ))} 
          </div>
        ) : (
          <div className="pt-12">
            <Heading
              title="No Room availble in this category"
              subtitle="Please select other category for more !"
              center={true}
            ></Heading>
          </div>
        )}
      </Container>
    </>
  );
};

export default Rooms;
