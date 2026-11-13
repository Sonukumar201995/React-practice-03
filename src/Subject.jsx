import { useContext } from "react";
import SubjectContext from "./ContextData";

function Subject() {
    const subject = useContext(SubjectContext);

    return (
        <>
            <h1>Subject is: {subject}</h1>
        </>
    );
}

export default Subject;