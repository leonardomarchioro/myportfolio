import WhatsApp from "../../../assets/whatsapp.png";
import Linkedin from "../../../assets/linkedin.png";
import GitHub from "../../../assets/github.png";

import Image from "next/image";

import { Navbar, Switch } from "@nextui-org/react";
import { CollapseContent, Figure, NavBarRoot, Navigate, SLink } from "./styles";
import { useTheme } from "../../../styles/theme/themeProvider";

import { HiSun, HiMoon } from "react-icons/hi";

const MobileHeader: React.FC = () => {
  const { handleTheme } = useTheme();

  return (
    <NavBarRoot
      className="Mobile"
      isBordered
      variant="sticky"
      disableShadow
      aria-disabled
    >
      <Navbar.Toggle />
      <Switch onChange={handleTheme} iconOn={<HiMoon />} iconOff={<HiSun />} />
      <CollapseContent>
        <Navigate>
          <SLink
            href="https://api.whatsapp.com/send/?phone=5547996797620&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <>
              <Figure>
                <Image src={WhatsApp} alt="WhatsApp" />
              </Figure>
              WhatsApp
            </>
          </SLink>
        </Navigate>
        <Navigate>
          <SLink
            href="https://www.linkedin.com/in/leonardo-marchioro/"
            target="_blank"
          >
            <>
              <Figure>
                <Image src={Linkedin} alt="Linkedin" />
              </Figure>
              LinkedIn
            </>
          </SLink>
        </Navigate>
        <Navigate>
          <SLink href="https://github.com/leonardomarchioro" target="_blank">
            <>
              <Figure>
                <Image src={GitHub} alt="GitHub" />
              </Figure>
              GitHub
            </>
          </SLink>
        </Navigate>
      </CollapseContent>
    </NavBarRoot>
  );
};

export default MobileHeader;
