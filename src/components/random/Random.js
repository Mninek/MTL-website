import React, {useState} from 'react';
import Select from 'react-select';
import './Random.css'
import {Button} from '../Button/Button'

function Random() {

    const [error, setError] = useState(false);

    const [nGames, setnGames] = useState(false);

    const [apiCall, setapiCall] = useState(false);

    const [numGames, setNumGames] = useState(0);

    const [teamOne, setTeamOne] = useState([]);

    const [teamTwo, setTeamTwo] = useState([]);

    const [names, setNames] = useState(['0','1','2','3','4','5','6','7']);

    const [races, setRaces] = useState(['N','N','N','N','N','N','N','N']);

    const test_num_players = 4;

    const raceOptions = [
        {value: 'P', label: 'P'},
        {value: 'T', label: 'T'},
        {value: 'Z', label: 'Z'},
        {value: 'R', label: 'R'}
    ];

    const games = [
        {value: '1', label: '1'},
        {value: '2', label: '2'},
        {value: '3', label: '3'},
        {value: '4', label: '4'},
        {value: '5', label: '5'},
        {value: '6', label: '6'},
        {value: '7', label: '7'},
        {value: '8', label: '8'},
        {value: '9', label: '9'},
        {value: '10', label: '10'},
    ]

    var racesTest = ['R','R','Z','Z','T','T','P','P'];

    var tempTeamOne = [];

    var tempTeamTwo = [];

    const updateChange = (place) => {
        var tempRaces = races;
        tempRaces[place.pos] = place.value;
        setRaces(tempRaces);
    }

    const updateGames = (e) => {
        setNumGames(e.value);
        console.log(numGames);
        setnGames(true);
    }

    const setName = (name, index) => {
        var tempNames = names;
        tempNames[index] = name;
        setNames(tempNames);
    }

    const rollForTeams = () => {
        if (races.includes('N') || nGames == false){
            setError(true);
            console.log(races);
        } else {
            setError(false);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    races: JSON.stringify(races),
                    names: JSON.stringify(names),
                    numGames: JSON.stringify(numGames)
                })
            }
            fetch(process.env.REACT_APP_MTL_API+'teamsRandomRoll/', requestOptions)
            .then((response)=>response.json())
            .then((data)=>{
                tempTeamOne = []
                tempTeamTwo = []
                //tempTeamOne.push([data.p0.name, data.p1.name, data.p2.name, data.p3.name])
                //teamTwo.push([data.p4.name, data.p5.name, data.p6.name, data.p7.name])
                for(var i = 0; i < numGames; i++){
                    tempTeamOne.push([data.p0["unit".concat(i.toString())], data.p1["unit".concat(i.toString())], data.p2["unit".concat(i.toString())], data.p3["unit".concat(i.toString())]]);
                    tempTeamTwo.push([data.p4["unit".concat(i.toString())], data.p5["unit".concat(i.toString())], data.p6["unit".concat(i.toString())], data.p7["unit".concat(i.toString())]]);
                }
                setapiCall(true);
                setTeamOne(tempTeamOne);
                setTeamTwo(tempTeamTwo);
            });
        }
    }

    if (test_num_players == 3){
        return (
            <div className="container">
                placeholder draft
                <Select className="selectButton"
                    options = {raceOptions} 
                    components = {{ DropdownIndicator: () => null, IndicatorSeperator:() => null}}
                />
            </div>
        )
    } else if (test_num_players == 4){
        return (
            <div className="container">
                <div className="team1">
                    Team 1
                    <div className="row">
                        <input type="text" placeholder="Player 1" className="inputBox" onChange={event => setName(event.target.value, 0)}/>
                        <Select className="selectButton"
                            options = {raceOptions} 
                            components = {{ DropdownIndicator: () => null, IndicatorSeperator:() => null}}
                            defaultValue={{label: "Race", value: 0}}
                            onChange={(val)=> {updateChange({pos: 0, value: val.value, total: 8})}}
                        />
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Player 2" className="inputBox" onChange={event => setName(event.target.value, 1)}/>
                        <Select className="selectButton"
                            options = {raceOptions} 
                            components = {{ DropdownIndicator: () => null, IndicatorSeperator:() => null}}
                            defaultValue={{label: "Race", value: 0}}
                            onChange={(val)=> {updateChange({pos: 1, value: val.value, total: 8})}}
                        />
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Player 3" className="inputBox" onChange={event => setName(event.target.value, 2)}/>
                        <Select className="selectButton"
                            options = {raceOptions} 
                            components = {{ DropdownIndicator: () => null, IndicatorSeperator:() => null}}
                            defaultValue={{label: "Race", value: 0}}
                            onChange={(val)=> {updateChange({pos: 2, value: val.value, total: 8})}}
                        />
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Player 4" className="inputBox" onChange={event => setName(event.target.value, 3)}/>
                        <Select className="selectButton"
                            options = {raceOptions} 
                            components = {{ DropdownIndicator: () => null, IndicatorSeperator:() => null}}
                            defaultValue={{label: "Race", value: 0}}
                            onChange={(val)=> {updateChange({pos: 3, value: val.value, total: 8})}}
                        />
                    </div>
                </div>
                <div className="team2">
                    Team 2
                    <div className="row">
                        <input type="text" placeholder="Player 1" className="inputBox" onChange={event => setName(event.target.value, 4)}/>
                        <Select className="selectButton"
                            options = {raceOptions} 
                            components = {{ DropdownIndicator: () => null, IndicatorSeperator:() => null}}
                            defaultValue={{label: "Race", value: 0}}
                            onChange={(val)=> {updateChange({pos: 4, value: val.value, total: 8})}}
                        />
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Player 2" className="inputBox" onChange={event => setName(event.target.value, 5)}/>
                        <Select className="selectButton"
                            options = {raceOptions} 
                            components = {{ DropdownIndicator: () => null, IndicatorSeperator:() => null}}
                            defaultValue={{label: "Race", value: 0}}
                            onChange={(val)=> {updateChange({pos: 5, value: val.value, total: 8})}}
                        />
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Player 3" className="inputBox" onChange={event => setName(event.target.value, 6)}/>
                        <Select className="selectButton"
                            options = {raceOptions} 
                            components = {{ DropdownIndicator: () => null, IndicatorSeperator:() => null}}
                            defaultValue={{label: "Race", value: 0}}
                            onChange={(val)=> {updateChange({pos: 6, value: val.value, total: 8})}}
                        />
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Player 4" className="inputBox" onChange={event => setName(event.target.value, 7)}/>
                        <Select className="selectButton"
                            options = {raceOptions} 
                            components = {{ DropdownIndicator: () => null, IndicatorSeperator:() => null}}
                            defaultValue={{label: "Race", value: 0}}
                            onChange={(val)=> {updateChange({pos: 7, value: val.value, total: 8})}}
                        />
                    </div>
                </div>
                <div className="textAndButton">
                    <Select className="numGames"
                            options = {games} 
                            components = {{ DropdownIndicator: () => null, IndicatorSeperator:() => null}}
                            defaultValue={{label: "Number of units", value: 0}}
                            onChange={(val)=> {updateGames({value: val.value})}}
                        />                    
                    <p className="bottomText">
                        Fill in the names and races of your players, then when both captains are ready press the button below.
                    </p>
                    <Button onClick={rollForTeams}>
                        Press me ( ͡❛ ͜ʖ ͡❛)
                    </Button>
                    {error &&
                        <p className="errorMessage">
                            Please select a race and number of units
                        </p>
                    }
                </div>
                {apiCall &&
                    <div className="parent">
                        <table className="unitTableOuter">
                            Team One's Units
                            <tbody>
                                <tr className="unitTable">
                                    <th className="unitTableEntry">{names[0]}</th>
                                    <th className="unitTableEntry">{names[1]}</th>
                                    <th className="unitTableEntry">{names[2]}</th>
                                    <th className="unitTableEntry">{names[3]}</th>
                                </tr>
                                {teamOne.map((item, index) => {
                                    return(
                                    <tr key={index} className="unitTable">
                                        <td className="unitTableEntry">{item[0]}</td>
                                        <td className="unitTableEntry">{item[1]}</td>
                                        <td className="unitTableEntry">{item[2]}</td>
                                        <td className="unitTableEntry">{item[3]}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                        <table className="unitTableOuter">
                            Team Two's Units
                            <tbody>
                                <tr className="unitTable">
                                    <th className="unitTableEntry">{names[4]}</th>
                                    <th className="unitTableEntry">{names[5]}</th>
                                    <th className="unitTableEntry">{names[6]}</th>
                                    <th className="unitTableEntry">{names[7]}</th>
                                </tr>
                                {teamTwo.map((item, index) => {
                                    return(
                                    <tr key={index} className="unitTable">
                                        <td className="unitTableEntry">{item[0]}</td>
                                        <td className="unitTableEntry">{item[1]}</td>
                                        <td className="unitTableEntry">{item[2]}</td>
                                        <td className="unitTableEntry">{item[3]}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        )
    }

}

export default Random;