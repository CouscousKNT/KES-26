import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu/MainMenu";
import TitleScreen from "./pages/TitleScreen/TitleScreen";
import { useIsMobile } from "./hooks/useIsMobile";

function Home() {
  return (
    <div>
      <MainMenu />
    </div>
  );
}

function App() {
  const isMobile = useIsMobile();
  return (
    <>
      <div
        id="tv-border"
        className={`fixed px-[12%] py-[8%] ${!isMobile ? "block" : "hidden"}`}
        style={{
          backgroundImage: "url(/images/TV-BORDER.webp)",
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
