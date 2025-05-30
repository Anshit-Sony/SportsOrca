# SportsOrca

**SportsOrca** is a React-based web application that displays upcoming football matches fetched from a free football API. Users can search for matches by team names using a live search feature integrated into the navbar.

---

## Features

* Fetches upcoming football matches from a public API
* Displays match cards with teams, date/time, and league info
* Live search filter to find matches by home or away team
* Responsive grid layout using Tailwind CSS
* Clean and modern UI with smooth hover effects

---


## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/sportsorca.git
cd sportsorca
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The app will run at `http://localhost:3000`.

---

## Usage

* The navbar contains a search input to filter matches by team names.
* Matches are displayed in cards showing home vs away teams, match date/time, and league info.
* The list updates live as you type in the search box.

---

## Project Structure

```
/src/API/Football_API.js          # Functions to fetch match data from the football API
/src/context/MatchProvider.js     # React Context for managing match and search state globally
/src/components/Navbar.jsx        # Navbar with search input component
/src/components/UpcomingMatches.jsx  # Component displaying upcoming matches with filtering
/src/App.jsx                      # Main app entry component
```

---

## Technologies Used

* React
* React Context API for state management
* Tailwind CSS for styling
* Fetch API for data requests

---

## Notes

* Uses a free football API with limited data; plan restrictions apply.
* Make sure to add your own API key in `/src/API/Football_API.js` if needed.
* Search is case-insensitive and filters on both home and away teams.
