import DesktopHeader from "./Desktop";
import MobileHeader from "./Mobile";
import { HeaderContainer } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <DesktopHeader />
      <MobileHeader />
    </HeaderContainer>
  );
};

export default Header;
