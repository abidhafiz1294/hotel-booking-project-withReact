import React, { Component } from "react";
import Title from "../Title/Title";
import { rooms_filter } from "../redux/actionCreators";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        rooms: state.rooms,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        rooms_filter: (filter) => dispatch(rooms_filter(filter))
    }
}


const getUniqueValues = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
};

class RoomsFilter extends Component {

    state = {
        loading: true,
        type: "",
        capacity: "",
        price: "",
        minPrice: "",
        maxPrice: "",
        minSize: "",
        maxSize: "",
        breakfast: "",
        pets: "",
        sortedRooms: [],
    }



    handleChange = (event) => {
        const { type, name } = event.target;
        const value =
            type === "checkbox"
                ? event.target.checked
                : event.target.value;
        console.log(name, value);
        this.setState(
            {
                [name]: value,
            },
            this.filterRooms
        );
        const filter = this.state;
        this.props.rooms_filter(filter);
    };

    filterRooms = () => {

        // all the rooms
        let tempRooms = [...this.props.rooms];

        // transform value
        let capacity = parseInt(this.state.capacity);
        let price = parseInt(this.state.price);

        // filter by type
        if (this.state.type !== "all") {
            tempRooms = tempRooms.filter((room) => room.type === this.state.type);
        }

        // filter by capacity
        if (this.state.capacity !== 1) {
            tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
        }

        // filter by price
        if (this.state.price !== this.state.maxPrice) {
            tempRooms = tempRooms.filter((room) => room.price <= price);
        }

        // filter by size
        tempRooms = tempRooms.filter(
            (room) => room.size >= this.state.minSize && room.size <= this.state.maxSize
        );

        // filter by breakfast
        if (this.state.breakfast) {
            tempRooms = tempRooms.filter((room) => room.breakfast === true);
        }

        // filter by pets

        if (this.state.pets) {
            tempRooms = tempRooms.filter((room) => room.pets === true);
        }

        this.setState({
            sortedRooms: tempRooms,
        });
    };

    render() {
        //   get unique types
        let types = getUniqueValues(this.props.rooms, "type");
        // add all
        types = ["all", ...types];
        let people = getUniqueValues(this.props.rooms, "capacity");
        people = people.map((item, index) => {
            return (
                <option key={index} value={item}>
                    {item}
                </option>
            );
        });
        return (
            <section className="filter-container">
                <Title title="search rooms" />
                <form className="filter-form">
                    {/* select type */}
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select
                            name="type"
                            id="type"
                            value={this.state.type}
                            className="form-control"
                            onChange={this.handleChange}
                        >
                            {types.map((type, index) => {
                                return (
                                    <option key={index} value={type}>
                                        {type}
                                    </option>
                                );
                            })}
                            <option value="single">single</option>
                        </select>
                    </div>
                    {/* end select type */}
                    {/* guests type */}
                    <div className="form-group">
                        <label htmlFor="capacity">Guests</label>
                        <select
                            name="capacity"
                            id="capacity"
                            value={this.state.capacity}
                            className="form-control"
                            onChange={this.handleChange}
                        >
                            {people}
                        </select>
                    </div>
                    {/* end guests type */}

                    {/* room price type */}
                    <div class="form-group">
                        <label htmlFor="price">room price ${this.state.price}</label>
                        <input
                            type="range"
                            name="price"
                            min={this.state.minPrice}
                            max={this.state.maxPrice}
                            id="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </div>
                    {/* end room price type */}

                    {/* size type */}
                    <div class="form-group">
                        <label htmlFor="size">room size</label>
                        <div className="size-inputs">
                            <input
                                type="number"
                                name="minSize"
                                id="size"
                                value={this.state.minSize}
                                onChange={this.handleChange}
                                className="size-input"
                            />
                            <input
                                type="number"
                                name="maxSize"
                                id="size"
                                value={this.state.maxSize}
                                onChange={this.handleChange}
                                className="size-input"
                            />
                        </div>
                    </div>
                    {/* end size type */}

                    {/* extras */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input
                                type="checkbox"
                                name="breakfast"
                                id="breakfast"
                                checked={this.state.breakfast}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input
                                type="checkbox"
                                name="pets"
                                id="pets"
                                checked={this.state.pets}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>
                    {/* end extras */}this.state.
                </form>
            </section>
        );
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsFilter);
