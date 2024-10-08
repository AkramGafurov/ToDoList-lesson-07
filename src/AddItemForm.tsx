// import {Button} from "./Button";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";


type PropsType = {
	addItem: (title:string) => void
}

export const AddItemForm = ({addItem}: PropsType) => {

	const [title, setTitle] = useState('')
	const [error, setError] = useState<string | null>(null)

	const addItemHandler = () => {
		if (title.trim() !== '') {
			addItem(title.trim())
			setTitle('')
		} else {
			setError('Title is required')
		}
	}

	const changeItemHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value)
	}

	const addItemOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (event.key === 'Enter') {
			addItemHandler()
		}
	}
	return (
		<div>
			{/*<input*/}
			{/*	className={error ? 'error' : ''}*/}
			{/*	value={title}*/}
			{/*	onChange={changeItemHandler}*/}
			{/*	onKeyUp={addItemOnKeyUpHandler}*/}
			{/*/>*/}

			<TextField
				label="Enter a title"
				value={title}
				size={'small'}
				error = {!!error}
				helperText={error}
				onChange={changeItemHandler}
				onKeyUp={addItemOnKeyUpHandler}
			/>

			{/*<TextField*/}
			{/*	label="Enter a title"*/}
			{/*	variant={'outlined'}*/}
			{/*	className={error ? 'error' : ''}*/}
			{/*	value={title}*/}
			{/*	size={'small'}*/}
			{/*	onChange={changeItemHandler}*/}
			{/*	onKeyUp={addItemOnKeyUpHandler}*/}
			{/*/>*/}

			<Button variant="contained" onClick = {addItemHandler}>+</Button>
			{/*<Button title={'+'} onClick={addItemHandler}/>*/}
			{/*{error && <div className={'error-message'}>{error}</div>}*/}
		</div>
	)
}


