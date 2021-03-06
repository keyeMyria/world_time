import React, { Component, PropTypes } from 'react';

export default class PageLayout extends Component {

  static propTypes = {
    // breadcrumbs separated by '/'
    breadcrumbs: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    return(
      <div id="main" role="main">
        <div id="ribbon">
          <ol className="breadcrumb">
            { this.props.breadcrumbs.split('/').map((b, i) =>
              <li key={i}>{ b.trim() }</li>
            )}
          </ol>
        </div>

        <div className="col-xs-12">
          <h2 className="center page-title txt-color-blueDark">
            <i className="fa-fw fa fa-home" />
            { this.props.title }
          </h2>

          { this.props.children }

        </div>
      </div>
    )
  }
}
