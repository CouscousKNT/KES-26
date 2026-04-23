import "./App.css";
import MainMenu from "./pages/MainMenu/MainMenu";
import { useIsMobile } from "./hooks/useIsMobile";
import ReactPlayer from "react-player";
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
      {/* <ReactPlayer
        style={{ height: "100%", width: "100%" }}
        src="https://vz-94180d5e-480.b-cdn.net/9e1f336b-ee8b-445a-ba92-12aa1c605a40/playlist.m3u8"
      /> */}
      <MainMenu />
    </div>
  );
}

export default App;
