import React ,{ Component } from 'react'


export default class UserDetail extends Component{
	render(){
		console.log(this.props)
		return(
			<div>
				<table className='table table-condensed'>
					<thead>
					  <tr>
						<td>
							姓名
						</td>
						<td>
							ID
						</td>
					  </tr>

				    </thead>
				    <tbody>
					<tr>
						<td>
							{}
						</td>
						<td>
							{this.props.match.params.id
}
						</td>
					  </tr>

				    </tbody>
				</table>


				
					
			</div>

		)
				
	}
}