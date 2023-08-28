import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Page from './router/Page';
import Header from './components/Header';
import {ToDoContextProvider} from './contexts/TodoContext';

const App = () => {
    return (
        <ToDoContextProvider>
            <BrowserRouter basename='/wanted-pre-onboarding-frontend'>
                <Header />
                <Page />
            </BrowserRouter>
        </ToDoContextProvider>
    );
};

export default App;
