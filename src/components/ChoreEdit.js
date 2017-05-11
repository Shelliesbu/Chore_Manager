import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import ChoreForm from './ChoreForm';
import { choreUpdate, choreSave,choreDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class ChoreEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.chore, (value, prop) => {
            this.props.choreUpdate({ prop, value});
        });
    }

onButtonPress() {
    const {name, description, phone, shift} = this.props;
    this.props.choreSave({ name, description, phone, shift, uid: this.props.chore.uid });
}

onTextpress() {
    const { name, description, phone, shift } = this.props;
    Communications.text(phone, `Your upcomming chore is on ${shift}`);
}

onAccept() {
    const { uid } = this.props.chore;
    this.props.choreDelete({ uid });
}

onDecline() {
    this.setState({ showModal: false});
}

    render() {
        return (
            <Card>
                <ChoreForm />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextpress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Remove Chore
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you wante to delete this chore?
                </Confirm>
            </Card>

        );

    }
}

const mapStateToProps = (state) => {
    const { name, description, phone, shift } = state.choreForm;

    return { name, description, phone, shift};
};

export default connect(mapStateToProps, {
    choreUpdate, choreSave, choreDelete
     })(ChoreEdit);