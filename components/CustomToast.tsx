import { Toaster } from "sonner"
import { useTheme } from "next-themes"


export type ToastType = "success" | "info" | "warning" | "error"

export default function CustomToast () {

  const {theme} = useTheme()
  
    return (
        <Toaster
          position="top-right"
          richColors
          closeButton
          theme={theme === 'light' ? 'light' : 'dark'}
          toastOptions={{
            style: {fontSize: '11px'}
          }}
        />
    )
}