import { Box, Container, Flex, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container>
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
            <Text
              fontSize="2xl"
              fontWeight="bold"
              mb="4"
            >
              Menu Card
            </Text>
          </Flex>
        </Flex>
      </Box>

    </Container>
  );
}

export default Home;
