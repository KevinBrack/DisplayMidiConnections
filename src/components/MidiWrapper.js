import React, { Component, Fragment } from "react";
import WebMidi from "webmidi";

import DisplayInputs from "./MidiWrapperDisplays/DisplayInputs";
import DisplayOutputs from "./MidiWrapperDisplays/DisplayOutpus";

class MidiWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      midiInputs: [],
      midiOutputs: []
    };
  }

  componentDidMount() {
    WebMidi.enable(err => {
      if (err) {
        console.log("WebMidi could not be enabled", err);
      } else {
        const inputs = WebMidi.inputs;
        const outputs = WebMidi.outputs;
        console.log("WEB MIDI INPUTS: ", inputs);
        console.log("WEB MIDI OUTPUTS: ", outputs);
        this.setState({ midiInputs: inputs, midiOutputs: outputs });
      }
    });
  }

  render() {
    if (this.state.midiInputs !== [] && this.state.midiOutputs) {
      return (
        <Fragment>
          <DisplayInputs inputs={this.state.midiInputs} />
          <DisplayOutputs outputs={this.state.midiOutputs} />
        </Fragment>
      );
    } else {
      return <h3>NO MIDI INPUTS FOUND</h3>;
    }
  }
}

export default MidiWrapper;
