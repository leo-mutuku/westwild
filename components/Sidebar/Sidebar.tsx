'use client'

import { usePathname } from "next/navigation"
import { JSX, useMemo } from "react";
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { Box } from "../Box";
import SidebarItem from "../SidebarItem";
import { IconType } from "react-icons";
import Library from "../Library";
interface SidebarProps {
    children: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname()
    const routes = useMemo(() =>
        [
        {
            icon:HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/'
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',

        }

    ], [])
    return (
        <main  className="flex flex-row">
            <div className="flex flex-col h-screen">
                <div
                    className="
      hidden
      md:flex
      flex-col
      gap-y-2
      h-full
      bg-black
      w-[300px]
      p-2">
                    <Box>
                        <div
                            className="
           flex
           flex-col
           gap-y-4
           px-5
           py-4
           ">
                            {routes.map((item) => {
                               return(
                                <SidebarItem
                                key={item.label}
                                {...item}
                            />
                               )
                            })}

                        </div>
                    </Box>
                    <Box >
                       <div className="h-full overflow-y-hidden"><Library /></div>
                    </Box>

                </div>
            </div>
            <div className="">
                {children}
            </div>

        </main>
    );
}

export default Sidebar;