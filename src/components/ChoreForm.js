import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { choreUpdate } from '../actions';
import { CardSection, Input } from './common';

class ChoreForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Chore"
                        placeholder="Dishes"
                        value={this.props.name}
                        onChangeText={ value => this.props.choreUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Ferb"
                        value={this.props.description}
                        onChangeText={ value => this.props.choreUpdate({ prop: 'description', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-5555"
                        value={this.props.phone}
                        onChangeText={ value => this.props.choreUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerTextStyle}>Day </Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.choreUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 10
    }
};

const mapStateToProps = (state) => {
    const { name, description, phone, shift } = state.choreForm;

    return { name, description, phone, shift };
};

export default connect(mapStateToProps, { choreUpdate })(ChoreForm);