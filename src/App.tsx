import "./App.css";
import MainMenu from "./pages/MainMenu/MainMenu";
import { useIsMobile } from "./hooks/useIsMobile";
function App() {
  const isMobile = useIsMobile();
  return (
    <div className="">
      {/* <Modal /> */}
      {/* <MusicPlayer /> */}
      {/* <SearchBar /> */}

      <div
        id="tv-border"
        className={`fixed px-[12%] py-[8%] ${!isMobile ? "block" : "hidden"}`}
        style={{
          backgroundImage: "url(/images/TV-BORDER.webp)",
        }}
      />
      <MainMenu />
    </div>
  );
}

export default App;
