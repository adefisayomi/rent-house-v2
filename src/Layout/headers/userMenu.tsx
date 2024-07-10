import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import useAuthStore from "@/src/contexts/useAuthStore"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDown, LayoutDashboard, LoaderCircle } from "lucide-react"
import { ToggleThemeMode } from "@/components/ThemeProvider"
import Link from "next/link"
import Routes from "@/src/Routes"




  
export function UserMenu () {

    const {user, logout, loading} = useAuthStore()
    
    return (
      <>
        {
          loading ? (
            <div className="w-9 h-9 rounded-full flex items-center justify-center border-2">
              <LoaderCircle className="w-4 h-4 animate-spin" />
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild >
                <div className="flex items-center gap-1 cursor-pointer transition-all [&[data-state=open]>svg]:rotate-180">
                <Avatar className="border-2 w-9 h-9 flex items-center justify-center">
                    <AvatarImage className="w-full h-full object-cover" src={user?.photoURL!} />
                    <AvatarFallback className="uppercase text-sm">{user?.displayName?.slice(0, 2)}</AvatarFallback>
                </Avatar>
                </div>
              </PopoverTrigger>
        
              <PopoverContent className="w-[200px] mt-4 mr-5 rounded-b-none border shadow-none p-0">
              <div className="border-b flex items-center justify-start p-2">
              <ToggleThemeMode showText />
              </div>

              <div className="flex w-full flex-col items-start">
                <Link href={Routes.dashboard} className="w-full">
                  <Button variant='ghost' className="border-b flex items-center justify-start w-full h-9  rounded-none gap-1 p-2">
                      <LayoutDashboard className="w-4 h-4" />
                      <h5 className="text-[11px]">Dashboard</h5>
                  </Button>
                </Link>

                <Button  className=" flex items-center h-11 rounded-none w-full p-2 " onClick={logout}>
                  Logout
                </Button>
              </div>
            </PopoverContent>
            </Popover>
          )
        }
      </>
    )
  }
  