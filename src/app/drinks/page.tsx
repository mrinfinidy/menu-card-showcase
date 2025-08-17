import { Container, Stack } from "@chakra-ui/react";
import MenuLayout from "@/lib/menuLayout";
import TitleLayout from "@/lib/titleLayout";
import MenuItem from "@/components/menuItem";
import beer from "@/menuData/drinks/beer";
import redWine from "@/menuData/drinks/redwine";
import water from "@/menuData/drinks/water";

const Drinks = () => {
  return (
    <Container>
      <MenuLayout>
        <Stack gap="4" direction="column">
          <TitleLayout>
            Drinks
          </TitleLayout>
          <Stack gap="4" direction="row" wrap="wrap">
            <MenuItem name={beer.name} description={beer.description} price={beer.price} imageSrc={beer.imageSrc} />
            <MenuItem name={redWine.name} description={redWine.description} price={redWine.price} imageSrc={redWine.imageSrc} />
            <MenuItem name={water.name} description={water.description} price={water.price} imageSrc={water.imageSrc} />
          </Stack>
        </Stack>
      </MenuLayout>
    </Container>
  )
}

export default Drinks;
