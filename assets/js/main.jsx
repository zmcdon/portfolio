import React from 'react';
import ReactDOM from 'react-dom';

// class StoryBox extends React.Component {
//   render(){
//     const now = new Date();

//     return( React.createElement('div', null){
//         React.createElement('h3', 'stories')
//         React.createElement("p", {type: "text", value: "Current time:" {now.toTimeString()}, className:'lead'})
//         console.log('hi1');     
//     }
//       );
//   }
// }

class StoryBox extends React.Component {
  render(){
    const now = new Date();

    return( <div>
            <h3>Stories</h3>
            <p className='lead'>
            Current time: {now.toTimeString()}
            </p>
            </div>
            console.log('hi2');  
      );
  }
}