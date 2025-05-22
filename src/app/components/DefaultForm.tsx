"use client";
import React from "react";
import { useForm } from "react-hook-form";
import type {
	FieldValues,
	Path,
	RegisterOptions,
	SubmitHandler,
} from "react-hook-form";
import { DefaultFormContents } from "./DefaultFormContents";

type FormValues = {
	name: string;
	email: string;
	age: number;
};

type FieldData<T extends FieldValues> = {
	id: Path<T>;
	label: string;
	type: string;
	autoComplete: string;
	rules: RegisterOptions<T, Path<T>>;
};

export function DefaultForm() {
	// フォームの初期設定
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			name: "",
			email: "",
		},
		mode: "onChange",
	});

	// データ受取時の処理
	const onSubmit: SubmitHandler<FormValues> = () => {
		reset();
	};

	// フィールドデータを配列で定義
	const fields: FieldData<FormValues>[] = [
		{
			id: "name",
			label: "名前",
			type: "text",
			autoComplete: "name",
			rules: {
				required: "名前は必須です",
			},
		},
		{
			id: "email",
			label: "メールアドレス",
			type: "email",
			autoComplete: "email",
			rules: {
				required: "メールアドレスは必須です",
				pattern: {
					value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
					message: "メールアドレスの形式が正しくありません",
				},
			},
		},
		{
			id: "age",
			label: "年齢",
			type: "number",
			autoComplete: "age",
			rules: {
				required: "年齢は必須です",
				pattern: {
					value: /^[0-9]+$/,
					message: "年齢は数値で入力してください",
				},
				min: { value: 18, message: "年齢は18歳以上で入力してください" },
				max: { value: 100, message: "年齢は100歳以下で入力してください" },
			},
		},
	];

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{fields.map((field) => (
				<DefaultFormContents
					key={field.id}
					label={field.label}
					type={field.type}
					id={field.id}
					autoComplete={field.autoComplete}
					register={register}
					rules={field.rules}
					errors={errors}
				/>
			))}
			<button type="submit">送信</button>
		</form>
	);
}
