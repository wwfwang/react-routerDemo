import React,{Component} from 'react'

class TodoBody extends Component{

    render(){
        return(
            <li className='row' style={{marginTop:10}}>
                <input type="checkbox" className='col-md-2'/>
                <span className='col-md-8'>{this.props.todo.title}</span>
                <span className='col-md-2' className='btn btn-danger' onClick={()=> this.props.delete(this.props.todo.id)}> X</span>
            </li>
        )
    }
}

export default TodoBody