import React, { Component } from 'react';

class EditProject extends Component {
    state={
        newProjectName : ''
    }

    render() { 
        if(this.props.className == false || this.props.title == undefined){
            return (<></>)
        }
        else{
            return (
                <modals className={`modalBg ${this.props.className} w-100 h-100 position-fixed justify-content-center align-items-center`}>
                    <div className='card d-flex flex-column justify-content-start align-items-center p-3 gap-3'>
                        <button className='closeModal btn' onClick={this.props.closeEditProject}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </button>
                        <div class="row align-items-center p-1">
                            <label class="form-label">title</label>
                            <input type="input" class="form-control" aria-describedby="" placeholder={this.props.title} onInput={(e)=>{this.setState({newProjectName : e.target.value})}}/>
                        </div>
                        <div class="row d-flex justify-content-start align-items-center p-1 w-100 gap-2">
                            <button className='btn btn-success' onClick={()=>{this.props.changeTitleProject(this.props.title , this.state.newProjectName) ; this.props.closeEditProject()}}>Save Change</button>
                            <button className='btn btn-danger' onClick={this.props.closeEditProject}>Cancel</button>
                        </div>
                    </div>
                </modals>
            );
        }
    }
}
 
export default EditProject;