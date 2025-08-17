import { Container, Stack } from "@chakra-ui/react";
import MenuLayout from "@/lib/menuLayout";
import TitleLayout from "@/lib/titleLayout";
import MenuItem from "@/components/menuItem";
import beer from "@/menuData/drinks/beer";
import redWine from "@/menuData/drinks/redwine";
import water from "@/menuData/drinks/water";
import coke from "@/menuData/drinks/coke";
import cappuccino from "@/menuData/drinks/cappuccino";

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
            <MenuItem name={coke.name} description={coke.description} price={coke.price} imageSrc={coke.imageSrc} />
            <MenuItem name={cappuccino.name} description={cappuccino.description} price={cappuccino.price} imageSrc={cappuccino.imageSrc} />
          </Stack>
        </Stack>
      </MenuLayout>
    </Container>
  )
}

export default Drinks;
