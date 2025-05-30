import {  useState, createContext, useContext } from "react";


const MatchContext = createContext();

const MatchProvider = ({ children }) => {
  const [matches, setMatches] = useState([]);
  const [showMatches, setShowMatches] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <MatchContext.Provider value={{ matches, setMatches, search, setSearch, showMatches, setShowMatches }}>
      {children}
    </MatchContext.Provider>
  );
};

export const MatchState = () => useContext(MatchContext);

export default MatchProvider;
