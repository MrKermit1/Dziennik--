import React, { useEffect, useState } from "react"
import Stopka from "../stopka"
import GlownaHead from "../glownaHead"
import {Input, Button} from "@nextui-org/react";

function DodajSzkole() {
    
    const [email, setEmail] = useState('');

    
    return (
        <>
            <GlownaHead/>
                <div className="flex flex-col items-center">
                    <h4 className=" text-center" >Wpisz dane aby zarejestrować swoją szkołę do dzienniczka</h4>
                    <div className="w-56 mt-40">
                        <Input type="text" label="Nazwa szkoły" onChange={(e) => setEmail(e.target.value)} />
                        <Input type="text" label="Adres szkoły"/>
                        <Input type="email" label="Email szkoły"/>
                        <Input type="email" label="Imie Dyrektora szkoły"/>
                        <Input type="email" label="Nazwisko Dyrektora szkoły"/>

                        
                        
                    </div>
                    <Button color="primary">Zarejestruj</Button>
                    
                </div>
            <Stopka/>
        </>
    )
}export default DodajSzkole