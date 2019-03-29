/*\
|*|  :: Bootstrap Switch Button ::
|*|
|*|  Bootstrap Switch Button (React)
|*|  https://github.com/gitbrent/bootstrap-switch-button-react
|*|
|*|  This library is released under the MIT Public License (MIT)
|*|
|*|  Dream Journal App (C) 2019-present Brent Ely (https://github.com/gitbrent)
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
      checked: this.props.checked || true,
      disabled: this.props.disabled || false,
      onlabel: this.props.onlabel || "On",
      onstyle: this.props.onstyle || "primary",
      offlabel: this.props.offlabel || "Off",
      offstyle: this.props.offstyle || "light",
      size: this.props.size || "",
      style: this.props.style || "",
      width: this.props.width || null,
      height: this.props.height || null
    };
  }

  toggle = event => {
    if (this.state.checked) this.off();
    else this.on();
  };
  off = () => {
    if (!this.state.disabled) {
      this.setState({
        checked: false
      });
      if (this.props.onChange) this.props.onChange(this.state.checked);
    }
  };
  on = () => {
    if (!this.state.disabled) {
      this.setState({
        checked: true
      });
      /*
			this.state.classList.remove( 'btn-'+this.options.offstyle );
			this.state.classList.add( 'btn-'+this.options.onstyle );
			this.state.classList.remove( 'off' );
			this.state.checked = true
			*/
      if (this.props.onChange) this.props.onChange(this.state.checked);
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

  calcH = el => {
    const styles = window.getComputedStyle(el);
    const height = el.offsetHeight;
    const borderTopWidth = parseFloat(styles.borderTopWidth);
    const borderBottomWidth = parseFloat(styles.borderBottomWidth);
    const paddingTop = parseFloat(styles.paddingTop);
    const paddingBottom = parseFloat(styles.paddingBottom);

    //return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom
    // TODO: set new state, then have button use height style on re-render?
  };

  // style={{ width: '81.875px', height: '48px' }}>
  render = () => {
    let style = {};
    this.props.width ? (style["width"] = this.props.width + "px") : null;
    this.props.height ? (style["height"] = this.props.height + "px") : null;

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
        style={style}
        onClick={this.toggle}
        onTouchStart={this.toggle}
      >
        <div className="switch-group">
          <label
            className={
              "switch-on btn btn-" +
              this.state.onstyle +
              (this.state.size ? " btn-" + this.state.size : "")
            }
          >
            {this.state.onlabel}
          </label>
          <label
            className={
              "switch-off btn btn-" +
              this.state.offstyle +
              (this.state.size ? " btn-" + this.state.size : "")
            }
          >
            {this.state.offlabel}
          </label>
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

  /* TODO:
	if ( this.options.height ) {
		switchOn.style.lineHeight = calcH(switchOn)+'px';
		switchOff.style.lineHeight = calcH(switchOff)+'px';
	}
	*/
}
