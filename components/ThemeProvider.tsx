import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, LaptopMinimal, LoaderCircle } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
        {children}
    </NextThemesProvider>
  );
}

export function ToggleThemeMode({showText=false}: {showText?: boolean}) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!theme) {
      const systemTheme = getCurrentSystemTheme();
      setTheme(systemTheme);
    }
  }, [theme, setTheme]);

  if (!mounted) {
    return <LoaderCircle className="w-4 h-4 animate-spin"/>
  }

  const handleToggleTheme = (value: 'light' | 'dark' | 'system') => {
    if (value) setTheme(value)
  };

  return (
    <div className="flex items-center gap-1 justify-between w-full">
      { showText && <h2 className="capitalize text-[11px] font-semibold">Theme</h2>}
      <ToggleGroup type="single" size="sm" className="bg-background rounded-md p-1" value={theme} onValueChange={handleToggleTheme}>
        <ToggleGroupItem value="light" className='h-7 w-7' aria-label="Toggle light">
            <Sun className="h-3 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem value="dark" className='h-7 w-7' aria-label="Toggle dark">
            <Moon className="h-3 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem value="system" className='h-7 w-7' aria-label="Toggle system">
          <LaptopMinimal className="h-3 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

export function getCurrentSystemTheme() {
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
  return darkThemeMq.matches ? 'dark' : 'light';
}
