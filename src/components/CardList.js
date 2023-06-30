import React from 'react';
import Card from './Card';
//complete this snippet from robofriends\src\CardList.js:


//to avoid CardList having a key error, we need to add a key to the Card component
//if one card gets deleted without a key, react will not know which one to delete
//and will have to change the entire DOM, instead of just knowing which one to delete
//so we just need to remember, when we do a loop we need to add a key prop and wrap in {} because it's javascript
const CardList = ({robots}) => {
    // if(true)
    // {
    //     throw new Error('NOOOOOOO!');
    // }
    return (
        <div>
            {    robots.map((user, i) => {
                    return (
                        <Card 
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}
                            
//one more thing, key prop should be something that doesn't change.
//For exemple, index (or {i} in our case) could change if array items get
//moved. So a better key in this case would be something unique like id.



// const CardList = ({ robots }) => {
//     return (
//         <div>
//             {
//                 robots.map((user, i) => { //map need to return
//                     return (              //the second parameter we get in a map is a index
//                         <Card 
//                             key={i} 
//                             id={robots[i].id} 
//                             name={robots[i].name} 
//                             email={robots[i].email}
//                         />
//                     );
//                 })
//             }
//         </div>
//     );
// }

export default CardList;
