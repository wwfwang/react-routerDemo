import React,{Component} from 'react'
import { Route,Link} from 'react-router-dom'

import UserAdd from './userAdd'
import UserList from './userList'
import UserDetail from './userDetail'


export default class User extends Component{
    render() {
        return (
          	<div className='container'>

			 <div className='row col-sm-4'>
					<div className=' '>
						<Link to='/user/userAdd' >添加用户</Link>

					</div>
					<div className=''>
						<Link to='/user/userList'>用户列表</Link>
					</div>
					</div>
				<div className='row col-sm-8'>
				
					<Route path='/user/userAdd' component={UserAdd}></Route>
					<Route path='/user/userList' component={UserList}></Route>
					<Route path='/user/userDetail/:id' component={UserDetail}></Route>



				 

				</div>

          	
          	</div>
          )
    }

}