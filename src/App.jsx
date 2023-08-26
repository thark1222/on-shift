import "./App.css";
import CardHolder from "./Components/CardHolder";
import { useState } from "react";

function App() {
  ///Arbitrary Date that lines up with beginning of work schedule
  const startDate = new Date("01/08/2023");

  ///Gets today's date
  const currentDate = new Date();

  ///Detects if Daylight Savings Time is Active
  const isDST = (d) => {
    let jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
    let jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();
    return Math.max(jan, jul) !== d.getTimezoneOffset();
  };

  if (isDST(currentDate)) {
    var timeOffset = 3600000;
  } else {
    timeOffset = 0;
  }

  ///Converts startDate to a total of milliseconds
  const startMs = startDate.getTime();

  ///Converts today's Date to milliseconds and adds milliseconds if Daylight Savings Time is active or not
  const currentMs = currentDate.getTime() + timeOffset;

  ///Calculates the Difference of time from Set date to Current Date in Millisecs
  const msDiff = currentMs - startMs;

  ///Converts Milliseconds back to days and Rounds to lowest whole Day
  const daysSince = Math.floor(msDiff / (1000 * 60 * 60 * 24));

  ///Calculates the offset of days for who is on for each shift
  const shiftsOfTheDay = (daysSince % 28) * 3;

  ///State for the countdown hours remaining in a shift
  const [timeLeft, setTimeLeft] = useState("");

  ///Objects for the respective shifts
  const midnight = {
    shift: "Midnight Inspector",
    time: "00:00 - 08:00",
    countdown: 28800000,
  };

  const dayturn = {
    shift: "Dayturn Inspector",
    time: "08:00 - 16:00",
    countdown: 57600000,
  };

  const afternoon = {
    shift: "Afternoon Inspector",
    time: "16:00 - 00:00",
    countdown: 86400000,
  };

  ///Detects what shift is Currently on
  const hours = Math.floor(currentDate.getHours() / 8);
  const shifts = [midnight, dayturn, afternoon];

  ///Gets the remaining hours and minutes of current shift
  const countDown = (end) => {
    var currentTime = new Date();
    var hoursInMs = currentTime.getHours() * 60 * 60 * 1000;
    var minsInMs = currentTime.getMinutes() * 60 * 1000;
    var timeInMs = hoursInMs + minsInMs;
    var hoursLeft = Math.floor((end - timeInMs) / (1000 * 60 * 60));
    var minsLeft = Math.ceil(
      ((end - timeInMs) / (1000 * 60 * 60) - hoursLeft) * 60
    );
    var left = hoursLeft + ":" + (minsLeft > 10 ? "" : "0") + minsLeft;

    setTimeLeft(left);
  };

  
  ///Updates remaining shift time every second
  setInterval(countDown, 1000, shifts[hours].countdown);

  ///Objects for the respective Inspector
  const johnTaylor = {
    name: "John Taylor",
    number: "330-207-3327",
  };

  const randallTharp = {
    name: "Randall Tharp",
    number: "330-651-2464",
  };
  const keithGalich = {
    name: "Keith Galich",
    number: "330-506-2194",
  };
  const derekAnderson = {
    name: "Derek Anderson",
    number: "234-564-5114",
  };
  const offShift = {
    name: "No Inspector on Shift",
    number: "",
  };

  ///The 4 week rotation of each shift in order
  const shiftRotation = [
    johnTaylor,
    randallTharp,
    keithGalich,
    johnTaylor,
    randallTharp,
    keithGalich,
    derekAnderson,
    randallTharp,
    keithGalich,
    derekAnderson,
    randallTharp,
    keithGalich,
    derekAnderson,
    randallTharp,
    johnTaylor,
    derekAnderson,
    offShift,
    johnTaylor,
    derekAnderson,
    keithGalich,
    johnTaylor,
    derekAnderson,
    keithGalich,
    johnTaylor,
    derekAnderson,
    keithGalich,
    johnTaylor,
    randallTharp,
    keithGalich,
    johnTaylor,
    randallTharp,
    keithGalich,
    johnTaylor,
    randallTharp,
    keithGalich,
    derekAnderson,
    randallTharp,
    offShift,
    derekAnderson,
    randallTharp,
    johnTaylor,
    derekAnderson,
    randallTharp,
    johnTaylor,
    derekAnderson,
    randallTharp,
    johnTaylor,
    derekAnderson,
    keithGalich,
    johnTaylor,
    derekAnderson,
    keithGalich,
    johnTaylor,
    derekAnderson,
    keithGalich,
    johnTaylor,
    randallTharp,
    keithGalich,
    offShift,
    randallTharp,
    keithGalich,
    derekAnderson,
    randallTharp,
    keithGalich,
    derekAnderson,
    randallTharp,
    keithGalich,
    derekAnderson,
    randallTharp,
    johnTaylor,
    derekAnderson,
    randallTharp,
    johnTaylor,
    derekAnderson,
    randallTharp,
    johnTaylor,
    derekAnderson,
    keithGalich,
    johnTaylor,
    offShift,
    keithGalich,
    johnTaylor,
    randallTharp,
    keithGalich,
  ];

  return (
    <div className="App">
      <CardHolder
        active={hours === 0}
        person={shiftRotation[shiftsOfTheDay].name}
        number={shiftRotation[shiftsOfTheDay].number}
        shift={shifts[0]}
        timeLeft={timeLeft}
      />

      <CardHolder
        active={hours === 1}
        person={shiftRotation[shiftsOfTheDay + 1].name}
        number={shiftRotation[shiftsOfTheDay + 1].number}
        shift={shifts[1]}
        timeLeft={timeLeft}
      />
      <CardHolder
        active={hours === 2}
        person={shiftRotation[shiftsOfTheDay + 2].name}
        number={shiftRotation[shiftsOfTheDay + 2].number}
        shift={shifts[2]}
        timeLeft={timeLeft}
      />
    </div>
  );
}

export default App;
