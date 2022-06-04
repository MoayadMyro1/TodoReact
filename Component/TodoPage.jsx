import React, { Component } from 'react';
import Result from './Result';

export default class TodoPage extends Component {
    constructor() {
        super();
        this.state = {
            id:0,
            title: '',
            description: '',
            AllTasks: [],
            msg:''
        };
    }
    onchang = (e) =>
    {
        this.setState({
            [e.target.name]: e.target.value,
            msg: null
        });
    }
    Sumbitadd = (e) => {
       
        if (this.state.title !== '' && this.state.description !== '') {
            let taskObj = {
                id: this.state.AllTasks.length+ 1,
                title: this.state.title,
                description: this.state.description
            };
            this.state.AllTasks.push(taskObj);
            //for refresh do 
            this.setState({
                AllTasks: this.state.AllTasks,
                title: '',
                description: '',
                msg: ''
            });
          
            console.log(this.state.AllTasks);
        } else {
            this.setState({
                msg: 'All fields are Required'
            });
        }start
    };
    deleteTask = (index) => {
        console.log('delete it');
        console.log(index);
        let myArray = this.state.AllTasks.filter(function (obj) {
            return obj.id !== index;
        });
        
        this.setState({
            AllTasks: myArray,
        });
    };
    render() {
        return (
            <div className='todoform'>
                <p>Title</p>
                <input
                    type='text'
                    name='title'
                    value={this.state.title} 
                    onChange={this.onchang} />
                <p>Description</p>
                <textarea
                    rows='4'
                    name='description'
                    value={this.state.description}
                    onChange={this.onchang} />
                <button 
                    onClick={this.Sumbitadd} className='btnx' >
                    add task
                </button>
                <p>{this.state.msg ? this.state.msg : null}</p>
                <div>
                    <Result tasks={this.state.AllTasks} deleteTask={this.deleteTask} />
                </div>
                    
            </div>
            )
    }
}

