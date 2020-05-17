/**
 * rn-modal-window
 * https://github.com/Ridwan_Foxdream/react-native/rn-modal-window
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { StyleSheet, View, Text , Modal, ScrollView} from 'react-native';
import { modularScale, modularHeight } from './SizeManagement';


class ModalWindow extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      isOpen: false
    }
  }

  componentDidMount = () => {
    if( this.props.isShow ){
      this.setState({ isOpen: true });
    }
  }

  show = () => {
    this.setState({ isOpen: true });
  }

  dismiss = () => {
    this.setState({ isOpen: false });
  }

  render(){
    const { state, props } = this;
    const headerStyle = [props.headerStyle[0] ?  props.headerStyle : [].push(props.headerStyle) ];
    const headerTitleStyle = [props.headerTitleStyle[0] ?  props.headerTitleStyle : [].push(props.headerTitleStyle) ];
    return (
      <Modal visible={ state.isOpen } animationType = {"fade"}  transparent = {true} onRequestClose = { this.dismiss } style={CSS.modal} onDismiss = { props.onDismiss } >
        { state.isOpen &&
          <View style = {CSS.modal_wrapper}>
            <Text style = {CSS.txt_wrapper_close} onPress = { this.dismiss } />
            <View style = {[ CSS.box_wrapper, {width: props.width } ]}>
              <View style = {[CSS.header_wrapper, ...headerStyle ]}>
                <Text style = {[CSS.head_title, ...headerTitleStyle]}>{ props.title }</Text>
                { props.headerBtn({dismiss: this.dismiss, show: this.show}) }
              </View>
              <View style = {[ CSS.content_list, {height: props.height } ]}>
                <ScrollView contentContainerStyle = {{flexGrow: 1}} >
                  { props.children &&
                    props.children.length > 0 ?  
                    props.children?.map((screen, index) =>{
                      return(
                        <>
                          {React.cloneElement(screen, {
                            dismiss: this.dismiss, show: this.show
                          })}
                        </>
                      )  
                    }) :
                    props.children
                  }
                </ScrollView>
              </View>
              { props.actionRender &&
                <View style = {[CSS.action_btn_wrapper, CSS.bt]}>
                  { props.actionRender({dismiss: this.dismiss, show: this.show}) }
                </View>
              }
            </View>
          </View>
        }
      </Modal>
    );
  }
}

ModalWindow.defaultProps = {
  actionRender: undefined,
  width: '90%',
  height: modularHeight(.6),
  isShow: false,
  onDismiss: () => null, // only ios
  headerStyle: {},
  headerBtn: () => null,
  headerTitleStyle: {}
}
export { ModalWindow };

const CSS = StyleSheet.create({
  action_btn_wrapper:{
    width: '100%',
    padding: modularScale(10),
    marginBottom: modularScale(10)
  },
  txt_wrapper_close:{
    position: 'absolute',
    left: 0,
    top: 0,
    right:0,
    bottom: 0,
  },
  bt: {
    borderTopWidth: modularScale(1),
    borderColor: '#a5a5a5'
  },
  box_wrapper:{
    backgroundColor: '#fff',
    minHeight: modularScale(100),
    width: '90%',
  },
  modal_wrapper:{
    flex: 1, backgroundColor: 'rgba(3,3,3,.6)',
    justifyContent: 'center', alignItems: 'center'
  },
  header_wrapper:{
    backgroundColor: '#28415c',
    paddingVertical: modularScale(15),
    paddingHorizontal: modularScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head_title:{
    color: '#fff', flex: 1, textAlign: 'center', fontSize: modularScale(14), fontWeight: '700'
  },
  content_list:{
    paddingHorizontal: modularScale(0),
    paddingVertical: modularScale(0),
    minHeight: modularScale(100),
    maxHeight: modularHeight(.6),
    position: 'relative'
  }
});
