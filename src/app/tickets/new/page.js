"use client";
import { useRef } from "react";
export default function CreateTicket() {
  const ticketTitleRef = useRef(null);
  const ticketDescriptionRef = useRef(null);
  return (
    <article style={{ maxWidth: "640px", margin: "auto" }}>
      <h3>Create a new ticket</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("TODO: Add a new ticket");
        }}
      >
        <input ref={ticketTitleRef} placeholder="Add a title" />
        <textarea ref={ticketDescriptionRef} placeholder="Add a comment" />
        <button type="submit">Create ticket now</button>
      </form>
    </article>
  );
}
