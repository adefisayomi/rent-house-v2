import useResponsive from "@/src/hooks/useResponsive"
import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"







export default function Header () {

    const isDesktop = useResponsive() === 'desktop'

    return (
        <header className="w-full flex items-center justify-center p-1 border-b shadow-md">
            { isDesktop ? <DesktopHeader/> : <MobileHeader /> }
        </header>
    )
}