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
import axios from "axios";
import { useFormik } from "formik";


function Navbar() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // to store the logged-in user

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  const openSignup = () => setSignupOpen(true);
  const closeSignup = () => setSignupOpen(false);

  function handleLogin(username, password) {
   axios
     .post("http://localhost:8000/login/", { username, password })
     .then((response) => {
       if (response.data.status === "Login successful!") {
         setCurrentUser(username);
       }
      setLoginOpen(false);
     });
  }

  function handleSignup(username, email, password) {
    axios
      .post("http://localhost:8000/signup/", { username, password })
      .then((response) => {
        setSignupOpen(false);
      });
  }

  const loginFormik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      handleLogin(values.username, values.password);
    },
  });

  const signupFormik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      handleSignup(values.username, values.email, values.password);
    },
  });

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
        {currentUser ? (
          <>
            <Box>Welcome, {currentUser}</Box>
            {/* You can also add a "Logout" button to handle user logout */}
          </>
        ) : (
        <>
        <Button colorScheme="teal" variant="ghost" mx={2} onClick={openLogin}>
          Login
        </Button>
        <Button colorScheme="teal" variant="ghost" mx={2} onClick={openSignup}>
          Signup
        </Button>
        </>
        )}
      </Flex>

      {/* Login Modal */}
      <Modal isOpen={isLoginOpen} onClose={closeLogin}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={loginFormik.handleSubmit}>
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder="Username"
                  name="username"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.username}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.password}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Login
              </Button>
              <Button variant="ghost" onClick={closeLogin}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      {/* Signup Modal */}
      <Modal isOpen={isSignupOpen} onClose={closeSignup}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Signup</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={signupFormik.handleSubmit}>
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder="Username"
                  name="username"
                  onChange={signupFormik.handleChange}
                  value={signupFormik.values.username}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={signupFormik.handleChange}
                  value={signupFormik.values.password}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Signup
              </Button>
              <Button variant="ghost" onClick={closeSignup}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Navbar;
