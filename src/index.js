/**
 * Copyright 2019-present Bruno Carvalho de Araujo.
 * This source code is licensed under the proprietary license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
  children: ReactNode
}

type State = {}

export default class index extends Component<Props, State> {
  static propTypes = {
    children: PropTypes.element
  }

  static defaultProps = {}

  render () {
    return (
      <View style={styles.container}>
        <Text>Open up index.js to start working on your app!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
