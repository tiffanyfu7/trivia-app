import React, { useState } from 'react'

const Answers = ({ correct }) => {
    let choices = ["True", "False"];

    const [bgColor, setBgColor] = useState('#bababa');
    const [selected, setSelected] = useState(false);

    const onAnswerSelected = (answer) => {
        if (!selected && answer.choice === correct) {
            setSelected(true);
            setBgColor('#9dbf93');
        } else if(!selected) {
            setSelected(true);
            setBgColor('#b37f7f');
        }
    }

    return (
        <>
            {choices.map((choice) => (
                <button onClick={() => onAnswerSelected({ choice })} style={{ background: bgColor, marginRight: "1em" }} > {choice} </button>
            ))}
            {/* <button onClick={() => onAnswerSelected("True")} style={{ background: bgColor, marginRight: "1em" }} > True </button>
            <button onClick={() => onAnswerSelected("False")} style={{background: bgColor}} > False </button> */}
        </>
    )
}

export default Answers