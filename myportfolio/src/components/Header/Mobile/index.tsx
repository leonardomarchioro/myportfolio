import WhatsApp from "../../../assets/whatsapp.png";
import Linkedin from "../../../assets/linkedin.png";
import GitHub from "../../../assets/github.png";

import Image from "next/image";

import { Navbar, Switch } from "@nextui-org/react";
import {
  CollapseContent,
  ContainerLinks,
  NavBarRoot,
  Navigate,
} from "./styles";
import { useTheme } from "../../../styles/theme/themeProvider";

import { HiSun, HiMoon } from "react-icons/hi";
import Link from "next/link";

const MobileHeader: React.FC = () => {
  const { handleTheme } = useTheme();

  const scrollTo = (position: number) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <NavBarRoot className="Mobile" isBordered variant="sticky">
      <Navbar.Toggle />
      <Switch onChange={handleTheme} iconOn={<HiMoon />} iconOff={<HiSun />} />
      <CollapseContent>
        <Navigate onClick={() => scrollTo(10)}>Tecnologias</Navigate>
        <Navigate onClick={() => scrollTo(550)}>Projetos</Navigate>
        <Navigate onClick={() => scrollTo(10000)}>Contato</Navigate>
        <ContainerLinks>
          <div>
            <Link
              href="https://api.whatsapp.com/send/?phone=5547996797620&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <Image src={WhatsApp} alt="WhatsApp" />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/in/leonardo-marchioro/"
              target="_blank"
            >
              <Image src={Linkedin} alt="Linkedin" />
            </Link>
          </div>
          <div>
            <Link href="https://github.com/leonardomarchioro" target="_blank">
              <Image src={GitHub} alt="GitHub" />
            </Link>
          </div>
        </ContainerLinks>
      </CollapseContent>
    </NavBarRoot>
  );
};

export default MobileHeader;
