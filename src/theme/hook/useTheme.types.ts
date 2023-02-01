import { Theme } from "../context"

interface UseThemeReturned {
    theme: Theme
    toggleTheme: VoidFunction
}

export type UseTheme = () => UseThemeReturned