import React, { Component } from "react";
import Loading from "../Loading/Loading";
import Room from "../Rooms/room";
import Title from "../Title/Title";
import { connect } from "react-redux";
import { fetchItems } from "../redux/actionCreators";

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: () => dispatch(fetchItems()),
    }
}

const mapStateToProps = state => {
    return {
        rooms: state.rooms,
        loading: state.loading,
    }
}
class FeaturedRooms extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }
    render() {

        let rooms = this.props.rooms.map((room) => {
            return <Room key={room.id} room={room} />;
        });
        return (

            <section className="featured-rooms">
                <Title title="Featured Rooms" />

                <div className="featured-rooms-center">
                    {this.props.loading ? <Loading /> : rooms}
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedRooms);
