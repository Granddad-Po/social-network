import {connect} from "react-redux";
import Navbar from "./Navbar";


let mapStateToProps = (state) => {
    return {
        friends: state.navbar.friends
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;