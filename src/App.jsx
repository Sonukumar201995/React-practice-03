import Collage from "./Collage";
import SubjectContext from "./ContextData";

function App() {
    return (
        <>
            <SubjectContext.Provider value="JavaScript">
                <Collage />
            </SubjectContext.Provider>
        </>
    );
}

export default App;