import {cookies} from "next/headers";

const useServerDarkMode = (defaultTheme = 'light') => {
    return cookies().get('theme')?.value ?? defaultTheme;
}

export default useServerDarkMode;