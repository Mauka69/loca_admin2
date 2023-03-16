import { useState, useEffect, useContext } from 'react';
import { Controller } from 'react-hook-form';
import { FormContext } from '../Form';

export type SelectProps = {
	defaultValue?: unknown;
	name: string;
	options: { label: string; value: string }[];
	multiple?: boolean;
	searchable?: boolean;
};

export default function Select({ defaultValue, name, options, searchable, ...props }: SelectProps) {
	const { control } = useContext(FormContext);
	const [searchValue, setSearchValue] = useState('');
	const [filteredOptions, setFilteredOptions] = useState(options);

	useEffect(() => {
		setFilteredOptions(options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase())));
	}, [searchValue, options]);

	return (
		<Controller
			control={control}
			defaultValue={defaultValue}
			name={name}
			render={({ field: { onChange, value } }) => (
				<div>
					{searchable && (
						<input
							type="text"
							placeholder="Search..."
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
					)}
					<select
						{...props}
						multiple={props.multiple}
						onChange={(e) => {
							if (props.multiple) {
								const selectedOptions = Array.from(e.target.selectedOptions, (option: any) => option.value);
								onChange(selectedOptions);
							} else {
								onChange(e.target.value);
							}
						}}
						value={value}
					>
						{filteredOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</div>
			)}
		/>
	);
}
