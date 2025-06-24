import React, { Component } from "react";

class Footer extends Component {
  render() {
    const sharedInfo = this.props.sharedBasicInfo || {};
    const socialList = sharedInfo.social || [];

    const networks = socialList.map((network) => (
      <span key={network.name} className="m-4">
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <i className={network.class}></i>
        </a>
      </span>
    ));
    console.log("社交信息:", this.props.sharedBasicInfo?.social);

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>
          <div className="copyright py-4 text-center">
            <div className="container">
              <small>Copyright &copy; {sharedInfo.name || "Unknown"}</small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
