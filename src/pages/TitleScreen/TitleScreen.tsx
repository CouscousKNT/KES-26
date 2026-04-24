import { useNavigate } from "react-router-dom";
import { ActionButton } from "../Contact/inputs/ActionButton";

export default function TitleScreen() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <ActionButton buttonType="delete" onClick={() => navigate("/home")} />
    </div>
  );
}
