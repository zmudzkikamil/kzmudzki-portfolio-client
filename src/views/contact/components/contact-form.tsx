import { extractServerError } from "@/api/errors";
import { sendContact } from "@/api/services/contact";
import { contactSchema, ContactFormData } from "@/api/types/contact";
import Button from "@/shared/components/form/button";
import { Input, Textarea } from "@/shared/components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { LinkButton } from "@/shared/components/form/link-button";

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const {
    mutate,
    isPending,
    isSuccess,
    error: mutationError,
  } = useMutation({ mutationFn: sendContact });

  const serverError = extractServerError(mutationError);

  const onSubmit = (data: ContactFormData) => {
    mutate({
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      message: data.message.trim(),
    });
  };

  if (isSuccess) {
    return (
      <div
        className="flex flex-col items-center gap-4 py-16 text-center text-secondary"
        role="status"
      >
        <p className="text-2xl font-semibold">Message sent!</p>
        <p className="text-secondary/70">
          Thank you for reaching out. I'll get back to you soon.
        </p>
        <button
          onClick={() => reset()}
          className="mt-4 text-sm underline text-secondary/60 hover:text-secondary transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 w-full max-w-xl"
    >
      {serverError && (
        <div
          className="rounded-lg border border-red-400/60 bg-red-400/10 px-4 py-3 text-sm text-red-300"
          role="alert"
        >
          {serverError}
        </div>
      )}

      <Input
        id="name"
        label="Name"
        type="text"
        autoComplete="name"
        placeholder="John Doe"
        error={errors.name?.message}
        {...register("name")}
      />

      <Input
        id="email"
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="john@example.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <Textarea
        id="message"
        label="Message"
        rows={6}
        placeholder="What's on your mind?"
        error={errors.message?.message}
        {...register("message")}
      />
      <div className="flex justify-end gap-12 mt-6">
        <LinkButton
          icon="fa-brands fa-linkedin"
          url="https://www.linkedin.com/in/k-zmudzki/"
          variant="cta"
        />
        <Button
          type="submit"
          label={isPending ? "Sending…" : "Send message"}
          loading={isPending}
          className="rounded-xl"
        />
      </div>
    </form>
  );
};
