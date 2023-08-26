import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  ChakraProvider,
  Box,
  Textarea,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./layouts/About";
import ContactUs from "./layouts/Contact";

function CodeReview() {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState("");
  const [records, setRecords] = useState([]);

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
      const newFeedback = data["data"][0];
      setFeedback(newFeedback);
      setRecords([{ code, feedback: newFeedback }, ...records]);
    } catch (error) {
      console.error("There was an error fetching the review:", error);
      setFeedback("Error fetching review. Please try again.");
    }
  };

  return (
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
      <Button colorScheme="teal" onClick={handleReview}>
        Review Code
      </Button>
      <Box mt={4}>{feedback}</Box>
      <Table variant="simple" mt={6}>
        <Thead>
          <Tr>
            <Th>Code</Th>
            <Th>Feedback</Th>
          </Tr>
        </Thead>
        <Tbody>
          {records.map((record, idx) => (
            <Tr key={idx}>
              <Td>{record.code}</Td>
              <Td>{record.feedback}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CodeReview />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
