import * as React from "react";
import * as ReactDOM from "react-dom";
import BootstrapSwitchButton from "../lib/bootstrap-switch-button-react";

// App Container
const AppMain: React.SFC<{ compiler: string; framework: string }> = props => {
  return (
    <section id="demos" className="container my-5">
      <h2>Demos</h2>
      <hr />

      <h3 className="text-secondary mt-4">Sizes</h3>
      <p>Bootstrap Switch Button is available in different sizes.</p>
      <div className="row">
        <div className="col p-3 bg-white border">
          <BootstrapSwitchButton checked={true} style="mr-3" size="lg" />
          <BootstrapSwitchButton checked={true} style="mr-3" />
          <BootstrapSwitchButton checked={true} style="mr-3" size="sm" />
          <BootstrapSwitchButton checked={true} style="mr-3" size="xs" />
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <pre>
            <code className="language-typescript">
              {`<BootstrapSwitchButton checked={true} size="lg" />
<BootstrapSwitchButton checked={true} />
<BootstrapSwitchButton checked={true} size="sm" />
<BootstrapSwitchButton checked={true} size="xs" />`}
            </code>
          </pre>
        </div>
      </div>

      <h3 className="text-secondary mt-4">Custom Sizes</h3>
      <p>
        Bootstrap Switch Button can handle custom sizes using <code>width</code>{" "}
        and <code>height</code> props.
      </p>
      <div className="row">
        <div className="col p-3 bg-white border">
          <BootstrapSwitchButton
            checked={true}
            style="mr-3"
            width={100}
            height={75}
          />
          <BootstrapSwitchButton checked={true} style="mr-3" height={75} />
          <BootstrapSwitchButton checked={true} style="mr-3" width={100} />
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <pre>
            <code className="language-typescript">
              {`<BootstrapSwitchButton checked={true} width={100} height={75} />
<BootstrapSwitchButton checked={true} height={75} />
<BootstrapSwitchButton checked={true} width={100} />`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

ReactDOM.render(
  <AppMain compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
