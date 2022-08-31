import DesktopHeader from "./Desktop";
import MobileHeader from "./Mobile";
import { HeaderContainer } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer id="TopSection">
      <DesktopHeader />
      <MobileHeader />
    </HeaderContainer>
  );
};

export default Header;
