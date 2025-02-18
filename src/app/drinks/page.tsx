import { Container } from "@chakra-ui/react";
import MenuLayout from "@/lib/menuLayout";
import TitleLayout from "@/lib/titleLayout";

const Food = () => {
 return (
    <Container>
      <MenuLayout>
        <TitleLayout>
          Drinks
        </TitleLayout>
      </MenuLayout>
    </Container>
  )
}

export default Food;
