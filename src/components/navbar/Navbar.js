import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Spacer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

function Navbar() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  const openSignup = () => setSignupOpen(true);
  const closeSignup = () => setSignupOpen(false);

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
        <Button colorScheme="teal" variant="ghost" mx={2} onClick={openLogin}>
          Login
        </Button>
        <Button colorScheme="teal" variant="ghost" mx={2} onClick={openSignup}>
          Signup
        </Button>
      </Flex>

      {/* Login Modal */}
      <Modal isOpen={isLoginOpen} onClose={closeLogin}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Username</FormLabel>
              <Input placeholder="Username" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" type="password" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeLogin}>
              Login
            </Button>
            <Button variant="ghost" onClick={closeLogin}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Signup Modal */}
      <Modal isOpen={isSignupOpen} onClose={closeSignup}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Signup</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Username</FormLabel>
              <Input placeholder="Username" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" type="email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" type="password" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeSignup}>
              Signup
            </Button>
            <Button variant="ghost" onClick={closeSignup}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Navbar;
