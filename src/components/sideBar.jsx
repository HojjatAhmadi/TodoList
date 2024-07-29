import React, { Component , useRef } from 'react';
import CreateProjectModal from '../modals/createProjectModal'
import EditProject from '../modals/editProject';

class SideBar extends Component {
    state = {
        classNameModal1 : false,
        editProject : [false , undefined],
    }

    render() { 
        return (
            <sidebar className='w-25 h-100 d-flex justify-content-start align-items-start flex-column p-3 gap-3' style={{backgroundColor:'#FCFAF8'}}>
                {this.checkProjectList.bind(this)()}
                <CreateProjectModal className={this.state.classNameModal1} onClose={this.onCloseHandle.bind(this)} createProject={this.props.onCreateProject}/>
                <EditProject changeTitleProject={this.props.changeTitleProject} className={this.state.editProject[0]} title={this.state.editProject[1]} closeEditProject={this.closeEditProject.bind(this)}/>
            </sidebar>
        );
    }

    checkProjectList(){
        if(this.props.projectList.length === 0){
            return(
                <button onClick={this.createProject.bind(this)} className='btn w-75 d-flex justify-content-center align-items-center flex-column' style={{border:'1px solid #DC4C3E' , color:'#DC4C3E' , height:'40px'}}>create project +</button>
            )
        }
        else{
            return (
                <>
                    {this.props.projectList.map((element) => {
                        return (
                            <button id="buttonSideBar" onClick={this.buttonClick.bind(this)} className='btn w-100 d-flex justify-content-start align-items-center flex-row gap-3' number={element.id} key={element.id}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DC4C3E" class="bi bi-hash" viewBox="0 0 16 16">
                                    <path d="M8.39 12.648a1 1 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1 1 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.51.51 0 0 0-.523-.516.54.54 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532s.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531s.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
                                </svg>
                                {element.name}
                                <span className='badge bg-primary'>{element.lengthListInto}</span>
                                <button className='btn' onClick={()=>{this.props.onDeleteProject(element.id)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                    </svg>
                                </button>
                                <button id={element.name} className='btn' onClick={(e)=>{this.createEditModal(e)}}>
                                    <svg id={element.name} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path id={element.name} d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path id={element.name} fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                    </svg>
                                </button>
                            </button>
                        )
                    })}
                    <button onClick={this.createProject.bind(this)} className='btn w-100 d-flex justify-content-center align-items-center flex-column' style={{border:'1px solid #DC4C3E' , color:'#DC4C3E' , height:'40px'}}>create project +</button>
                </>
            )
        }
    }

    createProject(){
        this.setState({classNameModal1 : true})
    }

    onCloseHandle(){
        this.setState({classNameModal1 : false})
    }

    buttonClick(btn){
        btn = btn.target;
        if(this.props.activeButton != -1){
            this.props.activeButton.classList.remove('active');
        }
        if(!btn.classList.contains("active")){
            btn.classList.add('active');
            this.props.sideBarClick(btn)
        }
        else{
            btn.classList.remove('active');
            this.props.sideBarClick(-1)
        }
    }

    createEditModal(e){
        e = e.target;
        this.setState({editProject : [true , e.getAttribute('id')]})
    }

    closeEditProject(){
        this.setState({editProject : [false , undefined]})
    }
}
 
export default SideBar;