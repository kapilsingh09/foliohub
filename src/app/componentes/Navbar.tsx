"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={'#'}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                      
                    </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="OurVideos">
                    <div className="flex ">
                    <HoveredLink href="/videos">All Videos</HoveredLink>
                    <HoveredLink href="/videos/commercials">Commercials</HoveredLink>
                    <HoveredLink href="/videos/music-videos">Music Videos</HoveredLink>
                    <HoveredLink href="/videos/documentaries">Documentaries</HoveredLink>
                    </div>

                    

                </MenuItem>

              <Link href={'#'}>
                    <MenuItem setActive={setActive} active={active} item="Contact">
                      
                    </MenuItem>
                </Link>

            </Menu>
        </div>
    )
}

export default Navbar
