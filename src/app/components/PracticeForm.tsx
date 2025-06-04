"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import { z } from "zod";
import { Modal } from "./Modal";

// Zodバリデーション
const schema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  content: z.string().min(10, "内容は10文字以上で入力してください"),
  email: z
    .string()
    .email("無効なメール形式です")
    .regex(/^[\u0021-\u007e]+$/u, "無効なメール形式です"),
  age: z
    .number()
    .min(18, "18歳以上である必要があります")
    .max(100, "100歳以下である必要があります"),
  accept: z
    .boolean()
    .refine((value) => value === true, "利用規約に同意する必要があります"),
});

type FormValues = z.infer<typeof schema>;

// フォーム項目情報を格納
const fields: Array<{
  name: keyof FormValues;
  label: string;
  type: string;
}> = [
  { name: "title", label: "タイトル", type: "text" },
  { name: "content", label: "内容", type: "text" },
  { name: "email", label: "メールアドレス", type: "text" },
  { name: "age", label: "年齢", type: "number" },
  { name: "accept", label: "利用規約同意", type: "checkbox" },
];

// sendRequestの定義
async function sendRequest(
  url: string,
  { arg }: { arg: { data: FormValues } },
) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg.data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTPエラー: ${res.status}`);
    }
    res.json();
  });
}

export default function PracticeForm() {
  const { trigger, isMutating } = useSWRMutation("/api/memos", sendRequest);
  const [showModal, setShowModal] = useState(false);

  // フォームの初期設定
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      content: "",
      email: "",
      age: 0,
      accept: false,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  // POST送信
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    try {
      const res = await trigger({ data });
      reset();
      mutate("/api/memos");
      setShowModal(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              id={field.name}
              {...register(
                field.name,
                field.name === "age" ? { valueAsNumber: true } : {},
              )}
              type={field.type}
            />
            {errors[field.name] && (
              <p style={{ color: "red" }}>{errors[field.name]?.message}</p>
            )}
          </div>
        ))}
        <button type="submit" disabled={isMutating}>
          {isMutating ? "送信中..." : "送信"}
        </button>
      </form>

      {showModal && (
        <Modal
          message="登録が完了しました！"
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
