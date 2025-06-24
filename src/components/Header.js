import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    let name = "";
    let social = [];

    if (this.props.sharedData) {
      name = this.props.sharedData.basic_info?.name || "";
      social = this.props.sharedData.social || [];
      this.titles = (this.props.sharedData?.titles || [])
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => <Typical className="title-styles" steps={this.titles} loop={50} />,
      () => true
    );

    return (
      <header
        id="home"
        style={{ height: window.innerHeight - 140, display: "block" }}
      >
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <span
                className="iconify header-icon"
                data-icon="la:laptop-code"
                data-inline="false"
              ></span>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>

              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>

              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />

              {/* Social icons */}
              <div className="social-icons mt-4 text-center">
                {social.map((network) => (
                  <a
                    key={network.name}
                    href={network.url}
                    // eslint-disable-next-line
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    style={{
                      fontSize: "2rem",
                      margin: "0 10px",
                      color: "#333",
                    }}
                  >
                    <i className={network.class}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
