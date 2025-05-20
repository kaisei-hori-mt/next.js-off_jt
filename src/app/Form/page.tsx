"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type FormValues = {
	name: string;
	email: string;
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
					{errors.name && <span>{errors.name.message}</span>}
				</div>
				<div>
					<label htmlFor="email">メールアドレス</label>
					<input
						type="email"
						id="email"
						autoComplete="email"
						{...register("email", {
							required: "メールアドレスは必須です",
						})}
					/>
					{errors.email && <span>{errors.email.message}</span>}
				</div>
				<button type="submit">送信</button>
			</form>
			<main>
				<Link href="/">ホームへ</Link>
			</main>
		</>
	);
}
