import React, { useState } from "react";

const initialAscensionState = {
  honor: 60,
  players: [
    {
      id: 1,
      name: "Player 1",
      score: 0,
    },
    {
      id: 2,
      name: "Player 2",
      score: 0,
    },
  ],
};

export const AscensionContext = React.createContext();

const AscensionStore = ({ children }) => {
  const [ascensionState, setAscensionState] = useState(initialAscensionState);

  return (
    <AscensionContext.Provider value={{ ascensionState, setAscensionState }}>
      {children}
    </AscensionContext.Provider>
  );
};

export default AscensionStore;
