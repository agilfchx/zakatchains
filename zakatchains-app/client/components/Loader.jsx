import FadeLoader from "react-spinners/FadeLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function Loader({loading}){
    
    return loading ? (
        <>
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50" />
            <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full">
                <FadeLoader
                    color="#36d7b7"
                    loading={loading}
                    size={20}
                    cssOverride={override}
                />
            </div>
        </>
    ) : null   
}