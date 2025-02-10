"use client"

import Icons from "@/components/icons"
import NavBar from "./NavBar"
import SideBar from "./SideBar"
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

// STILL WORK IN PROGRESS

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { signOut } = useClerk();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const handleSignIn = () => {
    localStorage.setItem("intendedDestination", location.pathname);
    navigate("/login");
  };

  const handleSignOut = () => {
    signOut(() => navigate("/"));
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 mx-auto px-4 py-4 flex content-center items-center justify-between bg-black text-white font-inter shadow-lg inset-shadow-stone-950">
        <div className="flex items-center gap-4">
          <button id="sidebarToggle" className="block lg:hidden" onClick={toggleSidebar}>
            <Icons.AlignJustify size="30">
            </Icons.AlignJustify>
          </button>

          <Link to="/">
            <img src="../assets/Frame 50126812.png" alt="Frags Logo" className=""/>
          </Link>
        </div>
        <NavBar components={components} />
      <div className="flex items-center gap-5 text-white">
      {isSignedIn 
      ?   <>
            <Link to="/dashboard" className="text-lg font-bold self-center hover:text-gray-300 transition duration-300 ease-in-out">
              Dashboard
            </Link>
            <button onClick={handleSignOut} className="hidden md:block text-lg font-bold self-center hover:text-gray-300 transition duration-300 ease-in-out">
              Signout
            </button>
          </>
      :     <>
              <button onClick={handleSignIn} className="hidden md:block text-md font-bold self-center hover:text-gray-300 transition duration-300 ease-in-out">Login</button>
              <Link to="/signup" className="bg-white text-md text-black rounded-3xl px-4 py-1 hover:bg-gray-300 transition duration-300 ease-in-out">
                Get Started Free
              </Link>
            </>
      }
      </div> 
      </header>
      {expanded && <SideBar expanded={expanded} setExpanded={setExpanded} components={components} />}
    </>
  );
}

export default Header;



