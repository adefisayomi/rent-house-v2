import { useTheme } from "next-themes";
import Image from "next/image";
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
                <Image 
                    src={isDark ? '/logo_dark.svg' : resolvedTheme === 'dark' ? '/logo_dark.svg' : '/logo_light.svg'}
                    alt='logo'
                    className="w-[150px] h-auto"
                    width={200}
                    height={400}
                />
            </Link>
        </div>
    );
}
