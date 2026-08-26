"use client";

interface Props {
  error: Error;
}

export default function NotesError({ error }: Props) {
  return <p>error{error.message}</p>;
}
