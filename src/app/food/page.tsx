"use client";

import { Container, Stack } from "@chakra-ui/react";
import MenuLayout from "@/lib/menuLayout";
import TitleLayout from "@/lib/titleLayout";
import MenuItem from "@/components/menuItem";
import pizza from "@/menuData/food/pizza";
import pasta from "@/menuData/food/pasta";
import salad from "@/menuData/food/salad";
import ice from "@/menuData/food/ice";
import fish from "@/menuData/food/fish";

const Food = () => {
  return (
    <Container>
      <MenuLayout>
        <Stack gap="4" direction="column">
          <TitleLayout>
            Food
          </TitleLayout>
          <Stack gap="4" direction="row" wrap="wrap">
            <MenuItem name={salad.name} description={salad.description} price={salad.price} imageSrc={salad.imageSrc} />
            <MenuItem name={pizza.name} description={pizza.description} price={pizza.price} imageSrc={pizza.imageSrc} />
            <MenuItem name={pasta.name} description={pasta.description} price={pasta.price} imageSrc={pasta.imageSrc} />
            <MenuItem name={fish.name} description={fish.description} price={fish.price} imageSrc={fish.imageSrc} />
            <MenuItem name={ice.name} description={ice.description} price={ice.price} imageSrc={ice.imageSrc} />
          </Stack>
        </Stack>
      </MenuLayout>
    </Container>
  )
}

export default Food;
