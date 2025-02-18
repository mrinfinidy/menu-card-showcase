import { Box, Flex } from '@chakra-ui/react'


type MenuLayoutProps = {
  children: React.ReactNode
}

const MenuLayout = ({ children }: MenuLayoutProps) => (
  <Box
    maxW="container.xl"
    borderRadius="lg"
    p={3}
    mb={6}
    alignItems="center"
  >
    <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        h="100%"
    >
      <Flex direction="row" mt="2">
        { children }
      </Flex>
    </Flex>
  </Box>
);

export default MenuLayout;
