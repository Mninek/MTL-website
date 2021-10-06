import React from 'react';

function Results() {

    var unitJson = [
        {
            protossUnit: "placeholder",
            zergUnit:"placeholder",
            terranUnit:"placeholder"
        }
    ]

    function updateUnits(){
        fetch(process.env.MTL_API+'api/randomRoll')
        .then((response)=>response.json())
        .then((data)=>{
            unitJson = data;
            console.log(unitJson);
        });
    }

    <div className="RGU">
        {unitJson.map((data, key) => {
            return (
            <div key={key}>
                {data.protossUnit + " , " + data.zergUnit + " , " + data.terranUnit}
            </div>
            );
        })}
    </div>
}

export default Results;