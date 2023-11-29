import { connect } from "react-redux";
import BarMenu from "./BarMenu";
// barMenuLinks={props.state.barMenuLinks.barMenuLinks}
const mapStateToProps = (state) => {
    return {
        barMenuLinks: state.barMenuLinks.barMenuLinks,
    };
};

const ContainerBarMenu = connect(mapStateToProps, null)(BarMenu);
export default ContainerBarMenu;
