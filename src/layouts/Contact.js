import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

function ContactUs() {
  return (
    <Box bg="gray.100" minHeight="100vh" px={8} py={6}>
      <Flex flexDirection="column" maxWidth="800px" margin="0 auto">
        <Heading mb={6}>Contact Us</Heading>
        <Text fontSize="lg" mb={4}>
          Have questions, feedback, or just want to chat? Drop us a message and
          we'll get back to you as soon as possible.
        </Text>

        <Box bg="white" p={6} borderRadius="md" shadow="md" mt={4}>
          <form>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="John Doe" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="johndoe@example.com" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Message</FormLabel>
              <Textarea rows={6} placeholder="Write your message..." />
            </FormControl>
            <Button colorScheme="teal" type="submit">
              Submit
            </Button>
          </form>
        </Box>

        <Box mt={8}>
          <Heading size="md" mb={4}>
            Other Ways to Reach Us
          </Heading>
          <Text>
            Email:{" "}
            <Link href="mailto:support@inspectly.com" color="teal.500">
              support@inspectly.com
            </Link>
          </Text>
          <Text mt={2}>
            Phone: <Link color="teal.500">+1-234-567-8900</Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default ContactUs;
