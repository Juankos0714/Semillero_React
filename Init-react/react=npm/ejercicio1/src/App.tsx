import { useState } from "react";

import "./index.css";

/**
 * props drilling & lifting state
 * 
*/



export const App=() => {
    const [isVisible, setIsVisible] = useState(false);
    const handleSetIsVisible = () => {
        setIsVisible(!isVisible);
    }

    return (
    <div className="general-container">
        <button className="btn-purchase" onClick={()=>{ setIsVisible(!isVisible)}}>Buy Now</button>


        {isVisible && <section className="modal">

            <h6>Confirm Purchase?</h6>
            <div className="modal-options">
            <button className="btn-purchase" onClick={()=>{
                handleSetIsVisible(); 
                alert("Succesfully")}}>Confirmar</button>
            <button className="btn-purchase" onClick={()=> handleSetIsVisible()}>Cancelar</button>
            </div>
        </section>}
        
    </div>
    )

}
export default App;
