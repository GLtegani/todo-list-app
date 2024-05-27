import { Moon, Sun } from "phosphor-react"

interface ThemeProps {
   darkModeIsActive: boolean
   onToggle: () => void
}

export const ToggleTheme = ({darkModeIsActive, onToggle}:ThemeProps) => {
   return (
      <button className="hover:text-cta duration-75" onClick={onToggle}>
         {darkModeIsActive ? <Sun className="size-6" /> : <Moon className="size-6" />}
      </button>
   )
} 