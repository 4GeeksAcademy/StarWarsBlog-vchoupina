import React, {useContext} from "react";
import { Context } from "../store/appContext";

const Characters = () => {
        const {store, actions} = useContext(Context)
    return (
        <div>
            <h3>Characters : {store.actions}</h3>
        </div>
    )
}

export default Characters