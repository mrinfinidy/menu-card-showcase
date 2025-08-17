'use client'

import { useRouter } from "next/navigation";
import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack
} from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger
} from "@/components/ui/menu";
import { ColorModeButton } from "@/components/ui/color-mode";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./logo";

const Navbar = () => {
  const router = useRouter();

  return (
    <Box
      as="nav"
      w="100%"
      zIndex={1}
      color={"orangeFg"}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        flexWrap="wrap"
        alignItems="center"
        justifyItems="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'} onClick={() => router.push('/')}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          gap={5}
        >
          <NextLink href="/food" onClick={() => router.push('/food')}>
            Food
          </NextLink>
          <NextLink href="/drinks" onClick={() => router.push('/drinks')}>
            Drinks
          </NextLink>
        </Stack>

        <Box ml="auto">
          <ColorModeButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <MenuRoot>
              <MenuTrigger>
                <Icon as={RxHamburgerMenu} w={6} h={6} />
              </MenuTrigger>
              <MenuContent>
                <NextLink href="/food" onClick={() => router.push('/food')}>
                  <MenuItem value="Food" _focus={{ boxShadow: "none" }}>Food</MenuItem>
                </NextLink>
                <NextLink href="/drinks" onClick={() => router.push('/drinks')}>
                  <MenuItem value="Drinks" _focus={{ boxShadow: "none" }}>Drinks</MenuItem>
                </NextLink>
              </MenuContent>
            </MenuRoot>
          </Box>
        </Box>

      </Container>
    </Box>

  )
}

export default Navbar;
