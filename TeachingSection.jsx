import WayToTeach from "./WayToTeach.jsx";
import { ways } from "../data.js";

export default function () {
  return (
    <section>
      <h3>Наш подход к обучению</h3>
      <ul>
        {ways.map((way) => {
          return <WayToTeach key={way.title} {...way} />;
        })}
      </ul>
    </section>
  );
}
