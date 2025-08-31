import { Box } from "@chakra-ui/react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ContactAll from "../components/ContactAll"

const Contact = () => {
  return (
    <Box
      overflowY={{ base: "auto", lg: "hidden" }}
      height={{ base: "auto", lg: "100vh" }}
    >
      <Header/>
      <ContactAll/>
      <Footer/>
    </Box>
  )
}

export default Contact