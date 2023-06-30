import React from 'react';
//(TWO) I can even use destructuring in the function parameters.
//const Card = ({ name, email, id }) => {
//instead of const Card = (props) => {
const Card = ({name, email, id}) => {
    // (ONE)I can use destructuring to make the code more readable.
    //const { name, email, id } = props;
    //instead of props.name, props.email, props.id
    //deleting line 10 and using in the line 5
//    const { name, email, id } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/> {/* This is a template string. */}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;