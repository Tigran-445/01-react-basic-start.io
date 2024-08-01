import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import { useState } from "react";
import FeedBackSection from "./components/FeedBackSection.jsx";
import EffectSection from "./components/EffectSections.jsx";

export default function App() {
  const [tab, setTab] = useState("effect");
  const [visible,setVisible] = useState(true);
  setTimeout (() => {
    setVisible(false)
  },3000)
  return (
    <>
      {visible && <Header />}
      <main>
        <IntroSection />
        <TabsSection active={tab} 
        onChange={(current) => setTab(current)}/>

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === "feedback" && <FeedBackSection />}

        {tab === "effect" && <EffectSection />}

      </main>
    </>
  );
}