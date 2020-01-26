import React from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './../../layout/default';
import { RoutedContent } from './../../routes';
import { TranslatorProvider } from "react-translate";
import {FA} from '../../lang'

let translations = {
    locale: "en",
    FA: FA
};
const basePath = process.env.BASE_PATH || '/';

const AppClient = () => {
    return (
        <TranslatorProvider translations={translations}>
        <Router basename={ basePath }>
            <AppLayout>
                <RoutedContent />
            </AppLayout>
        </Router>
        </TranslatorProvider>
    );
}

export default hot(module)(AppClient);
