import React from 'react'

const Toast = ({ msg, bgColor}) => {
  return (
	<div className='toast' style={{backgroundColor: bgColor}}>
			<div className='toast__header'>
				<h5 className='toast__header--title'>{msg.title}</h5>
			</div>

			<div className='toast__body'>
				<p>{msg.body}</p>
			</div>	
		</div>
  )
}

export default Toast