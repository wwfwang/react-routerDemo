import React,{ Component } from 'react'


class TodoFooter extends Component{
    render(){
        return(
            <div className='col'>
                <span className='col-md-2'>你还有{ this.props.activeCount }件待办</span>
                <span className='col-md-8'>
                    <button type='btn btn-default'>全部</button>
                    <button type='btn btn-default'>已完成</button>
                    <button type='btn btn-default'>未完成</button>
                </span>
                <span className='col-md-2'>删除已完成</span>
            </div>
        )
    }
}

export default TodoFooter