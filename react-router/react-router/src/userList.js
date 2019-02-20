import React,{Component} from 'react'
import { Link } from 'react-router-dom'

export default class UserList extends Component{
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentWillMount=()=>{
        let userStr = localStorage.getItem('users')
        // 把得到的user的值转换成为一个对象  JSON.parse(str)转换
        let users = userStr?JSON.parse(userStr):[]
        this.setState({
            users
        })

    }
    render() {
        return (
            < div className='col-md-8'>
                 <ul className='list-group'>
                   {
                      this.state.users.map((user,index)=>
                        <li key={index} className='list-group-item'>
                            <Link to={'/user/userDetail/'+user.id}>{user.name}</Link>
                        </li>
                      )
                   }
                 </ul>
            < /div>
          )
    }

}