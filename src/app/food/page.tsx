"use client";

import { Container, Stack } from "@chakra-ui/react";
import MenuLayout from "@/lib/menuLayout";
import TitleLayout from "@/lib/titleLayout";
import MenuItem from "@/components/menuItem";
import pizza from "@/menuData/food/pizza";
import pasta from "@/menuData/food/pasta";
import { useColorMode } from "@/components/ui/color-mode";

const Food = () => {
  const colorMode = useColorMode();

  return (
    <Container>
      <MenuLayout>
        <Stack gap="4" direction="column">
          <TitleLayout>
            Food
          </TitleLayout>
          <Stack gap="4" direction="row" wrap="wrap">
            <MenuItem name={pizza.name} description={pizza.description} price={pizza.price} imageSrc={pizza.imageSrc} />
            <MenuItem name={pasta.name} description={pasta.description} price={pasta.price} imageSrc={pasta.imageSrc} />
          </Stack>
        </Stack>
      </MenuLayout>
    </Container>
  )
}

export default Food;
