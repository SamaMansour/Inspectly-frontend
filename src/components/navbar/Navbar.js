import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box bg="teal.400" px={4} py={2} color="white">
      <Flex alignItems="center">
        <Link href="/" fontWeight="bold" fontSize="lg">
          Inspectly
        </Link>
        <Spacer />
        <Link href="/about" mx={2}>
          About
        </Link>
        <Link href="/contact" mx={2}>
          Contact
        </Link>
        <Button colorScheme="teal" variant="ghost" mx={2}>
          Login
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
