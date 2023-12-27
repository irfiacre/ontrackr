import DayThemeCard from "./components/Cards/DayThemeCard";
import Highlights from "./View/Highlights";

export default function Home() {
  const days = [
    {
      themeName: "Motivated Day",
      color: "#fffeee",
      dayName: "Monday",
    },
    {
      themeName: "Motivated Day",
      color: "#fffe7e",
      dayName: "Monday",
    },
    {
      themeName: "Motivated Day",
      color: "#fffee0",
      dayName: "Monday",
    },
    {
      themeName: "Motivated Day",
      color: "#ff1eee",
      dayName: "Monday",
    },
    {
      themeName: "Motivated Day",
      color: "#f23eee",
      dayName: "Monday",
    },
    {
      themeName: "Motivated Day",
      color: "#ff1eee",
      dayName: "Monday",
    },
    {
      themeName: "Motivated Day",
      color: "#f23eee",
      dayName: "Monday",
    },
  ];

  return (
    <main>
      <div>
        <h1>Days Theme</h1>
        <div className="flex gap-5 flex-wrap">
          {days.map((dayElt) => (
            <div key={dayElt.color}>
              <DayThemeCard {...dayElt} />
            </div>
          ))}
        </div>
        <div>
          <Highlights />
        </div>
      </div>
    </main>
  );
}
