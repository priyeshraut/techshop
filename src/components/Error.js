import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div className="error sectionPadding">
            <p className="errStatus">{err.status}</p>
            <p className="errStatusText">Page {err.statusText}</p>
            <p>Sorry. We Can't Seem To Find The Page You're Looking For</p>
            <Link to={"/"}><button type="button" className="button whiteBgBtn">BACK TO HOME</button></Link>
        </div>
    )
}

export default  Error;