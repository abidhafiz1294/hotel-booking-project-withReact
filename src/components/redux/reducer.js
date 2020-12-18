import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
    error: null
}
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ITEMS:

            let rooms = action.payload.map((item) => {
                let id = item.sys.id;
                let images = item.fields.images.map((image) => {
                    return image.fields.file.url;
                });
                let room = {
                    ...item.fields,
                    id,
                    images,
                };
                return room;
            });

            let featuredRooms = rooms.filter((room) => room.featured === true);

            let maxPrice = Math.max(...rooms.map((item) => item.price));

            let maxSize = Math.max(...rooms.map((item) => item.size));
            return {
                ...state,
                rooms: rooms,
                featuredRooms: featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                size: maxSize,
            }
        case actionTypes.LOAD_ITEMS_FAILED:
            return {
                ...state,
                error: action.payload,
            }

        case actionTypes.ROOMS_FILTER:
            return {
                ...state,
                [state]: action.payload,
            }
    }
}