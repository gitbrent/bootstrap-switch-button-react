/*\
|*|  :: Bootstrap Switch Button ::
|*|
|*|  Bootstrap Switch Button (React)
|*|  https://github.com/gitbrent/bootstrap-switch-button-react
|*|
|*|  This library is released under the MIT Public License (MIT)
|*|
|*|  Bootstrap Switch Button (C) 2019-present Brent Ely (https://github.com/gitbrent)
|*|
|*|  Permission is hereby granted, free of charge, to any person obtaining a copy
|*|  of this software and associated documentation files (the "Software"), to deal
|*|  in the Software without restriction, including without limitation the rights
|*|  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
|*|  copies of the Software, and to permit persons to whom the Software is
|*|  furnished to do so, subject to the following conditions:
|*|
|*|  The above copyright notice and this permission notice shall be included in all
|*|  copies or substantial portions of the Software.
|*|
|*|  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
|*|  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
|*|  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
|*|  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
|*|  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
|*|  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
|*|  SOFTWARE.
\*/

import React from "react";
import "./style.css";

export default class BootstrapSwitchButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked:
        typeof this.props.checked === "boolean" ? this.props.checked : false,
      disabled:
        typeof this.props.disabled === "boolean" ? this.props.disabled : false,
      onlabel: this.props.onlabel || "On",
      offlabel: this.props.offlabel || "Off",
      onstyle: this.props.onstyle || "primary",
      offstyle: this.props.offstyle || "light",
      size: this.props.size || "",
      style: this.props.style || "",
      width: this.props.width || null,
      height: this.props.height || null
    };
  }

  componentDidUpdate(_, prevState) {
    const { checked } = this.props;
    if (typeof checked === "boolean" && checked !== prevState.checked) {
      this.setState({ checked });
    }
  }

  toggle = event => {
    this.state.checked ? this.off() : this.on();
  };
  off = () => {
    if (!this.state.disabled) {
      this.setState({
        checked: false
      });
      if (this.props.onChange) this.props.onChange(false);
    }
  };
  on = () => {
    if (!this.state.disabled) {
      this.setState({
        checked: true
      });
      if (this.props.onChange) this.props.onChange(true);
    }
  };
  enable = () => {
    this.setState({
      disabled: false
    });
  };
  disable = () => {
    this.setState({
      disabled: true
    });
  };

  render = () => {
    let switchStyle = {};
    this.state.width ? (switchStyle.width = this.state.width + "px") : null;
    this.state.height ? (switchStyle.height = this.state.height + "px") : null;

    let labelStyle = {};
    if (this.state.height)
      labelStyle.lineHeight = "calc(" + this.state.height + "px * 0.8)";

    return (
      <div
        className={
          "switch btn " +
          (this.state.checked
            ? "on btn-" + this.state.onstyle
            : "off btn-" + this.state.offstyle) +
          (this.state.size ? " btn-" + this.state.size : "") +
          (this.state.style ? " " + this.state.style : "")
        }
        style={switchStyle}
        onClick={this.toggle}
      >
        <div className="switch-group">
          <span
            className={
              "switch-on btn btn-" +
              this.state.onstyle +
              (this.state.size ? " btn-" + this.state.size : "")
            }
            style={labelStyle}
          >
            {this.state.onlabel}
          </span>
          <span
            className={
              "switch-off btn btn-" +
              this.state.offstyle +
              (this.state.size ? " btn-" + this.state.size : "")
            }
            style={labelStyle}
          >
            {this.state.offlabel}
          </span>
          <span
            className={
              "switch-handle btn btn-light" +
              (this.state.size ? "btn-" + this.state.size : "")
            }
          />
        </div>
      </div>
    );
  };
}
