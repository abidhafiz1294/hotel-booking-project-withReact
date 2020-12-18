import React, { Component } from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../Rooms/rooms_container";
import { connect } from "react-redux";
import { fetchItems } from "../redux/actionCreators";

const mapStateToProps = state => {
    return {
        rooms: state.rooms,
        loading: state.loading,
        sortedRooms: state.sortedRooms,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchItems: () => dispatch(fetchItems()),
    }
}

class Rooms extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }
    render() {
        return (
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <Link className="btn-primary" to="/">
                        return
                    </Link>
                </Banner>

                < RoomContainer rooms={this.props.rooms} loading={this.props.loading} sortedRooms={this.props.sortedRooms} />
            </Hero>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);