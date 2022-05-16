import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import UserPage from 'pages/UserPage';
//import AdminPage from 'pages/AdminPage';
import NotFoundPage from 'pages/NotFoudPage';
import Layout from 'components/LayOut';
import CollectionPage from 'pages/CollectionPage';

import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { IntlProvider } from 'react-intl';
import { LOCALES } from 'constants/locales';
import { messages } from 'constants/messages';


function App() {
  const locale = LOCALES.ENGLISH

  async function componentDidMount() {
    try {
      const response = await fetch('https://auth-example-fb6c8-default-rtdb.europe-west1.firebasedatabase.app/');
      const parsedResponse = await response.json();
  
      this.props.dispatch({
        type: 'updateStudents',
        payload: parsedResponse
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.ENGLISH}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="user/:id" element={<UserPage />} />
        <Route path="collection" element={<CollectionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    </IntlProvider>
    </>
  );
}

export default App;


/*
  async function componentDidMount() {
    try {
      const response = await fetch('https://auth-example-fb6c8-default-rtdb.europe-west1.firebasedatabase.app/');
      const parsedResponse = await response.json();
  
      this.props.dispatch({
        type: 'updateStudents',
        payload: parsedResponse
      })
    } catch (err) {
      console.error(err)
    }
  }
*/