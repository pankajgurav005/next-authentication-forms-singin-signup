import React, { createContext, useContext, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import Signin from "@/app/siginin/signin";
import SignUp from "@/app/siginin/signup";

const MyContext = createContext();

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const openModal = () => {
    // console.log(' ===== CLICKED ======== ');
    setIsModalOpen(true);
  }

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  }

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="w-full h-20 bg-blue-300 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-white ">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div className="hidden md:block">
                <Button openModal={openModal} innerText={'Sign In'}/>
              </div>
              <div className="hidden md:block">
                <Button openModal={openSignupModal} innerText={'Sign Up'} />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <MyContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        <div style={isModalOpen ? Styles.showen : Styles.hidden}>
          <Signin closeModal={closeModal}/>
        </div>
      </MyContext.Provider>  

        <div style={isSignupModalOpen ? Styles.showen : Styles.hidden}>
          <SignUp closeModal={closeSignupModal}/>
        </div>
    </>
  );
};

const Styles = {
  hidden: {
    display: 'none',
  },
  showen: {
    display: 'block',
  }
}

export {MyContext, Navbar};