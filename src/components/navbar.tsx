'use client'

import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/react";

type NavbarProps = {
  path: string;
};

const Navbar = () => {
  const router = useRouter();

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      zIndex={1}
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
            Logo
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NextLink href="/food" onClick={() => router.push('/food')}>
            Food
          </NextLink>
          <NextLink href="/drinks">
            Drinks
          </NextLink>
        </Stack>

      </Container>
    </Box>

  )
}

export default Navbar;
