import { Box, Flex, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="teal.400" px={4} py={2} color="white" mt={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Link href="/" fontWeight="bold" mx={2}>
            Home
          </Link>
          <Link href="/about" mx={2}>
            About
          </Link>
          <Link href="/contact" mx={2}>
            Contact
          </Link>
          <Link href="/privacy" mx={2}>
            Privacy Policy
          </Link>
        </Flex>
        <Text>&copy; {new Date().getFullYear()} Inspectly</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
