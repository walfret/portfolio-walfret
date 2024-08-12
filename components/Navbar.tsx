import { FC, useState } from "react";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { HiTranslate } from "react-icons/hi";

import ThemeSwitcher from "./ThemeSwitcher";

interface NavbarProps {
  translate: any;
  changeLanguage: (leng: string) => void;
}

const Navbar: FC<NavbarProps> = ({ translate, changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <Box p={4} color="white">
      <Flex as="nav" align="center" justify="space-between" wrap="wrap">
        {/* Logo or Title */}
        <Box fontSize="lg" fontWeight="bold">
          <Link href="/">
            <h1 className="text-2xl text-colorTextPrimary dark:text-colorTextPrimaryDark">
              WR
            </h1>
          </Link>
        </Box>

        {/* Buttons for Mobile */}
        {/* Hamburger Icon for Mobile */}
        <div className="flex items-center md:hidden">
          <Menu>
            <MenuButton as={Button} className="mr-2">
              <HiTranslate size={18} />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => changeLanguage("en")}>
                <p className="text-colorTextPrimary dark:text-colorTextPrimaryDark">
                  English
                </p>
              </MenuItem>
              <MenuItem onClick={() => changeLanguage("es")}>
                <p className="text-colorTextPrimary dark:text-colorTextPrimaryDark">
                  Español
                </p>
              </MenuItem>
            </MenuList>
          </Menu>
          <ThemeSwitcher />
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
        </div>

        {/* Desktop Menu */}
        <Flex display={{ base: "none", md: "flex" }} align="center">
          <Button variant="link" mx={4}>
            <Link href="/#home">{translate("menu.home")}</Link>
          </Button>
          <Button variant="link" mx={4}>
            <Link href="/#about">{translate("menu.aboutMe")}</Link>
          </Button>
          <Button variant="link" mx={4}>
            <Link href="/#projects">{translate("menu.projects")}</Link>
          </Button>
          <Button variant="link" mx={4}>
            <Link href="/#contact">{translate("menu.contact")}</Link>
          </Button>
          <Menu>
            <MenuButton as={Button} className="mr-2">
              <HiTranslate size={18} />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => changeLanguage("en")}>
                <p className="text-colorTextPrimary dark:text-colorTextPrimaryDark">
                  English
                </p>
              </MenuItem>
              <MenuItem onClick={() => changeLanguage("es")}>
                <p className="text-colorTextPrimary dark:text-colorTextPrimaryDark">
                  Español
                </p>
              </MenuItem>
            </MenuList>
          </Menu>
          <ThemeSwitcher />
        </Flex>

        {/* Drawer Menu for Mobile */}
        <Drawer isOpen={isOpen} placement="right" onClose={toggleDrawer}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton size={"10px"} className="m-4" />
            <VStack align="start" p={5} spacing={4} className="mt-8">
              <Button variant="link" onClick={toggleDrawer}>
                <Link href="/#home" className="text-[20px]">
                  {translate("menu.home")}
                </Link>
              </Button>
              <Button variant="link" onClick={toggleDrawer}>
                <Link href="/#about" className="text-[20px]">
                  {translate("menu.aboutMe")}
                </Link>
              </Button>
              <Button variant="link" onClick={toggleDrawer}>
                <Link href="/#projects" className="text-[20px]">
                  {translate("menu.projects")}
                </Link>
              </Button>
              <Button variant="link" onClick={toggleDrawer}>
                <Link href="/#contact" className="text-[20px]">
                  {translate("menu.contact")}
                </Link>
              </Button>
            </VStack>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Divider className="mt-4" />
    </Box>
  );
};

export default Navbar;
