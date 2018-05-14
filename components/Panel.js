import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated
} from 'react-native'


class Panel extends Component{
    constructor(props){
        super(props)

        this.icons = {
            'up'    : require('./images/Arrowhead-01-128.png'),
            'down'  : require('./images/Arrowhead-Down-01-128.png')
        }

        this.state = {
            title       : props.title,
            expanded    : false,
            animation   : new Animated.Value()
        }
    }

    toggle = () => {
      const { expanded, maxHeight, minHeight } = this.state
        let initialValue    = expanded ? maxHeight + minHeight : minHeight,
            finalValue      = expanded ? minHeight : maxHeight + minHeight

        this.setState({
            expanded : !this.state.expanded
        })

        this.state.animation.setValue(initialValue)
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start()
    }


    _setMaxHeight = (event) => {
       if (!this.state.maxHeight) {
         this.setState({
           maxHeight: event.nativeEvent.layout.height,
         })
       }
     }

     _setMinHeight = (event) => {
       if (!this.state.minHeight) {
         this.setState({
           minHeight: event.nativeEvent.layout.height,
           animation: new Animated.Value(event.nativeEvent.layout.height),
         })
       }
     }

    render(){
        let icon = this.icons['down']

        if(this.state.expanded){
            icon = this.icons['up']
        }

        return (
            <Animated.View 
                style={[styles.container,{height: this.state.animation}]}>
                <View style={styles.titleContainer} onLayout={this._setMinHeight}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableHighlight 
                        style={styles.button} 
                        onPress={this.toggle}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.body} onLayout={this._setMaxHeight}>
                    {this.props.children}
                </View>

            </Animated.View>
        )
    }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin:10,
    overflow:'hidden'
  },
  titleContainer: {
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold'
  },
  button: {

  },
  buttonImage: {
    width: 30,
    height: 25
  },
  body: {
    padding: 20,
    paddingTop: 0
  }
})

export default Panel
