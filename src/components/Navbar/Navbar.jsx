import { MatchState } from "../../context/MatchProvider";

const Navbar = () => {
  const { search, setSearch } = MatchState();

  return (
    <nav className="bg-blue-500 p-4 shadow text-white flex justify-between items-center">
      <div className="text-xl font-bold">SportsOrca</div>
      <div>
        <input
          type="text"
          placeholder="Search Team matches..."
          className="rounded-md px-3 py-1 text-white font-bold bg-blue-600 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
