import { connect } from "react-redux";
import FriendsBox from "./FriendsBox";

const mapStateToProps = (state) => {
    // console.log(state.friendsBox.friendsBox);
    return {
        friendsBox: state.friendsBox.friendsBox,
    };
};

const ContainerFriendsBox = connect(mapStateToProps, null)(FriendsBox);

export default ContainerFriendsBox;
