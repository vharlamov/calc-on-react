const Equal = ({ onclick, dis }) => {
	return (
		<button className='equal' onClick={onclick} disabled={dis} id='equal'>
			=
		</button>
	)
}

export default Equal
