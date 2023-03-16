import WhatsApp from "../../../assets/whatsapp.png";
import Linkedin from "../../../assets/linkedin.png";
import GitHub from "../../../assets/github.png";

import Image from "next/image";

import { Button, Switch } from "@nextui-org/react";
import { NavContent, ContainerLinks, NavBarRoot, Navigate } from "./styles";
import { useTheme } from "../../../styles/theme/themeProvider";

import { HiSun, HiMoon } from "react-icons/hi";
import Link from "next/link";

import { Link as ToScrool } from "react-scroll";

const DesktopHeader: React.FC = () => {
  const { handleTheme } = useTheme();

  return (
    <NavBarRoot className="Desktop" isBordered variant="sticky">
      <NavContent>
        <Navigate>
          <Button>
            <ToScrool
              to="TechsSection"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Tecnologias
            </ToScrool>
          </Button>
        </Navigate>
        <Navigate>
          <Button>
            <ToScrool
              to="ProjectsSection"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Projetos
            </ToScrool>
          </Button>
        </Navigate>
        <Navigate>
          <Button>
            <ToScrool
              to="ContactSection"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Contato
            </ToScrool>
          </Button>
        </Navigate>
        <ContainerLinks>
          <>
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
          </>
        </ContainerLinks>
      </NavContent>
      <Switch onChange={handleTheme} iconOn={<HiSun />} iconOff={<HiMoon />} />
    </NavBarRoot>
  );
};

export default DesktopHeader;
