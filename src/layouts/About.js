import React from "react";
import { Box, Flex, Heading, Text, Spacer, Link } from "@chakra-ui/react";

function About() {
  return (
    <Box bg="gray.100" minHeight="100vh" px={8} py={6}>
      <Flex flexDirection="column" maxWidth="800px" margin="0 auto">
        <Heading mb={6}>About Inspectly</Heading>
        <Text fontSize="lg" mb={4}>
          Inspectly is a platform designed to revolutionize the way we handle
          inspections. With our innovative technology and user-friendly
          interfaces, inspecting has never been easier.
        </Text>
        <Text fontSize="lg" mb={4}>
          We pride ourselves on the accuracy and efficiency of our software.
          Whether you're a small business or a large corporation, Inspectly can
          cater to all your inspection needs.
        </Text>
        <Text fontSize="lg" mb={4}>
          Our team is made up of dedicated professionals who are passionate
          about making the inspection process seamless and hassle-free.
        </Text>

        <Spacer />

        <Box mt={8}>
          <Heading size="md" mb={4}>
            Contact Us
          </Heading>
          <Text>Have questions? Reach out to us:</Text>
          <Link href="mailto:support@inspectly.com" color="teal.500" mt={2}>
            support@inspectly.com
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
