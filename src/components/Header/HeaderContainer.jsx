import React from "react";
import { connect } from "react-redux";
import { authMe } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header {...this.props} />;
    }
}
const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { authMe })(HeaderContainer);
