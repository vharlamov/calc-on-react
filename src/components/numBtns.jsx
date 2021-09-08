import React from 'react'
import Button from './button'

const btns = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0']

const NumButtons = ({ id, className, onclick, acclick, dis, ...rest }) => {
	return (
		<ul id={id} className={className}>
			{btns.map((value) => (
				<Button value={value} onclick={onclick} {...rest} />
			))}
			<Button value='.' dis={dis} onclick={onclick} {...rest} />
			<Button value='AC' onclick={acclick} {...rest} />
		</ul>
	)
}

export default NumButtons
