import React, { Fragment } from "react";

export default props => {
  return (
    <div>
      <h2>MIDI INPUTS</h2>
      {props.inputs.map(input => {
        return (
          <Fragment key={input.id}>
            <h3>
              {input.name.toUpperCase()} on port: {input.id}
            </h3>
            <h4>{input.state.toUpperCase()}</h4>
          </Fragment>
        );
      })}
    </div>
  );
};
