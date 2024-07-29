import React, { Component } from 'react';

class createProjectModal extends Component {
    // state we need => className , onClose , createProject
    title = ''
    render() { 
        return (
            <modals className={`modalBg ${this.props.className} w-100 h-100 position-fixed justify-content-center align-items-center`}>
                <div className='card d-flex flex-column justify-content-start align-items-center p-3 gap-3'>
                    <button className='closeModal btn' onClick={this.props.onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                    <div class="row g-3 align-items-center w-100 p-3">
                        <div class="col-auto">
                            <label class="col-form-label">Name of Project</label>
                        </div>
                        <div class="col-auto">
                            <input onInput={(e)=>{this.title = e.target.value}} type="input" id="inputUsername" class="form-control" aria-describedby="UsernameHelpInline"/>
                        </div>
                        <div class="col-auto">
                            <span id="passwordHelpInline" class="form-text">
                                you can not use # in your name!
                            </span>
                        </div>
                    </div>
                    <div className='w-100 d-flex justify-content-center align-items-center gap-3'>
                        <button onClick={()=>{this.props.createProject(this.title) ; setTimeout(this.props.onClose , 1000)}} type="submit" class="btn btn-primary mb-3">Create Project</button>
                        <button onClick={this.props.onClose} type="submit" class="btn btn-danger mb-3">Close Modal</button>
                    </div>
                </div>
            </modals>
        );
    }
}
 
export default createProjectModal;