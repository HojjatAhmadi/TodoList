import React, { Component } from 'react';
import SideBar from './components/sideBar';
import MainTable from './components/mainTable.jsx';

class MainPage extends Component {
    render() { 
        return (
            <mainPage className="d-flex w-100 h-100 flex-row justify-content-start align-items-center gap-3">
                <SideBar projectList={this.props.project} sideBarClick={this.props.sideBarClick} activeButton={this.props.activeButton} onCreateProject={this.props.onCreateProject}
                onDeleteProject={this.props.onDeleteProject} changeTitleProject={this.props.changeTitleProject}
                />
                <MainTable toDoList={this.props.toDoList} activeButton={this.props.activeButton} liClick={this.props.liClick} changeDesc={this.props.changeDesc} createTodoList={this.props.createTodoList}/>
            </mainPage>
        );
    }
}
 
export default MainPage;