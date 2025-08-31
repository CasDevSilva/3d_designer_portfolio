import { Box, Image, SimpleGrid } from "@chakra-ui/react";

const Gallery = (props) => {
    let { images } = props;

    return (
        <Box
            maxW="1200px"
            mx="auto"
            px={{ base: 4, md: 8, lg: 12 }}
            py={{ base: 6, md: 8, lg: 10 }}
        >
            <SimpleGrid
                columns={{ base: 2, md: 3, lg: 5 }}
                spacing={{ base: 2, md: 3, lg: 4 }}
            >
                {
                    images.map((mRowImage, index) =>
                        <Box
                            key={index}
                            position="relative"
                            aspectRatio="1"
                            overflow="hidden"
                            borderRadius={{ base: "8px", md: "12px" }}
                            cursor={{ base: "default", md: "pointer" }}
                            transition={{ base: "none", md: "all 0.3s ease-in-out" }}
                            _hover={{
                                base: {},
                                md: {
                                    transform: "scale(1.05)",
                                    boxShadow: "lg"
                                }
                            }}
                        >
                            <Image
                                src={mRowImage}
                                alt={`Gallery image ${index + 1}`}
                                width="100%"
                                height="100%"
                                objectFit="cover"
                                objectPosition="center"
                                transition={{ base: "none", md: "transform 0.3s ease-in-out" }}
                            />
                        </Box>
                    )
                }
            </SimpleGrid>
        </Box>
    )
}

export default Gallery