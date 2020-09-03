import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addDeck } from '../actions/index'
import { saveDeckTitleAS } from '../utils/api'
import { gray, purple, lightPurp, white, textGray, black } from '../utils/colors'
import SubmitButton from './SubmitButton'

export class AddDeck extends Component {
  static propTypes = {
    addDeck: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };
  state = {
    text: ''
  };
  handleChange = text => {
    this.setState({ text });
  };
  handleSubmit = () => {
    const { addDeck, navigation } = this.props;
    const { text } = this.state;

    addDeck(text);
    saveDeckTitleAS(text);

    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({
          routeName: 'DeckView',
          params: { title: text }
        })
      ]
    });
    navigation.dispatch(resetAction);

    this.setState(() => ({ text: '' }));
    navigation.goBack();
  };
  render() {
  console.log(this.state, 'state');

    return (
      <View style={styles.container}>
        <View style={{ height: 60 }} />
        <View style={styles.block}>
          <Text style={styles.title}>Add New Deck</Text>
        </View>
        <View style={[styles.block]}>
          <TextInput
            style={styles.input}
            value={this.state.text}
            onChangeText={this.handleChange}
            placeholder='Enter the name of the New Deck'
            autoFocus={true}
            returnKeyType='go'
            onSubmitEditing={this.handleSubmit}
          />
        </View>
        <SubmitButton
          btnStyle={{ backgroundColor: lightPurp, borderColor: white }}
          onPress={this.handleSubmit}
          disabled={this.state.text === ''}
        >
          Submit
        </SubmitButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
  },
  block: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 16,
    color: black,
  },
  input: {
    borderWidth: 1,
    borderColor: textGray,
    backgroundColor: white,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 15,
    height: 40,
    width: 300,
    marginBottom: 20,
    // marginLeft: 20,
  }
});

export default connect(null, { addDeck })(AddDeck);