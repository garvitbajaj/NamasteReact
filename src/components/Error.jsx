import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log("error",err);
    return (
        <div className="error">
            <h1>Oops !!</h1>
            <h1>Something Went Wrong !! </h1>
            <h2>{err.status + " : " + err.statusText}</h2>
        </div>
    );
}

export default Error;