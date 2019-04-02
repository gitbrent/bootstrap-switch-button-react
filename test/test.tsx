import * as React from "react";
import * as ReactDOM from "react-dom";
import BootstrapSwitchButton from "../lib/bootstrap-switch-button-react";

// App Container
const AppMain: React.SFC<{ compiler: string; framework: string }> = props => {
  return (
    <main>
      <div id="appHeader" className="container">
        <div className="row align-items-center">
          <div className="col-10 px-0">
            <h1 className="text-primary font-weight-light">
              Bootstrap -vs- bootstrap-switch-button-react
            </h1>
          </div>
          <div className="col-2 pr-0">
            <code>Bootstrap 4.3.1</code>
          </div>
        </div>
        <div className="row">
          <div className="col px-1">
            <p className="text-muted">
              Compares rendered height of <code>bootstrap</code> &amp; <code>bootstrap-switch-button</code> .form-control components
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h4 className="text-primary font-weight-light">Large</h4>
      </div>
      <div id="size-lg" className="container border p-3 mb-4">
        <div className="row mb-3">
          <div className="col px-5 py-3">
            <BootstrapSwitchButton checked={true} size="lg" style="w-100" />
          </div>
          <div className="col px-5 py-3">
            <button className="btn btn-lg btn-info w-100">Button</button>
          </div>
          <div className="col px-5 py-3">
            <select className="form-control-lg w-100">
              <option value="Choice 1">select</option>
            </select>
          </div>
          <div className="col px-5 py-3">
            <input
              type="text"
              className="form-control-lg w-100"
              placeholder="text"
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col text-center" />
          <div className="col text-center" />
          <div className="col text-center" />
          <div className="col text-center" />
        </div>
      </div>

      <div className="container">
        <h4 className="text-primary font-weight-light">Default</h4>
      </div>
      <div id="size-md" className="container border p-3 mb-4">
        <div className="row mb-3">
          <div className="col px-5 py-3">
            <BootstrapSwitchButton checked={true} style="w-100" />
          </div>
          <div className="col px-5 py-3">
            <button className="btn btn-info w-100">Button</button>
          </div>
          <div className="col px-5 py-3">
            <select className="form-control w-100">
              <option value="Choice 1">select</option>
            </select>
          </div>
          <div className="col px-5 py-3">
            <input
              type="text"
              className="form-control w-100"
              placeholder="text"
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col text-center" />
          <div className="col text-center" />
          <div className="col text-center" />
          <div className="col text-center" />
        </div>
      </div>

      <div className="container">
        <h4 className="text-primary font-weight-light">Small</h4>
      </div>
      <div id="size-sm" className="container border p-3 mb-4">
        <div className="row mb-3">
          <div className="col px-5 py-3">
		  <BootstrapSwitchButton checked={true} size="sm" style="w-100" />
          </div>
          <div className="col px-5 py-3">
            <button className="btn btn-sm btn-info w-100">Button</button>
          </div>
          <div className="col px-5 py-3">
            <select className="form-control-sm w-100">
              <option value="Choice 1">select</option>
            </select>
          </div>
          <div className="col px-5 py-3">
            <input
              type="text"
              className="form-control-sm w-100"
              placeholder="text"
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col text-center" />
          <div className="col text-center" />
          <div className="col text-center" />
          <div className="col text-center" />
        </div>
      </div>
    </main>
  );
};

ReactDOM.render(
  <AppMain compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
