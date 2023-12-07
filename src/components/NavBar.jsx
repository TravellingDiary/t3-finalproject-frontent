import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styling/components/NavBar.css'
import { NavLink } from "react-router-dom";

function NavBar() {

    let activeNavStyle = {
        textDecorationThickness: 4,
        textDecorationColor: "white",
        textDecorationLine: "underline"
    }

    return (
        <Row xs={5} className="navbar-container">
            <Col className="navbar-item">
                <NavLink className="navbar-link" to="/" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6>Log Out</h6>
                </NavLink>
            </Col>
            <Col className="navbar-item">
                <NavLink className="navbar-link" to="/dashboard" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6>Dash Board</h6>
                </NavLink>
            </Col>
            <Col className="navbar-item">
                <NavLink className="navbar-link" to="/bloglist" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6>Blog List</h6>
                </NavLink>
            </Col>
            <Col className="navbar-item">
                <NavLink className="navbar-link" to="/createpost" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6>Create Post</h6>
                </NavLink>
            </Col>
            <Col className="navbar-item">
                <NavLink className="navbar-link" to="/userprofile" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6>User Profile</h6>
                </NavLink>
            </Col>
        </Row>
    )
}

export default NavBar;