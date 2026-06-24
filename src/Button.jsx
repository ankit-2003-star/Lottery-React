export default function Button({action}) {
  return (
    <button onClick={action} className="button">
      Generate Ticket
    </button>
  );
}
