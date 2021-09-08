import './App.css'
import React, { useState } from 'react'
import Input from './components/input'
import { calculate } from './utils/utils'
import Equal from './components/equal'
import Operators from './components/operators'
import NumButtons from './components/numBtns'

function App() {
	const initExp = ['', '', '']
	const [expr, setExpr] = useState(initExp)
	const [dotDis, setDotDis] = useState(false)
	const [calcDis, setCalcDis] = useState(true)
	const [operDis, setOperDis] = useState(true)

	const handleNum = (value) => {
		const prevExp = [...expr]
		if (value === '.') setDotDis(true)

		if (!prevExp[1]) {
			prevExp[0] += value
		} else {
			prevExp[2] += value
			setCalcDis(false)
		}
		setExpr(prevExp)
		setOperDis(false)
	}

	const handleOperatop = (value) => {
		const prevExp = [...expr]
		if (expr[2]) {
			const result = String(calculate(expr))
			setExpr([result, value, ''])
		} else if (prevExp[1] && value === '-') {
			prevExp[2] += value
			setExpr(prevExp)
		} else {
			prevExp[1] = value
			setExpr(prevExp)
		}
		setDotDis(false)
	}

	const handleAC = () => {
		setExpr(initExp)
		setDotDis(false)
		setOperDis(true)
	}

	const handleCalc = () => {
		const result = String(calculate(expr))
		setExpr([result, '', ''])
		setDotDis(true)
		setCalcDis(true)
	}

	return (
		<div className='App'>
			<div className='calculator'>
				<Input id='input' value={expr.join('')} />
				<Operators
					id='opers'
					dis={operDis}
					className='operators'
					onclick={handleOperatop}
				/>
				<NumButtons
					id='numbtns'
					className='numbtns'
					onclick={handleNum}
					dis={dotDis}
					acclick={handleAC}
				/>
				<Equal onclick={handleCalc} dis={calcDis} />
			</div>
		</div>
	)
}

export default App
