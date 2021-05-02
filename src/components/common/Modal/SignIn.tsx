import React from 'react';
import {
    Box,
    CSSReset,
    DarkMode,
    Divider,
    Flex,
    FormControl,
    Heading,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from "@chakra-ui/react";

function SignIn() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}>Trigger modal</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Flex
          position="absolute"
          left={0}
          right={0}
          top={0}
          bottom={0}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          background={`linear-gradient(135deg, ${gray["700"]}, ${gray["900"]})`}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            color="gray.200"
            bg="gray.800"
            size={`${badgeRadius * 2}em`}
            borderRadius="50%"
            mb={`-${badgeRadius}em`}
            shadow="sm"
            zIndex="docked"
          >
            <Icon
              name="usaf"
              size={`${badgeRadius + 1}em`}
              mt={`${badgeRadius / 6}em`}
            />
          </Flex>
          <Box
            w="sm"
            p={4}
            pt={`${badgeRadius + 1}em`}
            color="gray.100"
            bg="gray.700"
            borderRadius="md"
            shadow="lg"
          >
            <Stack spacing={4}>
              <Heading
                as="h1"
                textAlign="center"
                textTransform="uppercase"
                letterSpacing={2}
              >
                AppName
              </Heading>
              <Heading
                as="h2"
                color="gray.300"
                fontSize="lg"
                textAlign="center"
              >
                Subtitle Text
              </Heading>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <InputGroup>
                      <InputLeftElement>
                        <Icon name="account" />
                      </InputLeftElement>
                      <Input
                        ref={usernameRef}
                        id="fname"
                        placeholder="Username"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <InputGroup>
                      <InputLeftElement>
                        <Icon name="lock" />
                      </InputLeftElement>
                      <Input
                        id="pass"
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                      />
                      <InputRightElement>
                        <IconButton
                          icon={showPass ? "hide" : "show"}
                          variant="ghost"
                          size="sm"
                          onClick={handleToggle}
                          title={`${showPass ? "Hide" : "Show"} Password`}
                        />
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Divider />
                  <Button variantColor="blue" type="submit" shadow="md">
                    Login
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Flex>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
export default SignIn;