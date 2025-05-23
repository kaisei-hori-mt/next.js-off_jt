"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  content: z.string().min(10, "内容は10文字以上の入力が必須です"),
});

type FormValues = z.infer<typeof schema>;

export function NewForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      content: "",
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (Object.keys(errors).length > 0) {
      const errorMessages = Object.values(errors).map(
        (error) => error?.message || "不明なエラー"
      );
      alert(`エラーがあります:\n${errorMessages.join("\n")}`);
    } else {
      alert("フォームが正常に送信されました！");
      console.log(data);
      reset();
    }
  };

  const fields: Array<{
    name:keyof FormValues;
    label:string;
    type:string;
  }> = [
    {name: "title", label:"タイトル", type:"text"},
    {name:"content", label:"コンテンツ", type:"text"}
  ]

	return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input id={field.name} {...register(field.name)} type={field.type} />
          {errors[field.name] && (<p>{errors[field.name]?.message}</p>)}
        </div>
      ))}
      <button type="submit">送信</button>
    </form>
  );
}
