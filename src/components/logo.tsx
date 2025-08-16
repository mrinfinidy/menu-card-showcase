import Link from "next/link";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useColorMode } from "@/components/ui/color-mode";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
      transform: rotate(20deg);
  }
`

const Logo = () => {
  console.log("colorMode:", useColorMode().colorMode)
  const navbarImg = `/images/navbarImg-${useColorMode().colorMode}.png`;

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image src={navbarImg} alt="Logo" width={20} height={20} />
        <Text
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          My Restaurant
        </Text>
      </LogoBox>
    </Link>
  );
}

export default Logo;
