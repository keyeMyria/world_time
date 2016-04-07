// import React, { Component, PropTypes } from 'react';

// export default class PageLayout extends Component {


//   render() {
//     return(
//       <div>
//         <h1 className="center"> Main page </h1>
//       </div>
//     )
//   }
// }


// static propTypes = {
//   breadcrumbs: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired
// }

// <div id="main" role="main">
//   <div id="ribbon">
//     <ol className="breadcrumb">
//       { this.props.breadcrumbs.split('/').map((b, i) =>
//         <li key={i}>{ b.trim() }</li>
//       )}
//     </ol>
//   </div>

//   <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//     <h1 className="page-title txt-color-blueDark">
//       <i className="fa-fw fa fa-home" />
//       { this.props.title }
//     </h1>

//     { this.props.children }

//   </div>
// </div>
