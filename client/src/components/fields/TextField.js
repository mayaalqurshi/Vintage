import React from 'react';
import './Fields.css';

const TextField = ({ children, fieldType }) => {
	return (
		<div className='text_field'>
			<input required='' type={fieldType} name='text' autocomplete='off' class='input_field' />
			<label className='user-label'>{children}</label>
		</div>
	);
};
export default TextField;
