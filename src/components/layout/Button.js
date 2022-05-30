import { Link } from "react-router-dom";
import "./../css/Button.css"

const Button = ({ type, href, state }) => {
    switch (type) {
        case "details":
            return (
                <Link to={href} className="btn btn_details" state={state}>
                    <i class='bx bx-show' ></i>
                    <span className="tooltip">Details</span>
                </Link>
            );
            break;
        case "confirm":
            return (
                <Link to={href} className="btn btn_details" state={state}>
                    <i class='bx bx-check'></i>
                    <span className="tooltip">Confirm</span>
                </Link>
            );
            break;
        case "edit":
            return (
                <Link to={href} className="btn btn_edit" state={state}>
                    <i class='bx bx-edit'></i>
                    <span className="tooltip">Edit</span>
                </Link>
            );
            break;
        case "delete":
            return (
                <Link to={href} className="btn btn_delete" state={state}>
                    <i class='bx bx-trash' ></i>
                    <span className="tooltip">Remove</span>
                </Link>
            );
            break;
        case "hide":
            return (
                <Link to={href} className="btn btn_hide" state={state}>
                    <i class='bx bx-hide' ></i>
                    <span className="tooltip">Hide</span>
                </Link>
            );
            break;
        case "create":
            return (
                <Link to={href} className="btn btn_create" state={state}>
                    <i class='bx bx-plus-circle'></i>
                    <span className="tooltip">Create new</span>
                </Link>
            );
            break;
        case "accept":
            return (
                <Link to={href} className="btn btn_accept" state={state}>
                    <span className="tooltip">Accept</span>
                </Link>
            );
            break;
        default:
            return (
                <Link to={href} className="btn" state={state}>
                    <span className="tooltip">Button</span>
                </Link>
            );
            break;
    }

}

export default Button