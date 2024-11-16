// MenuBar.js
import React, { useState } from "react";
import SideBar from "./SideBar";
import { Menu } from "lucide-react";

const MenuBar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleCategoryClick = (category) => {
        console.log("Category clicked:", category); // You can use this to filter articles based on category
        toggleDrawer(false)(); // Close the drawer when a category is clicked
    };

    return (
        <nav className="fixed top-0 left-0 w-full h-[80px] text-black shadow-md z-50 bg-white">
            <div className="w-full px-4 py-3 flex items-center justify-between h-full">
                {/* Left-aligned Menu Icon */}
                <div className="flex gap-2 items-center w-1/4 mx-2 lg:mx-6">
                    <Menu
                        className="w-8 h-8 text-black cursor-pointer"
                        onClick={toggleDrawer(true)}
                    />
                    <span>Menu</span>
                </div>

                {/* Centered Logo */}
                <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2">
                    <img
                        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
                        alt="Logo"
                        className="h-auto w-1/2 lg:w-28"
                    />
                </div>

                {/* Right-aligned space */}
                <div className="w-1/4"></div>
            </div>

            {/* Sidebar */}
            <SideBar open={open} toggleDrawer={toggleDrawer} onCategoryClick={handleCategoryClick} />
        </nav>
    );
};

export default MenuBar;
