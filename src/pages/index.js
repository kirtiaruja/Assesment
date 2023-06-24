import React from 'react';
import DashboardLeftText from '../components/index_left_text';
import '../css/index_left.css';
import SignIn from '../components/form';

const Index = () => {
    return (
        <div className='wrapper'>
            <div class="split left">
                <div class="centered">
                    <DashboardLeftText/>
                </div>
            </div>

            <div class="split right">
                    <SignIn/>
            </div>
        </div>
    );

}

export default Index;
