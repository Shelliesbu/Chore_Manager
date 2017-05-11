import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ChoreList from './components/ChoreList';
import LoginForm from './components/LoginForm';
import ChoreCreate from './components/ChoreCreate';
import ChoreEdit from './components/ChoreEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle = {{paddingTop: 65}}>

            <Scene key = "auth">
                <Scene key = "login" component={LoginForm} title = "Please Login" />
            </Scene>

            <Scene key = "main">
                <Scene
                    onRight={() => Actions.choreCreate()}
                    rightTitle="Add"
                    key = "choreList"
                    component={ChoreList}
                    title = "Chores"
                    initial
                 />

                <Scene key= "choreCreate" component={ChoreCreate} title = "Create Chore" />
                <Scene key= "choreEdit" component={ChoreEdit} title = "Edit Chore" />
            </Scene>

        </Router>
    );
};

export default RouterComponent;