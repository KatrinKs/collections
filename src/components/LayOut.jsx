import { Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import { useState } from 'react';
import {removeUser} from 'store/slices/userSlice';
import {useDispatch} from 'react-redux';
import { useAuth } from 'hooks/use-auth';
import { FormattedMessage } from "react-intl";
import { LOCALES } from "constants/locales";

const Layout = () => {
    const dispatch = useDispatch();
    const {isAuth, email} = useAuth();

    const [theme, setTheme] = useState("light");
    const switchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const languages = [
        { name: 'English', code: LOCALES.ENGLISH },
        { name: 'Русский', code: LOCALES.RUSSIAN }]

    return isAuth ? (
        <>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <header>
            <CustomLink to="/"> <FormattedMessage id='menu_home'/> </CustomLink>
            <button onClick={switchTheme}><FormattedMessage id='menu_themes'/></button> 
            <button onClick={()=> dispatch(removeUser())}
            ><FormattedMessage id='menu_logout'/>{email}</button>
            <div className='switcher'>{} Languages <select>
                {languages.map(({ name, code }) => (
                <option key={code} value={code}>
                    {name}
                </option>
                ))}
            </select>
            </div>
        </header>
        <main className="container">
            <Outlet />
        </main>

        <footer className="container">That will be cool!</footer>
        </ThemeProvider>
        </>
    ) : (
        <>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <header>
            <CustomLink to="/"> <FormattedMessage id='menu_home'/> </CustomLink>
            <CustomLink to="/login"><FormattedMessage id='menu_login'/> </CustomLink>
            <CustomLink to="/register"><FormattedMessage id='menu_register'/> </CustomLink>
            <button onClick={switchTheme}><FormattedMessage id='menu_themes'/> </button>
        </header>
        <main className="container">
            <Outlet />
        </main>

        <footer className="container">That will be cool!</footer>
        </ThemeProvider>
        </>
    )
}

export default Layout