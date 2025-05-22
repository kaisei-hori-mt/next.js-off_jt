"use client";
import Link from "next/link";
import React from "react";
import { DefaultForm } from "../components/DefaultForm";

export default function Form() {
	return (
		<main>
			<DefaultForm />
			<Link href="/">ホームへ</Link>
		</main>
	);
}
