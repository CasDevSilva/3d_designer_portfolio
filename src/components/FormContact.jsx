import { Box, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { colors } from "../lib/colors"
import Btn from "./Btn"

async function sendMessage(pStrSubject, pStrName, pStrMail, pStrMessage) {
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            access_key: '60d08ba2-8561-438d-981e-e13ac7550243',
            subject: pStrSubject,
            name: pStrName,
            email: pStrMail,
            message: pStrMessage,
            to:"sca.dev.silva@gmail.com"
        })
    });

    return response.ok;
}

const FormContact = () => {
    // Estados para cada campo del formulario
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Función para manejar el envío
    const handleSendMessage = async () => {
        const success = await sendMessage(subject, name, email, message);
        if (success) {
            setName("");
            setSubject("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <Box
            width={{ base: "100%", lg: "50%" }}
            px={{ base: 6, md: 8 }}
            py={{ base: 8, md: 10 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
        >
            <Heading
                as="h2"
                size={{ base: "lg", md: "xl" }}
                color={colors.dark}
                mb={{ base: 6, md: 8 }}
                textAlign={{ base: "center", lg: "left" }}
            >Contactar</Heading>

            <VStack spacing={6} align="stretch">
                <FormControl>
                    <FormLabel
                        color={colors.dark}
                        fontWeight="medium"
                        fontSize={{ base: "sm", md: "md" }}
                        mb={2}
                    >
                        Nombre
                    </FormLabel>
                    <Input
                        type="text"
                        placeholder="Tu nombre completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        size={{ base: "md", md: "lg" }}
                        bg="white"
                        border={`2px solid ${colors.ascent}`}
                        borderRadius="md"
                        transition={{ base: "none", md: "all 0.3s ease-in-out" }}
                        _hover={{
                            base: {},
                            md: {
                                borderColor: colors.secondary,
                                boxShadow: "md"
                            }
                        }}
                        _focus={{
                            borderColor: colors.primary,
                            boxShadow: `0 0 0 1px ${colors.primary}`
                        }}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel
                        color={colors.dark}
                        fontWeight="medium"
                        fontSize={{ base: "sm", md: "md" }}
                        mb={2}
                    >
                        Asunto
                    </FormLabel>
                    <Input
                        type="text"
                        placeholder="Asunto del correo"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        size={{ base: "md", md: "lg" }}
                        bg="white"
                        border={`2px solid ${colors.ascent}`}
                        borderRadius="md"
                        transition={{ base: "none", md: "all 0.3s ease-in-out" }}
                        _hover={{
                            base: {},
                            md: {
                                borderColor: colors.secondary,
                                boxShadow: "md"
                            }
                        }}
                        _focus={{
                            borderColor: colors.primary,
                            boxShadow: `0 0 0 1px ${colors.primary}`
                        }}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel
                        color={colors.dark}
                        fontWeight="medium"
                        fontSize={{ base: "sm", md: "md" }}
                        mb={2}
                    >
                        Email
                    </FormLabel>
                    <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size={{ base: "md", md: "lg" }}
                        bg="white"
                        border={`2px solid ${colors.ascent}`}
                        borderRadius="md"
                        transition={{ base: "none", md: "all 0.3s ease-in-out" }}
                        _hover={{
                            base: {},
                            md: {
                                borderColor: colors.secondary,
                                boxShadow: "md"
                            }
                        }}
                        _focus={{
                            borderColor: colors.primary,
                            boxShadow: `0 0 0 1px ${colors.primary}`
                        }}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel
                        color={colors.dark}
                        fontWeight="medium"
                        fontSize={{ base: "sm", md: "md" }}
                        mb={2}
                    >
                        Mensaje
                    </FormLabel>
                    <Textarea
                        placeholder="Escribe tu mensaje aquí..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={6}
                        resize="vertical"
                        bg="white"
                        border={`2px solid ${colors.ascent}`}
                        borderRadius="md"
                        transition={{ base: "none", md: "all 0.3s ease-in-out" }}
                        _hover={{
                            base: {},
                            md: {
                                borderColor: colors.secondary,
                                boxShadow: "md"
                            }
                        }}
                        _focus={{
                            borderColor: colors.primary,
                            boxShadow: `0 0 0 1px ${colors.primary}`
                        }}
                    />
                </FormControl>

                <Box pt={2}>
                    <Btn
                        message="Enviar mensaje"
                        action={handleSendMessage}
                    />
                </Box>
            </VStack>
        </Box>
    )
}

export default FormContact