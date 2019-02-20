import React , { Component } from 'react'



class TodoHeader extends Component{
    handlKeyDown=(e)=>{
        const KEY_CODE =13
        let title =e.target.value
        if(e.keyCode === KEY_CODE && title.length>0){
            this.props.handleInput({title})
            e.target.value =''
        }
    }
    render() {
        return (
            <div className='row col-md-12'>
                <input type="text" className='col-md-12' autoFocus={true}  onKeyDown={this.handlKeyDown}/>
            </div>
        )
    }

}

export default TodoHeader