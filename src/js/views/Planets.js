import React, {useContext} from "react";
import {Context} from "../store/appContext"


const Planets = () => {
        const {store, actions} = useContext(Context)
    return (
        <h3>Planets component</h3>
    )
}

export default Planets;