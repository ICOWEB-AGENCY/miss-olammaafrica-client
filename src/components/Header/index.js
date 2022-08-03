import Link from "next/link";
import React, { useState } from "react";
import {
  Button,
  LoginModal,
  RegistrationModal,
  RegistrationAuthModal,
} from "..";
import styles from "./Index.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'

export const Header = function ({
  title = "Miss Olamma Africa",
  subTitle = "The Biggest Pan-Igbo Beauty Pageant in the World",
}) {
  const router = useRouter();
  console.log(router);
  const [activeTab, setActiveTab] = useState(router.asPath);
  // console.log(activeTab);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);
  const [passModalIsOpen, setPassModalIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

  const SignInSwitch =()=> {
    setLogoutModalIsOpen(true)
    setLoginModalIsOpen(false)
  }

  const SignOutSwitch =()=> {
    setLogoutModalIsOpen(false)
    setLoginModalIsOpen(true)
  }

  const PassSwitch =()=> {
    setPassModalIsOpen(false)
    setLoginModalIsOpen(true)
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <header
      className="hero-image"
      style={{
        paddingTop: 70,
        // backgroundImage:
        //   "radial-gradient(79.24% 270.81% at 35.45% 34.74%, rgba(5, 7, 5, 0.8) 0%, rgba(5, 7, 5, 0.712) 100%)",
        height: "100vh",
      }}
    >
      <div className="overlay" />
      <div
        className="flex ham justify-end"
        style={{
          position: "fixed",
          top: 20,
          width: "100vw",
          right: 20,
          zIndex: 30,
        }}
      >
        <Image
          src="/images/harm.svg"
          width={24}
          height={24}
          onClick={() => onOpen()}
        />
      </div>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}  >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton /> 
 
          <DrawerBody>
            <ul style={{marginTop: "70px"}} className="flex-col justify-end align-end">
              {[
                { title: "Home", link: "/" },
                { title: "Road to the crown", link: "/road-to-crown" },
                { title: "Our Contestant", link: "our-contestants" },
                { title: "Our Story", link: "our-story" },
              ].map((page, idx) => (
                <li key={idx}>
                  <Link href={page.link}>
                    <a
                      style={{
                        padding: 10,
                        display: "inline-block",
                        textTransform: "uppercase",
                      }}
                    >
                      {page.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </DrawerBody>

          <DrawerFooter>
            <div style={{width: "100%"}} >

            <Button
              bg="rgba(188, 137, 36, 1)"
              title="Login"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "12px",
              }}
              onClick={() => {
                setLoginModalIsOpen(true);
                setNavIsOpen(false);
                onClose();
              }}
            />
            <div style={{ marginTop: "10px" }} >

            <Button
              bg="rgba(188, 137, 36, 1)"
              title="Register"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "12px",
              }}
              onClick={() => {
                setLogoutModalIsOpen(true);
                setNavIsOpen(false);
                onClose();
              }}
            /> 
            </div>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* <nav
        style={{
          width: "100vw",
          height: "100%",
          position: "fixed",
          top: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 30,
          display: "flex",
          justifyContent: "flex-end",
        }}
        className={"burger  " + (!navIsOpen && " slide-out")}
      >
        <div
          style={{
            width: "70vw",
            backgroundColor: "#fff",
            height: "100%",
            padding: "30px 0",
          }}
        >
          <div
            className="flex justify-end"
            style={{ width: "100%", paddingRight: 10, marginBottom: 30 }}
          >
            <Image
              src="/images/close.svg"
              width={12}
              height={12}
              onClick={() => setNavIsOpen(false)}
            />
          </div>
          <ul className="flex-col justify-end align-end">
            {[
              { title: "Home", link: "/" },
              { title: "Road to the crown", link: "/road-to-crown" },
              { title: "Our Contestant", link: "our-contestants" },
              { title: "Our Story", link: "our-story" },
            ].map((page, idx) => (
              <li key={idx}>
                <Link href={page.link}>
                  <a
                    style={{
                      padding: 10,
                      display: "inline-block",
                      textTransform: "uppercase",
                    }}
                  >
                    {page.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="flex-col align-end"
            style={{ rowGap: 10, paddingRight: 10, marginTop: 30 }}
          >
            <Button
              bg="rgba(188, 137, 36, 1)"
              title="Login"
              style={{
                width: 100,
                display: "flex",
                justifyContent: "center",
                padding: "12px",
              }}
              onClick={() => {
                setLoginModalIsOpen(true);
                setNavIsOpen(false);
              }}
            />
            <Button
              bg="rgba(188, 137, 36, 1)"
              title="Register"
              style={{
                width: 100,
                display: "flex",
                justifyContent: "center",
                padding: "12px",
              }}
              onClick={() => {
                setLogoutModalIsOpen(true);
                setNavIsOpen(false);
              }}
            />
          </div>
        </div>
      </nav> */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 103,
          position: "relative",
          zIndex: 10,
        }}
      >
        <img style={{width: '60px', marginLeft: "auto", marginRight: "auto"}} src="/images/logo.svg" />
      </div>

      <nav className={styles.mainNavWrapper} style={{ marginTop: '-30px'}} >
        <ul className={styles.mainNav}>
          {[
            { menu: "Home", link: "/" },
            { menu: "Road to the crown", link: "/road-to-crown" },
            { menu: "Contestants", link: "/our-contestants" },
            // { menu: "Gallery", link: "/what-we-have-done" },
            { menu: "Our Story", link: "/our-story" },
            { menu: "Contact us", link: "/reach-out" },
          ].map((menu, idx) => (
            <li key={idx}>
              <Link href={`${menu.link}`}>
                <a
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontFamily: "Circular Std",
                    color:
                      activeTab === menu.link
                        ? "rgba(188, 137, 36, 1)"
                        : "rgba(144, 144, 144, 0.9)",
                  }}
                  onClick={() => setActiveTab(menu.link)}
                >
                  {menu.menu}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ position: "relative", zIndex: 2, height: "60%", display: "flex", flexDirection: "column"}}>
        <h1
          style={{
            color: "rgba(255, 255, 255, 1)",
          }}
          className="main-header">
          {title}
        </h1>
        <h2
          style={{
            fontFamily: "Circular Std",
            textAlign: "center",

            color: "rgba(255, 255, 255, 0.9)",
            paddingBottom: 62.5,
          }}
          className="sub-header"
        >
          {subTitle}
        </h2>
        <div className="auth-nav" style={{marginTop: "auto", marginBottom: "auto"}}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",  
              
              columnGap: 16, 
              padding: "0 20px",
              marginBottom: 40,
            }}
          >
            <Button
              bg="rgba(188, 137, 36, 0.2)"
              style={{ flex: 1 }}
              onClick={() => setLoginModalIsOpen(true)}
            />
            <Button
              bg="rgba(188, 137, 36, 1)"
              title="Register"
              style={{ flex: 1 }}
              onClick={() => setLogoutModalIsOpen(true)}
            />
          </div>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              columnGap: 20,
              paddingBottom: 85,
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                backgroundColor: "rgba(188, 137, 36, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="./images/back-arrow.svg" />
            </div>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                backgroundColor: "rgba(188, 137, 36, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="./images/forward-arrow.svg" />
            </div>
          </div> */}
        </div>
      </div>
      <LoginModal
        modalIsOpen={loginModalIsOpen}
        closeModal={() => setLoginModalIsOpen(false)} 
        end={SignInSwitch}
      />
      <RegistrationModal
        modalIsOpen={logoutModalIsOpen}
        closeModal={() => setLogoutModalIsOpen(false)} 
        end={SignOutSwitch}
        passModalIsOpen={passModalIsOpen}
        setPassModalIsOpen={setPassModalIsOpen}
      />
      <RegistrationAuthModal
        modalIsOpen={passModalIsOpen}
        closeModal={() => setPassModalIsOpen(false)}
        end={PassSwitch}
      />
    </header>
  );
};
