import React, { Component } from 'react';

class ToDoModal extends Component {

    state = {
        task : ['' , '']
    }

    render() { 
        return (
            <modals className={`modalBg ${this.props.classNameModal} w-100 h-100 position-fixed justify-content-center align-items-center`}>
                <div className='card d-flex flex-column justify-content-start align-items-center p-3 gap-3'>
                    <button className='closeModal btn' onClick={this.props.onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                    <h3>Task Panel</h3>
                    <div class="row align-items-center w-100">
                        <label class="form-label">title</label>
                        <input type="input" class="form-control" aria-describedby="" placeholder={this.props.row.name} onInput={(e)=>{this.setState({task : [e.target.value , this.state.task[1]]})}}/>
                    </div>
                    <textarea onInput={(e)=>{
                        // this.props.onInput(e.target.value,this.props.row.id);
                        this.setState({task : [this.state.task[0] , e.target.value]})
                    }} name="" className='form-control'>{this.props.row.description}</textarea>
                    {/* <input class="form-control" type="text" value="readonly input" aria-label="input example" readonly>{this.props.row.description}</input> */}
                    <div className='w-100 d-flex justify-content-center align-items-center gap-3'>
                        <button onClick={()=>{
                            this.props.onInput(this.state.task,this.props.row.id);
                            this.props.onClose();
                        }} type="submit" class="btn btn-success mb-3">Save Task</button>
                        <button onClick={()=>{this.props.liClick(this.props.row) ; this.props.onClose()}} type="submit" class="btn btn-danger mb-3">Delete Task</button>
                        <button onClick={this.props.onClose} type="submit" class="btn btn-warning mb-3">Close Task</button>
                    </div>
                </div>
            </modals>
        );
    }
}
 
export default ToDoModal;