import React from 'react';
import './homePage.css'
import MTLLogo from '../images/MTLLogo'
import {Button} from '../Button/Button'

function homePage() {
    return (
        <div className="homePage">
        <MTLLogo />
            <div className="container">
                <div className="draft">
                    <Button>
                        Draft Pick
                    </Button>
                </div>
                <div className="randomizer">
                    <Button>
                        Random Team Rolls
                    </Button>
                </div>
                <div className="randomRoll">
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