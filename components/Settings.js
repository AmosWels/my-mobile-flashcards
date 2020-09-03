import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import SubmitButton from './SubmitButton'
import { resetStore } from '../actions/index'
import { resetDecks } from '../utils/api.js'
import { gray, white, red, textGray, purple, black } from '../utils/colors'

export class Settings extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    resetStore: PropTypes.func.isRequired
  };
  handleResetDecks = () => {
    const { resetStore, navigation } = this.props;

    resetStore();
    resetDecks();
    navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Settings Area </Text>
        <View style={styles.block}>
          <View style={styles.blockContainer}>
          <Text style={styles.warningText}>Warning!</Text>
            <Text style={styles.blockText}>
              Click the Button below to reset data back to the original data set.
            </Text>
            <View style={{ height: 20 }} />
            <SubmitButton
              btnStyle={{ backgroundColor: red, borderColor: white }}
              onPress={this.handleResetDecks}
            >
              Reset
            </SubmitButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 16,
    color: black,
  },
  block: {
    marginBottom: 20
  },
  blockContainer: {
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: white,
    borderRadius: 5,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20
  },
  blockText: {
    fontSize: 15,
    color: red,
    textAlign: 'center',
  },
  warningText: {
    fontSize: 15,
    color: black,
    textAlign: 'center',
    fontWeight:'800'
  }
});

export default connect(
  null,
  { resetStore }
)(Settings);