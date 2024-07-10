import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Routes from "@/src/Routes";
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navConfig } from "./navConfig";
import { useRouter } from "next/router";
import { ToggleThemeMode } from "@/components/ThemeProvider";
import useAuthStore from "@/src/contexts/useAuthStore";
import {UserMenu} from "./userMenu";




export default function DesktopHeader () {

  const {user} = useAuthStore()
  
    return (
        <div className="h-14 w-full max-w-7xl mx-auto flex items-center justify-between">
            <Logo />

            <div><NavMenu /></div>

            <div className="flex items-center gap-3">
                {!user && <ToggleThemeMode />}
                {
                  user?.claims?.accountType && 
                  <div className="text-[10px] font-semibold py-1 px-3 rounded-full dark:bg-white dark:text-black capitalize cursor-default bg-black text-white">{user?.claims?.accountType}</div>
                }
                {
                  user ? (
                    <UserMenu />
                  ) : (
                    <>
                    <Link href={Routes.login}><Button variant='outline' className="h-10 px-5">Sign In</Button></Link>
                    <Link href={Routes.signup}><Button className="h-9 px-5">Sign Up</Button></Link>
                    </>
                  )
                }
            </div>
        </div>
    )
}



function NavMenu () {

    const {pathname} = useRouter()
    
    return (
      <NavigationMenu>
        <NavigationMenuList>
          {
            navConfig.map((nav, index) => (
                <NavigationMenuItem key={index}>
                    <Link href={nav.href} legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xs capitalize flex flex-col font-normal`}>
                        {nav.title}
                        { pathname === nav.href && <span className="w-full bg-primary h-[2px]" />}
                    </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            ))
          }
          

        </NavigationMenuList>
      </NavigationMenu>
    )
  }
  