import { Flex, Heading } from "@chakra-ui/react"
import { colors } from "../lib/colors"

const HeaderLayer_Text = (props) => {
    let mObjParams = props;

    return (
        <Flex
            backgroundImage={mObjParams.src}
            backgroundSize="cover"
            backgroundPosition="center"
            height={{ base: "60vh", md: "70vh", lg: "500px", xl: "600px" }}
            justifyContent="center"
            alignItems="center"
            px={{ base: 4, md: 8, lg: 16, xl: 32 }}
            py={{ base: 4, md: 6, lg: 8 }}
            textAlign="center"
        >
            <Heading
                color={colors.light}
                as="h1"
                size={{ base: "xl", md: "2xl", lg: "3xl", xl: "4xl" }}
                lineHeight={{ base: "1.2", md: "1.1" }}
                maxW="1200px"
            >{mObjParams.message}</Heading>
        </Flex>
    )
}

export default HeaderLayer_Text