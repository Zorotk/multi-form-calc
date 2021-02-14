import React from 'react'
import './App.scss';
import Layout from "./Components/layout/layout";
import AppRoutes from "./Components/AppRoutes";



const App = () => {
    return (
            <div className={'layout-container'}>
                <Layout>
                    <AppRoutes/>
                </Layout>
            </div>
    );
}
export default App;
