# rn-modal-window

## Prerequisites

This library is pure react-native component, so just have fun on it

## Installation

To install this component to your **react-native project**, please just following this instruction bellow.
```bash
#on your root project, enter command
$ npm install --save rn-modal-window

```

## Example code

To install this component to your **react-native project**, please just following this instruction bellow.
```jsx
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ModalWindow from "rn-modal-window";

export default class App extends Component<Props> {
  componentDidmount = () => {
    this.modalExample.show()
  }
  closeModalExample = () => {
    this.modalExample.dismiss();
  }
  render() {
    return (
      <ModalWindow title = { 'your moadl title' } ref = { ref => this.modalExample = ref }       actionRender = {() => (
        <TouchableOpacity onPress = { this.closeModalExample }>
          <Text>Close</Text>
        </TouchableOpacity>
      )} width = {"90%"} >
        <Text></Text>
      </ModalWindow>
    );
  }
}

```

## Dependencies

no depedencies, its all use eact-native component

## License

**MIT** Licences
