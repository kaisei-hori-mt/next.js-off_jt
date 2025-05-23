"use client";
import type {
	FieldErrors,
	FieldValues,
	Path,
	RegisterOptions,
	UseFormRegister,
} from "react-hook-form";

type Props<T extends FieldValues> = {
	label: string;
	type: string;
	id: Path<T>;
	autoComplete: string;
	register: UseFormRegister<T>;
	rules: RegisterOptions<T, Path<T>>;
	errors: FieldErrors<T>;
};

export function DefaultFormContents<T extends FieldValues>({
	label,
	type,
	id,
	autoComplete,
	register,
	rules,
	errors,
}: Props<T>) {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				autoComplete={autoComplete}
				{...register(id, rules)}
			/>
			{errors[id]?.message && <p>{String(errors[id]?.message)}</p>}
		</div>
	);
}
