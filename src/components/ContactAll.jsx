import { Flex } from "@chakra-ui/react"
import { colors } from "../lib/colors"
import ContactInfo from "./ContactInfo"
import FormContact from "./FormContact"

const ContactAll = () => {
    return (
        <Flex
            direction={{ base: "column", lg: "row" }}
            maxW="1200px"
            mx="auto"
            height={{ base: "auto", lg: "85vh" }}
            px={{ base: 4, md: 8, lg: 12 }}
            py={{ base: 6, md: 8, lg: 10 }}
            gap={{ base: 8, lg: 12 }}
            align="stretch"
        >
            <ContactInfo/>
            <FormContact/>
        </Flex>
    )
}

export default ContactAll