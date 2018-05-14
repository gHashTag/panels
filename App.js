/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native'
import Panel from './components/Panel'

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Panel title="A Panel content text">
          <Text>There are only three concepts that we need to know when dealing with animations. First we need the Animated.Value to hold the value for each frame during the animation. Second, we need to calculate the values for each animation using the Animated.spring method (There are 2 other methods that I might cover on future tutorials). Third, we need to use an Animated.View component instead of a regular View and assign the calculated values to the style property that we want to animate.</Text>
        </Panel>
        <Panel title="long content text">
          <Text>Small simple animations will improve the user experience of your application. We can create many other complex animations, but the concepts are the same. You can download the code for this tutorial from Github. If you have any questions please leave a comment or ping me on Twitter.</Text>
        </Panel>
        <Panel title="Another Panel">
          <Text>Now we need to get the maximum and minimum height of our panel, we need to dynamically calculate this, because as mentioned before, there could be anything in the content. To get those dimensions, we can use the onLayout event of the View component. This event will be fired after the component is rendered and all sizes are calculated based on the styles and the content.</Text>
        </Panel>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 30
  },
  
})
