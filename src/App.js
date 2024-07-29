import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import MainPage from './main';
import './style/page.css'
import Alert from './modals/Alert';
import ShowGit from './components/showGit';

class App extends Component {
    state = { 
        alert : {text : undefined , type : undefined},
        login : false,
        username : 'Hojjat',
        project : [
            // project
            { id:0 , name:"website1" , lengthListInto:1 },
            { id:1 , name:"website2" , lengthListInto:1 }
        ],
        toDoList : [
            // to do list info
            {id:0 , name:"create landing" , description:'create landing by Hojjat' , idProject:0 , deadTime:"1 day"},
            {id:1 , name:"create landing" , description:'create landing by me' , idProject:1 , deadTime:"1 min"},
        ],
        whichButton : -1
    } 
    render() { 
        return (
            <mainContainer className="d-flex w-100 h-100 flex-column justify-content-start align-items-center">
                <Alert text={this.state.alert.text} type={this.state.alert.type}/>
                <Header isLogin={this.state.login} username={this.state.username}/>
                <MainPage project={this.state.project} toDoList={this.state.toDoList} sideBarClick={this.sideBarButtonClick.bind(this)} activeButton={this.state.whichButton}
                    liClick={this.deleteTodoList.bind(this)} changeDesc={this.updateTodoList.bind(this)} onCreateProject={this.createProject.bind(this)}
                    onDeleteProject={this.onDeleteProject.bind(this)} changeTitleProject={this.changeDataProject.bind(this)} createTodoList={this.createToDoListHandler.bind(this)}
                />
                <ShowGit/>
            </mainContainer>
        );
    }

    sideBarButtonClick(id){
        this.setState({
            whichButton : id
        })
    }

    deleteTodoList(row){
        this.setState({toDoList : this.state.toDoList.filter(e=> row!==e)})
        this.setState({alert : {text : 'task was successfully done!' , type : 'success'}})
        setTimeout(this.clearAlert.bind(this) , 8000)
    }

    updateTodoList(task , id){
        this.setState({toDoList : this.state.toDoList.map(e => {
            if(e.id == id){
                e.name = task[0]
                e.description = task[1];
            }
            return e;
        })})
        this.setState({alert : {text : 'task was successfully update!' , type : 'success'}})
        setTimeout(this.clearAlert.bind(this) , 8000)
    }

    createProject(title){
        let condition = true;
        this.state.project.forEach(e => {
            if(e.name === title){
                condition = !condition;
                this.setState({alert : {text : 'we have already this name for another project' , type : 'danger'}})
                setTimeout(this.clearAlert.bind(this) , 8000)
            }
        })
        if(condition){
            let id = this.state.project[this.state.project.length - 1].id + 1;
            this.state.project.push(
                {id:id , name:title , lengthListInto:0}
            )
            this.setState({alert : {text : 'project was successfully added!' , type : 'success'}})
            setTimeout(this.clearAlert.bind(this) , 8000)
        }
    }

    clearAlert(){
        this.setState({alert : {text : undefined , type : undefined}})
    }

    onDeleteProject(id){
        this.setState({alert : {text : 'project was successfully delete!' , type : 'success'}})
        setTimeout(this.clearAlert.bind(this) , 8000)
        setTimeout(()=>{this.setState({project : this.state.project.filter(e => e.id !== id)
            , toDoList : this.state.toDoList.filter(e => e.idProject !== id)
        });} , 5000)
    }

    changeDataProject(oldName , newName){
        this.setState({project : this.state.project.map(e => {
            if(e.name == oldName){
                e.name = newName;
            }
            return e;
        })})
        this.setState({alert : {text : 'project name was successfully change!' , type : 'success'}})
        setTimeout(this.clearAlert.bind(this) , 8000)
    }

    createToDoListHandler(idProject , title , desc , time){
        let id = this.state.toDoList[this.state.toDoList.length-1].id + 1;
        this.state.toDoList.push(
            {id:id , name:title , description:desc , idProject:idProject , deadTime:time}
        );
        this.setState({project : this.state.project.map(e => {
            if(e.id == idProject){
                e.lengthListInto = e.lengthListInto+1;
            }
            return e;
        })})
        this.setState({alert : {text : 'New Task was successfully added!' , type : 'success'}})
        setTimeout(this.clearAlert.bind(this) , 8000)
    }
}
 
export default App;