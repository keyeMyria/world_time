export default class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu" >
              <li className="menu-text"> World Time </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu" >
              <button className="button"> Login </button>
            </ul>
          </div>
        </div>
      )
  }
}






/* import React, { Component } from 'react'; */

/* export default class Header extends Component { */
/* 	render() { */
/* 		return( */
/* 			<header id="header"> */
/* 				<div id="logo-group"> */
/* 					{/1* PLACE YOUR LOGO HERE *1/} */
/* 					<span id="logo"> <img src="img/logo.png" alt="SmartAdmin" /> </span> */
/* 					{/1* END LOGO PLACEHOLDER *1/} */
/* 					{/1* Note: The activity badge color changes when clicked and resets the number to 0 */
/* 					 Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications *1/} */
/* 					<span id="activity" className="activity-dropdown"> <i className="fa fa-user" /> <b className="badge"> 21 </b> </span> */
/* 					{/1* AJAX-DROPDOWN : control this dropdown height, look and feel from the LESS variable file *1/} */
/* 					<div className="ajax-dropdown"> */
/* 						{/1* the ID links are fetched via AJAX to the ajax container "ajax-notifications" *1/} */
/* 						<div className="btn-group btn-group-justified" data-toggle="buttons"> */
/* 							<label className="btn btn-default"> */
/* 								<input type="radio" name="activity" id="ajax/notify/mail.html" /> */
/* 								Msgs (14) </label> */
/* 							<label className="btn btn-default"> */
/* 								<input type="radio" name="activity" id="ajax/notify/notifications.html" /> */
/* 								notify (3) </label> */
/* 							<label className="btn btn-default"> */
/* 								<input type="radio" name="activity" id="ajax/notify/tasks.html" /> */
/* 								Tasks (4) </label> */
/* 						</div> */
/* 						{/1* notification content *1/} */
/* 						<div className="ajax-notifications custom-scroll"> */
/* 							<div className="alert alert-transparent"> */
/* 								<h4>Click a button to show messages here</h4> */
/* 								This blank page message helps protect your privacy, or you can show the first message here automatically. */
/* 							</div> */
/* 							<i className="fa fa-lock fa-4x fa-border" /> */
/* 						</div> */
/* 						{/1* end notification content *1/} */
/* 						{/1* footer: refresh area *1/} */
/* 						<span> Last updated on: 12/12/2013 9:43AM */
/* 							<button type="button" data-loading-text="<i class='fa fa-refresh fa-spin'></i> Loading..." className="btn btn-xs btn-default pull-right"> */
/* 								<i className="fa fa-refresh" /> */
/* 							</button> </span> */
/* 						{/1* end footer *1/} */
/* 					</div> */
/* 					{/1* END AJAX-DROPDOWN *1/} */
/* 				</div> */
/* 				{/1* #PROJECTS: projects dropdown *1/} */
/* 				<div className="project-context hidden-xs"> */
/* 					<span className="label">Projects:</span> */
/* 					<span className="project-selector dropdown-toggle" data-toggle="dropdown">Recent projects <i className="fa fa-angle-down" /></span> */
/* 					{/1* Suggestion: populate this list with fetch and push technique *1/} */
/* 					<ul className="dropdown-menu"> */
/* 						<li> */
/* 							<a href="javascript:void(0);">Online e-merchant management system - attaching integration with the iOS</a> */
/* 						</li> */
/* 						<li> */
/* 							<a href="javascript:void(0);">Notes on pipeline upgradee</a> */
/* 						</li> */
/* 						<li> */
/* 							<a href="javascript:void(0);">Assesment Report for merchant account</a> */
/* 						</li> */
/* 						<li className="divider" /> */
/* 						<li> */
/* 							<a href="javascript:void(0);"><i className="fa fa-power-off" /> Clear</a> */
/* 						</li> */
/* 					</ul> */
/* 					{/1* end dropdown-menu*/} */
/* 				</div> */
/* 				{/1* end projects dropdown *1/} */
/* 				{/1* #TOGGLE LAYOUT BUTTONS *1/} */
/* 				{/1* pulled right: nav area *1/} */
/* 				<div className="pull-right"> */
/* 					{/1* collapse menu button *1/} */
/* 					<div id="hide-menu" className="btn-header pull-right"> */
/* 						<span> <a href="javascript:void(0);" data-action="toggleMenu" title="Collapse Menu"><i className="fa fa-reorder" /></a> </span> */
/* 					</div> */
/* 					{/1* end collapse menu *1/} */
/* 					{/1* #MOBILE *1/} */
/* 					{/1* Top menu profile link : this shows only when top menu is active *1/} */
/* 					<ul id="mobile-profile-img" className="header-dropdown-list hidden-xs padding-5"> */
/* 						<li className> */
/* 							<a href="#" className="dropdown-toggle no-margin userdropdown" data-toggle="dropdown"> */
/* 								<img src="img/avatars/sunny.png" alt="John Doe" className="online" /> */
/* 							</a> */
/* 							<ul className="dropdown-menu pull-right"> */
/* 								<li> */
/* 									<a href="javascript:void(0);" className="padding-10 padding-top-0 padding-bottom-0"><i className="fa fa-cog" /> Setting</a> */
/* 								</li> */
/* 								<li className="divider" /> */
/* 								<li> */
/* 									<a href="#ajax/profile.html" className="padding-10 padding-top-0 padding-bottom-0"> <i className="fa fa-user" /> <u>P</u>rofile</a> */
/* 								</li> */
/* 								<li className="divider" /> */
/* 								<li> */
/* 									<a href="javascript:void(0);" className="padding-10 padding-top-0 padding-bottom-0" data-action="toggleShortcut"><i className="fa fa-arrow-down" /> <u>S</u>hortcut</a> */
/* 								</li> */
/* 								<li className="divider" /> */
/* 								<li> */
/* 									<a href="javascript:void(0);" className="padding-10 padding-top-0 padding-bottom-0" data-action="launchFullscreen"><i className="fa fa-arrows-alt" /> Full <u>S</u>creen</a> */
/* 								</li> */
/* 								<li className="divider" /> */
/* 								<li> */
/* 									<a href="javascript:void(0);" className="padding-10 padding-top-5 padding-bottom-5" data-action="userLogout"><i className="fa fa-sign-out fa-lg" /> <strong><u>L</u>ogout</strong></a> */
/* 								</li> */
/* 							</ul> */
/* 						</li> */
/* 					</ul> */
/* 					{/1* logout button *1/} */
/* 					<div id="logout" className="btn-header transparent pull-right"> */
/* 						<span> <a href="javascript:void(0);" title="Sign Out" data-action="userLogout" data-logout-msg="You can improve your security further after logging out by closing this opened browser"><i className="fa fa-sign-out" /></a> </span> */
/* 					</div> */
/* 					{/1* end logout button *1/} */
/* 					{/1* search mobile button (this is hidden till mobile view port) *1/} */
/* 					<div id="search-mobile" className="btn-header transparent pull-right"> */
/* 						<span> <a href="javascript:void(0)" title="Search"><i className="fa fa-search" /></a> </span> */
/* 					</div> */
/* 					{/1* end search mobile button *1/} */
/* 					{/1* #SEARCH *1/} */
/* 					{/1* input: search field *1/} */
/* 					<form className="header-search pull-right"> */
/* 						<input id="search-fld" type="text" name="param" placeholder="Find reports and more" /> */
/* 						<button onClick={ (e) => { e.preventDefault() } }> */
/* 							<i className="fa fa-search" /> */
/* 						</button> */
/* 						<a href="javascript:void(0);" id="cancel-search-js" title="Cancel Search"><i className="fa fa-times" /></a> */
/* 					</form> */
/* 					{/1* end input: search field *1/} */
/* 					{/1* fullscreen button *1/} */
/* 					<div id="fullscreen" className="btn-header transparent pull-right"> */
/* 						<span> <a href="javascript:void(0);" data-action="launchFullscreen" title="Full Screen"><i className="fa fa-arrows-alt" /></a> </span> */
/* 					</div> */
/* 					{/1* end fullscreen button *1/} */
/* 					{/1* multiple lang dropdown : find all flags in the flags page *1/} */
/* 					<ul className="header-dropdown-list hidden-xs"> */
/* 						<li> */
/* 							<a href="#" className="dropdown-toggle" data-toggle="dropdown"> <img src="img/blank.gif" className="flag flag-us" alt="United States" /> <span> US</span> <i className="fa fa-angle-down" /> </a> */
/* 							<ul className="dropdown-menu pull-right"> */
/* 								<li className="active"> */
/* 									<a href="javascript:void(0);"><img src="img/blank.gif" className="flag flag-us" alt="United States" /> English (US)</a> */
/* 								</li> */
/* 								<li> */
/* 									<a href="javascript:void(0);"><img src="img/blank.gif" className="flag flag-fr" alt="France" /> Français</a> */
/* 								</li> */
/* 								<li> */
/* 									<a href="javascript:void(0);"><img src="img/blank.gif" className="flag flag-es" alt="Spanish" /> Español</a> */
/* 								</li> */
/* 								<li> */
/* 									<a href="javascript:void(0);"><img src="img/blank.gif" className="flag flag-de" alt="German" /> Deutsch</a> */
/* 								</li> */
/* 								<li> */
/* 									<a href="javascript:void(0);"><img src="img/blank.gif" className="flag flag-jp" alt="Japan" /> 日本語</a> */
/* 								</li> */
/* 								<li> */
/* 									<a href="javascript:void(0);"><img src="img/blank.gif" className="flag flag-cn" alt="China" /> 中文</a> */
/* 								</li> */
/* 								<li> */
/* 									<a href="javascript:void(0);"><img src="img/blank.gif" className="flag flag-it" alt="Italy" /> Italiano</a> */
/* 								</li> */
/* 								<li> */
/* 									<a href="javascript:void(0);"><img src="img/blank.gif" className="flag flag-pt" alt="Portugal" /> Portugal</a> */
/* 								</li> */
/* 								<li> */
/* 									<a href="javascript:void(0);"><img src="img/blank.gif" className="flag flag-ru" alt="Russia" /> Русский язык</a> */
/* 								</li> */
/* 								<li> */
/* 									<a href="javascript:void(0);"><img src="img/blank.gif" className="flag flag-kr" alt="Korea" /> 한국어</a> */
/* 								</li> */
/* 							</ul> */
/* 						</li> */
/* 					</ul> */
/* 					{/1* end multiple lang *1/} */
/* 				</div> */
/* 				{/1* end pulled right: nav area *1/} */
/* 			</header> */
/* 		) */
/* 	} */
/* } */
