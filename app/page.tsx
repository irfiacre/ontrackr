import DayThemeCard from "./components/Cards/DayThemeCard";
import Chart from "./components/Chart";
import { generateRandomString } from "./helpers/helperMethods";
import DayActivities from "./View/DaysActivities";
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

  const titleStyle = "text-xl font-bold px-2 py-1 text-primary-dark-1";
  return (
    <main>
      <div>
        <div>
          <h1 className={titleStyle}>Analytics</h1>
          <Chart />
          <br />
        </div>
        <h1 className={titleStyle}>Days Theme</h1>
        <div className="flex gap-5 flex-wrap">
          {days.map((dayElt) => (
            <div key={generateRandomString("color")}>
              <DayThemeCard {...dayElt} />
            </div>
          ))}
        </div>
        <div className="py-10">
          <h1 className={titleStyle}>Highlights</h1>
          <Highlights />
        </div>
      </div>
    </main>
  );
}
