import React, { Component } from 'react';
import { connect } from 'react-redux';
import { choreUpdate, choreCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import ChoreForm from './ChoreForm';

class ChoreCreate extends Component {

    onButtonPress() {
        const { name, description, phone, shift } = this.props;

        this.props.choreCreate( { name, description, phone, shift: shift || 'Monday' });
    }
    render() {
        return (
            <Card>
                <ChoreForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, description, phone, shift } = state.choreForm;

    return { name, description, phone, shift };
};

export default connect(mapStateToProps, {
    choreUpdate, choreCreate
     })(ChoreCreate);