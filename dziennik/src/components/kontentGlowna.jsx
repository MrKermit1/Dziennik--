import React from "react";
import GlownaHead from "./glownaHead.jsx";
import Stopka from "./stopka";

function kontentGlowna() {
    
    return (
        <>
            <GlownaHead/>
            <div >
                <p className=" text-center pt-52 text-2xl">WITAJ W DZIENNICZKU++</p>
            </div>
            <Stopka/>
        </>
    )
}export default kontentGlowna;