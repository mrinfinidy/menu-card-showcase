import { Container, Stack } from "@chakra-ui/react";
import MenuLayout from "@/lib/menuLayout";
import TitleLayout from "@/lib/titleLayout";
import Image from "next/image";
import TextLayout from "@/lib/textLayout";

const Home = () => {
  const sperlongaImg = "/images/restaurant/sperlonga.jpg";
  const siciliaImg = "/images/restaurant/sicilia.jpg";

  return (
    <Container>
      <MenuLayout>
        <TitleLayout>
          Welcome to my restaurant
        </TitleLayout>
        <Stack gap="4" direction="column">
          <Image src={sperlongaImg} alt="Sperlonga" width={1920} height={1271} style={{ borderRadius: 8 }} />
          <TextLayout>
            Enjoy delicious Italian food with a stunning view of the Mediterranean Sea.
          </TextLayout>
          <Image src={siciliaImg} alt="Sicilia" width={1920} height={1271} style={{ borderRadius: 8 }} />
        </Stack>
      </MenuLayout>
    </Container>
  );
}

export default Home;
