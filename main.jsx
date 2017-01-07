// class Comment extends React.Component{
//   render() {
//     return(
//       <div className='comment'>
//         <p className='comment-header'>Anne Driod</p>
//         <p className='comment-body'>
//           I wanna know what love is...
//         </p>
//         <div className='comment-actions'>
//           <a href='#'>Delete comment</a>
//          </div>
//        </div>
//     );
//   }
// }

class StoryBox extends React.Component {
  render(){
    const now = new Date();

    return( React.createElement('div', null){
        React.createElement('h3', 'stories')
        React.createElement("p", {type: "text", value: "Current time:" {now.toTimeString()}, className:'lead'})      
    }
      );
  }
}

class StoryBox extends React.Component {
  render(){
    const now = new Date();

    return( <div>
            <h3>Stories</h3>
            <p className='lead'>
            Current time: {now.toTimeString()}
            </p>
            </div>
      );
  }
}