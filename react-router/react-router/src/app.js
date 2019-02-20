import React,{Component} from 'react'
import { BrowserRouter,Route,Link} from 'react-router-dom'
import User from './user'
import Profile from './profile'
import Rindex from './rindex'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
            	<div>
					<div className="navbar navbar-default">
		            	<div className="container-fluid">
			            	<div className="navbar-header">
			            		 <span className='navbar-brand'>用户信息管理系统
			            		</span>

			            	</div>
			            	
			            		<ul className="nav navbar-nav">
									<li><Link to='/rindex'>首页</Link></li>
				            		<li><Link to='/user'>用户管理</Link></li>
				            		<li><Link to='/profile'>个人设置</Link></li>
			            		</ul>
			            	
		            	</div>
		            </div>
	                <div className='row col-sm-12'>
	                	<Route exact path='/' component={Rindex}/>
	                	<Route path='/user' component={User}/>
	                	<Route path='/profile' component={Profile}/>
	                </div>
            	</div>
            </BrowserRouter>
        )
    }

}

export default App