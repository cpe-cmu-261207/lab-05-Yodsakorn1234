import React from 'react';
import { useState } from 'react'
import Header from './Header';
import Todo from './Todo';
import Footer from './Footer';
function App() {
    return (
        <div>
            <Header firstname="Yodsakorn" lastname="Likitrungson" student_id={630612109} ></Header>

            <Todo/>

            <Footer copyrightText="Copyright © 2021 Minimal todo list by Yodsakorn Likitrungson"></Footer>
        </div>
    );
}

export default App;