import { TicketComments } from "./TicketComments";
import classes from "./TicketDetails.module.css";

export default async function TicketDetailsPage({ params }) {
  const { id } = await params;
  return (
    <article className={classes.ticketDetails}>
      <header>
        <strong className={classes.ticketStatusGreen}>#{id}</strong> -{" "}
        <strong>Open</strong>
        <br />
        <small className={classes.authorAndDate}>
          Created by <strong>AuthorName</strong> at{" "}
          <time>December 10th 2025</time>
        </small>
        <h2>Ticket title should be here</h2>
      </header>
      <section>Some details about the ticket should be here.</section>

      <TicketComments />
    </article>
  );
}
