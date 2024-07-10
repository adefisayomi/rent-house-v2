import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Logo({isDark=false}: {isDark?: boolean}) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-end">
            <Link href='/'>
                <img 
                    src={isDark ? '/logo_dark.svg' : resolvedTheme === 'dark' ? '/logo_dark.svg' : '/logo_light.svg'}
                    alt='logo'
                    className="w-[150px] h-auto"
                />
            </Link>
        </div>
    );
}
