import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import {
  ChakraProvider,
  Box,
  Textarea,
  Button,
} from "@chakra-ui/react";

function App() {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleReview = async () => {
    try {
      const response = await fetch("http://localhost:7860/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [code] }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setFeedback(data["data"][0]);
    } catch (error) {
      console.error("There was an error fetching the review:", error);
      setFeedback("Error fetching review. Please try again.");
    }
  };

  return (
    <ChakraProvider>
      <Navbar />
      <Box p={4} bg="gray.100" minHeight="100vh">
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your code here..."
          size="lg"
          resize="vertical"
          borderRadius="md"
          borderColor="teal.400"
          focusBorderColor="teal.600"
          boxShadow="md"
          _hover={{ borderColor: "teal.500" }}
          _focus={{ boxShadow: "outline" }}
          p={4}
          mb={4}
        />
        <Button colorScheme="teal" onClick={handleReview}>Review Code</Button>
        <Box mt={4}>
          {feedback}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
