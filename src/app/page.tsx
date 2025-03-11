import { Box, Container, Flex, Text } from "@chakra-ui/react";
import MenuLayout from "@/lib/menuLayout";
import TitleLayout from "@/lib/titleLayout";

const Home = () => {
  return (
    <Container>
      <MenuLayout>
        <TitleLayout>
          Welcome to my restaurant
        </TitleLayout>
      </MenuLayout>
    </Container>
  );
}

export default Home;
