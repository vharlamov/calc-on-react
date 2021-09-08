import React from 'react'
import Button from './button'

const btns = ['+', '-', '*', '/']

const Operators = ({ id, className, dis, ...rest }) => {
	return (
		<ul id={id} className={className}>
			{btns.map((value) => {
				return value !== '-' ? (
					<Button value={value} dis={dis} {...rest} />
				) : (
					<Button value='-' dis={false} {...rest} />
				)
			})}
		</ul>
	)
}

export default Operators
