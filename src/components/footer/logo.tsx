import { Image, Link, Stack, Text } from "@chakra-ui/react";
import { footerColors } from "@/lib/theme";
import { useColorMode, useColorModeValue } from "../ui/color-mode";

const Logo = ()  => {

  return (
    <Link href="/">
      <Stack direction="row">
        <Image height="10" src={`images/footerImg-${useColorMode().colorMode}.png`} alt="Logo" />
        <Text
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
          color={useColorModeValue(footerColors.colorLight, footerColors.colorDark)}
        >
          My Restaurant
        </Text>
      </Stack>
    </Link>
  )

}

export default Logo;
