import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen dark:bg-background bg-[#fbfcfe] px-2">
      <div className="w-full max-w-7xl h-full mx-auto flex flex-col items-center">
        <header className="w-full md:py-6 py-4 sticky top-0 left-0 flex items-center md:flex-row flex-row-reverse justify-between dark:bg-background bg-[#fbfcfe]">
          <Button variant="outline" size="sm" className="p-0 w-10 h-10" onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Logo />
          <div className="md:flex hidden" />
        </header>
        
        <main className="grow w-full flex items-center py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
