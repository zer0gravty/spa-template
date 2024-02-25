import { useNavigate } from "react-router-dom";
import { Button as ReactAriaButton } from "react-aria-components";
import { FaHome } from "react-icons/fa";

function HomeButton() {
  const navigate = useNavigate();
  
    return (
    <ReactAriaButton
      aria-label="home"
      className="rounded-full p-5 color-white bg-red-600 hover:bg-red-400 z-10 fixed left-20 top-10"
      onPress={() => navigate('/')}
    >
      <FaHome size={40} />
    </ReactAriaButton>
  );
}

export default HomeButton;
