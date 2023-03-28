import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";
// import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { React } from "react";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={10}
      padding={4}
      className="container"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023 CodeOfDuty064. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FontAwesomeIcon icon={faLink} size="lg" />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FontAwesomeIcon icon={faDiscord} size="lg" />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FontAwesomeIcon icon={faTelegram} size="lg" />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
