// components/Navbar.js

import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Button,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";

import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <Box p={4} color="white">
      <Flex as="nav" align="center" justify="space-between" wrap="wrap">
        {/* Logo or Title */}
        <Box fontSize="lg" fontWeight="bold">
          <Link href="/">
            <h1 className="text-colorTextPrimary dark:text-colorTextPrimaryDark">
              Walfret Rodriguez
            </h1>
          </Link>
        </Box>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={
            isOpen ? (
              <></>
            ) : (
              <IoMenu size={30} className="text-colorTitles w-full" />
            )
          }
          onClick={toggleDrawer}
          variant="light"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        />

        {/* Desktop Menu */}
        <Flex display={{ base: "none", md: "flex" }} align="center">
          <Button variant="link" mx={4}>
            <Link href="/">Inicio</Link>
          </Button>
          <Button variant="link" mx={4}>
            <Link href="/about">Sobre mí</Link>
          </Button>
          <Button variant="link" mx={4}>
            <Link href="/projects">Proyectos</Link>
          </Button>
          <Button variant="link" mx={4}>
            <Link href="/contact">Contacto</Link>
          </Button>
          <ThemeSwitcher />
        </Flex>

        {/* Drawer Menu for Mobile */}
        <Drawer isOpen={isOpen} placement="right" onClose={toggleDrawer}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <VStack align="start" p={5} spacing={4}>
              <Button variant="link" onClick={toggleDrawer}>
                <Link href="/">Inicio</Link>
              </Button>
              <Button variant="link" onClick={toggleDrawer}>
                <Link href="/about">Sobre mí</Link>
              </Button>
              <Button variant="link" onClick={toggleDrawer}>
                <Link href="/projects">Proyectos</Link>
              </Button>
              <Button variant="link" onClick={toggleDrawer}>
                <Link href="/contact">Contacto</Link>
              </Button>
              <ThemeSwitcher />
            </VStack>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
