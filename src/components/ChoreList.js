import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { choreFetch } from "../actions";
import ListItem from './ListItem';

class ChoreList extends Component {
    componentWillMount() {
        this.props.choreFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        //next props are the next set of props that this component will be rendered with
        //this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ chores }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(chores);
    }

    renderRow(chore) {
        return <ListItem chore={chore} />;
    }
    render() {
        console.log(this.props);
        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}

            />
        );
    }
}

const mapStateToProps = state => {
    const chores = _.map(state.chores, (val, uid) => {
       return { ...val, uid};
    });
       return { chores };
};
export default connect(mapStateToProps, { choreFetch })(ChoreList);