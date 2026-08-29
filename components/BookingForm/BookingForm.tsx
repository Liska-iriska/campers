"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBookingRequest } from "@/lib/clientApi";
import css from "./BookingForm.module.css";

type Props = {
  camperId: string;
};

export default function BookingForm({ camperId }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: () => createBookingRequest(camperId, { name, email }),
    onSuccess: (data) => {
      toast.success(data.message);
      setName("");
      setEmail("");
      setNameError(null);
      setEmailError(null);
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    if (!name.trim()) {
      setNameError("Please enter your name.");
      isValid = false;
    } else {
      setNameError(null);
    }

    if (!email.trim() || !email.includes("@")) {
      setEmailError("Please enter a valid email.");
      isValid = false;
    } else {
      setEmailError(null);
    }

    if (!isValid) return;

    mutation.mutate();
  };

  return (
    <div className={css.table}>
      <h3 className={css.heading}>Book your campervan now</h3>
      <p className={css.descr}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form} onSubmit={handleSubmit} noValidate>
        <div className={css.inputs}>
          <div className={css.fieldWrapper}>
            <input
              className={`${css.input} ${emailError ? css.errorBorder : css.input}`}
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (nameError) setNameError(null);
              }}
              required
            />
            {nameError && (
              <>
                <span className={css.errorIcon}>!</span>
                <p className={css.errorText}>{nameError}</p>
              </>
            )}
          </div>
          <div className={css.fieldWrapper}>
            <input
              className={`${css.input} ${emailError ? css.errorBorder : css.input}`}
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError(null);
              }}
              required
            />
            {emailError && (
              <>
                <span className={css.errorIcon}>!</span>
                <p className={css.errorText}>{emailError}</p>
              </>
            )}
          </div>
        </div>
        <button className={css.btn} type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
