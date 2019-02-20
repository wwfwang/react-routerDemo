import React,{Component} from 'react'

export default class UserAdd extends Component{
	handleSubmit=()=>{
		let name = this.name.value
		// 添加name到用户列表中  不使用 父子组件之间传值  这里使用 localStorage
		// 先get一个users列表的localStorage 
		let userStr = localStorage.getItem('users')
		// 把得到的user的值转换成为一个对象  JSON.parse(str)转换
		let users = userStr?JSON.parse(userStr):[]

		users.push({
			id:Date.now(),
			name
		})
		// 然后把 用户列表数据存在localStorage 里面  在用户列表界面再展示出来
		localStorage.setItem('users',JSON.stringify(users))

		this.props.history.push('/user/userList')
	}
    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                   <h4>添加用户</h4>
                  	<label htmlFor='name'>姓名</label>
                   <input type="text" ref={ref=>this.name=ref}/>
                   <input type="submit" className='btn btn-primary' value='添加'/>

                </form>
           
          )
    }

}