import React, { Fragment } from "react";

export default props => {
  return (
    <div>
      <h2>MIDI OUTPUTS</h2>
      {props.outputs.map(output => {
        return (
          <Fragment key={output.id}>
            <h3>
              {output.name.toUpperCase()} on port: {output.id}
            </h3>
            <h4>{output.state.toUpperCase()}</h4>
          </Fragment>
        );
      })}
    </div>
  );
};
