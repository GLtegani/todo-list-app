import { Moon, Sun } from "phosphor-react"

interface ThemeProps {
   darkModeIsActive: boolean
   onToggle: () => void
}

export const ToggleTheme = ({darkModeIsActive, onToggle}:ThemeProps) => {
   return (
      <button className="hover:bg-cta-active hover:text-white p-2 rounded-full duration-200" onClick={onToggle}>
         {darkModeIsActive ? <Sun className="size-6" /> : <Moon className="size-6" />}
      </button>
   )
} 