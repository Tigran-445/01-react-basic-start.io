// export default function IntroSection() {
//   return (
//     <section>
//       <h1 className="centered">Result University</h1>
//       <h3 className="centered" style={{color: '#777'}}>
//         Школа Frontend разработки для начинающих,насыщает ИТ сферу
//         специалистами.
//       </h3>
//     </section>
//   );
// }

import React from "react";

const e = React.createElement;

export default function IntroSection() {
  return e("section", null, [
    e("h1", { className: "centered", key: 1}, "Result University"),
    e(
      "h3",
      { className: "centered", style: { color: "#777" }, key: 2},
      "Школа Frontend разработки для начинающих,насыщает ИТ сферу специалистами."
    ),
  ]);
}
