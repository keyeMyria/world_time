import { Dashboard } from 'components/dashboard';
ReactDOM.render(<Dashboard />, document.getElementById('main'));

  // var CommentList = React.createClass({
  //   render: function() {
			// console.log(this)
			// console.log(props.children)
  //     var commentNodes = this.props.data.map(function (comment){
  //       return (
  //         <div>
  //           <h1>{comment.id}</h1>
  //         </div>
  //       );
  //     });

  //     return (
  //       <div className="commentList">
  //         {commentNodes}
  //       </div>
  //     );
  //   }
  // });

// var CommentBox = React.createClass({
  //   getInitialState: function(){
  //     return {data: {comments:[]}};
  //   },
  //   getComments: function(){
  //     // var success = function(){
  //     //    var data = {
  //     //      comments : [
  //     //          { author : 'Mark Twein' },
  //     //          { author : 'Ernest Hemingway' },
  //     //          { author : 'Lewis Carroll' }
  //     //      ]
  //     //    };
  //     //    this.setState( {data: data} );
  //     // }.bind(this);
  //     // setTimeout(success, 100);

  //     $.ajax({
  //       url: "/api/v1/time_zones",
  //       dataType: 'json',
  //       success: function(data){
  //         this.setState({data: data});
  //       }.bind(this),
  //       error: function(xhr, status, err){
  //         console.error(url, status, err.toString());
  //       }.bind(this)
  //     });
  //   },

  // componentWillMount: function(){
  //     this.getComments();
  // },
  // render: function() {
  //   return (
  //     <div className="commentBox">
  //         {<CommentList data={this.state.data.time_zones}/>}
  //     </div>
  //   );
  // }
// });

  // ReactDOM.render(
  //   <CommentBox url="comments.json" />,
  //   document.getElementById('main')
  // );



// var MenuExample = React.createClass({
//     getInitialState: function(){
//         return { focused: 0 };
//     },
//     clicked: function(index){
// 			this.setState({focused: index});
//     },

//     render: function() {
//         var self = this;
//         return (
//             <div>
// 							<ul>
// 								{ this.props.items.map(function(m, index){
//                     if(self.state.focused == index){
//                         style = 'focused';
//                     }
//                     return <li onClick={self.clicked.bind(self, index)}>{m}</li>;
//                 }) }

//                 </ul>

//                 <p>Selected: {this.props.items[this.state.focused]}</p>
//             </div>
//         );

//     }
// });

// ReactDOM.render(
//     <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] } />,
//     document.body
// );
