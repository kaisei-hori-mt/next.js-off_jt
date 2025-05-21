"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type FormValues = {
	name: string;
	email: string;
	age: number;
};

export default function Form() {
	// useFormの初期設定
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
	const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
		console.log("送信データ:", data);
		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="name">名前</label>
					<input
						type="text"
						id="name"
						autoComplete="name"
						{...register("name", {
							required: "名前は必須です",
						})}
					/>
					{errors.name && <p>{errors.name.message}</p>}
				</div>
				<div>
					<label htmlFor="email">メールアドレス</label>
					<input
						type="email"
						id="email"
						autoComplete="email"
						{...register("email", {
							required: "メールアドレスは必須です",
							pattern: {
								value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
								message: "メールアドレスの形式が正しくありません",
							},
						})}
					/>
					{errors.email && <p>{errors.email.message}</p>}
				</div>
				{/* 課題2 */}
				<div>
					<label htmlFor="age">年齢</label>
					<input
						type="number"
						id="age"
						autoComplete="age"
						{...register("age", {
							required: "年齢は必須です",
							pattern: {
								value: /^[0-9]+$/,
								message: "年齢は数値で入力してください",
							},
							min: { value: 18, message: "年齢は18歳以上で入力してください" },
							max: { value: 100, message: "年齢は100歳以下で入力してください" },
						})}
					/>
					{errors.age && <p>{errors.age.message}</p>}
				</div>
				<button type="submit">送信</button>
			</form>
			<main>
				<Link href="/">ホームへ</Link>
			</main>
		</>
	);
}
