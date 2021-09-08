import React from 'react'

const Button = ({ value, onclick, dis, className }) => {
	return (
		<button onClick={() => onclick(value)} className={className} disabled={dis}>
			{value}
		</button>
	)
}

export default Button
