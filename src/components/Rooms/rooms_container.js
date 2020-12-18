import React from "react";
import RoomsFilter from "./rooms_filter";
import RoomsList from "./rooms_list.js";
import Loading from "../Loading/Loading";




function RoomContainer(props) {

    if (props.loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={props.rooms} />
            <RoomsList rooms={props.sortedRooms} />
        </>
    );
}

export default RoomContainer;

// import React from "react";
// import RoomsFilter from "./rooms_filter.js";
// import RoomsList from "./rooms_list.js";
// import { RoomConsumer } from "../context";
// import Loading from "./loading";

// function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) {
//           return <Loading />;
//         }

//         return (
//           <>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

// export default RoomContainer;
