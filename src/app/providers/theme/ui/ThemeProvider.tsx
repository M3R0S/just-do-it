// import { FC, useMemo, useState } from "react";

// import { ThemeProviderProps } from "./ThemeProvider.types";

// import {
//     LOCAL_STORAGE_THEME_KEY,
//     Theme,
//     ThemeContext,
//     ThemeContextProps,
// } from "shared/lib/context/ThemeContext";

// const defaultTheme =
//     (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || "light";

// export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
//     const { children } = props;

//     const [theme, setTheme] = useState<Theme>(defaultTheme);

//     const defaultProviderValue = useMemo<ThemeContextProps>(
//         () => ({
//             theme,
//             setTheme,
//         }),
//         [theme]
//     );

//     return (
//         <ThemeContext.Provider value={defaultProviderValue}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };
