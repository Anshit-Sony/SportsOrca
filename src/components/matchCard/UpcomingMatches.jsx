import  { useEffect } from "react";
import { fetchMatches } from "../../API/Football_API";
import { MatchState } from "../../context/MatchProvider";

const UpcomingMatches = () => {
  const { matches, setMatches } = MatchState();
  const { showMatches, setShowMatches } = MatchState();
  const { search } = MatchState();

  useEffect(() => {
    fetchMatches().then((data) => {
      setMatches(data);
      setShowMatches(data);
    });
  }, [setMatches, setShowMatches]);

  useEffect(() => {
    if (!search || !search.trim()) {
      setShowMatches(matches);
      return;
    }

    const filtered = matches.filter(
      (match) =>
        match.teams.home.name.toLowerCase().includes(search.toLowerCase()) ||
        match.teams.away.name.toLowerCase().includes(search.toLowerCase())
    );

    setShowMatches(filtered);
  }, [search, matches, setShowMatches]);

  return (
    <>
      <h1 className="text-center text-4xl mt-10 font-bold underline">
        All Matches of 2022-23
      </h1>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {(showMatches || []).length === 0 ? (
          <p className="text-center col-span-full">No matches found.</p>
        ) : (
          showMatches.map((match) => (
            <div
              key={match.fixture.id}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="text-lg font-semibold mb-2">
                {match.teams.home.name}{" "}
                <span className="text-gray-500">vs</span>{" "}
                {match.teams.away.name}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                {new Date(match.fixture.date).toLocaleString()}
              </div>
              <div className="text-sm text-blue-600 font-medium">
                {match.league.name} ({match.league.country})
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default UpcomingMatches;
