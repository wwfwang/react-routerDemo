import React,{ Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import TodoHeader from './todoHeader'
import TodoBody from './todoBody'
import TodoFooter from './todoFooter'


class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        }
    }

    handleTodos=(todo)=>{
        let todos = this.state.todos
        todo = Object.assign({},{id:Math.random(),complete:false},todo)
        todos.push(todo)
        this.setState({todos})


    }
    //删除功能
    handleDelete=(id)=> {
        let todos = this.state.todos;
        //删除对应数据 过滤数组
        todos.filter((item,index)=>{
            if(item.id === id){
                todos.splice(index,1)
            }
        })
        console.log(todos);
        this.setState({
            todos
        })



    }
    render(){
        let todos = this.state.todos;
        let todoLists = todos.map((item,i)=> <TodoBody  todo={item} key={i} delete={this.handleDelete}/>)
        return(
            <div className='container col-md-6 col-md-offset-3' style={{ marginTop:50}}>
                <div className='painel-header'>
                    <TodoHeader handleInput={this.handleTodos}/>
                </div>
                <div className='painel-body' style={{marginTop:20}}>
                    <ul>
                        {todoLists}
                    </ul>
                </div>
                <div className='painel-footer'>
                    <TodoFooter activeCount={this.state.todos.length}/>
                </div>
            </div>
        )
    }
}

export default TodoApp

