import React, { Component } from 'react';
import ToDoModal from '../modals/toDoModal';
import Alert from '../modals/Alert';
import CreateTask from '../modals/createTask';

class MainTable extends Component {
    state = {
        classNameModal : false,
        row : undefined,
        createTask : false,
        alert : {text:undefined , type:undefined}
    }

    render() { 
        if(this.state.classNameModal && this.state.row != undefined){
            return (
                <main className='w-100 h-100 p-3 d-flex flex-column justify-content-start align-items-center gap-3'>
                    <Alert text={this.state.alert.text} type={this.state.alert.type}/>
                    <ol class="list-group list-group-numbered w-100 h-100 p-3">
                        {this.createRow()}
                        <ToDoModal liClick={this.props.liClick} classNameModal={this.state.classNameModal} row={this.state.row} onClose={() => {this.closeModal(ToDoModal)}} onInput={this.props.changeDesc}/>
                    </ol>
                    <button onClick={this.createTodoList.bind(this)} className='btn w-75 d-flex justify-content-center align-items-center flex-column' style={{border:'1px solid #DC4C3E' , color:'#DC4C3E' , height:'40px'}}>create Task +</button>
                    <CreateTask activeButton={this.props.activeButton} className={this.state.createTask} createTodoList={this.props.createTodoList} onClose={()=>{this.setState({createTask : false})}}/>
                </main>
            )
        }
        else{
            return (
                <main className='w-100 h-100 p-3 d-flex flex-column justify-content-start align-items-center gap-3'>
                    <Alert text={this.state.alert.text} type={this.state.alert.type}/>
                    <ol class="list-group list-group-numbered w-100">
                        {this.createRow()}
                    </ol>
                    <button onClick={this.createTodoList.bind(this)} className='btn w-75 d-flex justify-content-center align-items-center flex-column' style={{border:'1px solid #DC4C3E' , color:'#DC4C3E' , height:'40px'}}>create Task +</button>
                    <CreateTask activeButton={this.props.activeButton} className={this.state.createTask} createTodoList={this.props.createTodoList} onClose={()=>{this.setState({createTask : false})}}/>
                </main>
            )
        }
    }

    createRow(){
        let array = [];
        if(this.props.activeButton != -1){
            this.props.toDoList.forEach((r) => {
                if(r.idProject == this.props.activeButton.getAttribute('number')){
                    array.push(
                        <li key={r.id} number={r.id} onClick={(e)=>{this.liClick.bind(this)(e,r)}} class="list-group-item d-flex justify-content-between align-items-start" style={{cursor:'pointer', transition:'500ms'}}>
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">{r.name}</div>
                                {r.description}
                            </div>
                            <span class="badge rounded-pill" style={{backgroundColor:'#DC4C3E'}}>{r.deadTime}</span>
                        </li>
                    )
                }
            })
        }
        return array;
    }

    liClick(e,row){
        if(e.target.classList.contains('list-group-item')){
            e.target.classList.add("active")
            setTimeout(()=>{
                this.setState({classNameModal : true , row : row});
                e.target.classList.remove("active")

            },500)
        }
        else{
            alert("please click in the mid of element")
        }
    }
    
    closeModal(){
        this.setState({classNameModal : false , row : undefined});
    }

    createTodoList(){
        if(this.props.activeButton == -1){
            this.setState({alert : {text : 'please select project then create task for it!' , type : 'warning'}})
            setTimeout(this.clearAlert.bind(this) , 8000)
        }
        else{
            this.setState({createTask : true})
        }
    }

    clearAlert(){
        this.setState({alert : {text : undefined , type : undefined}})
    }
}
 
export default MainTable;