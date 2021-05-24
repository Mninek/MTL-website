import React from 'react';
import './homePage.css'
import MTLLogo from '../images/MTLLogo'

function homePage() {
    return (
        <div className="homePage">
            <header className="homePage-header">
                <MTLLogo />
                    <p>
                        Live test update
                    </p>
            </header>
         </div>
    )
}

export default homePage;