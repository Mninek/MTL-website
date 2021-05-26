import React from 'react';
import './homePage.css'
import MTLLogo from '../images/MTLLogo'
import {Button} from '../Button/Button'

function homePage() {

    const routeDraft = () => {
        window.location.href = '/draft';
    }

    const routeRandomRoll = () => {
        window.location.href = '/randomRoll'
    }

    return (
        <div className="homePage">
        <MTLLogo />
            <div className="container">
                <div className="draft" onClick={routeDraft}>
                    <Button>
                        Draft Pick
                    </Button>
                </div>
                <div className="randomizer">
                    <Button>
                        Random Team Rolls
                    </Button>
                </div>
                <div className="randomRoll" onClick={routeRandomRoll}>
                    <Button>
                        Random Unit
                    </Button>
                </div>
                <div className = "stats">
                    <Button>
                        Unit Statistics
                    </Button>
                </div>
            </div>
         </div>
    )
}

export default homePage;