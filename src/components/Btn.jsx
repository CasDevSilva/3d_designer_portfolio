import { Button } from "@chakra-ui/react"
import { colors } from "../lib/colors"

const Btn = (props) => {
    const mObjParams = props;
    return (
        <Button
            onClick={()=>mObjParams.action()}
            size={{ base: "md", md: "lg" }}
            px={{ base: 6, md: 8 }}
            py={{ base: 3, md: 4 }}
            bg={colors.primary}
            color={colors.light}
            border={`2px solid ${colors.ascent}`}
            borderRadius={{ base: "md", md: "lg" }}
            fontWeight="bold"
            fontSize={{ base: "sm", md: "md" }}
            boxShadow="sm"
            cursor="pointer"
            transition={{ base: "none", md: "all 0.3s ease-in-out" }}
            _hover={{
                base: {},
                md: {
                    bg: colors.ascent,
                    color: colors.light,
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                    borderColor: colors.secondary
                }
            }}
            _active={{
                base: {},
                md: {
                    transform: "translateY(0px)",
                    boxShadow: "md"
                }
            }}
            _focus={{
                boxShadow: `0 0 0 3px ${colors.secondary}40`
            }}
            width={{ base: "100%", md: "auto" }}
            minW={{ md: "140px" }}
        >
            {mObjParams.message}
        </Button>
    )
}

export default Btn