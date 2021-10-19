import React, { useState } from "react";

const initialAscensionState = {
    honor: 60,
    players: [{
        name: "Player 1",
        score: 0
    },{
        name: "Player 2",
        score: 0
    }]
};

export const AscensionContext = React.createContext();

const AscensionStore = ({ children }) => {
    const [ascensionState, setAscensionState] = useState();

    return (
        <AscensionContext.Prover 
        value={{ ascensionState, setAscensionState }}
        >
            {children}
        </AscensionContext.Prover>
    );
};

export default AscensionStore;