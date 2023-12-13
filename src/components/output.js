export default function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${Math.round(bill + tip)} (${bill} + ${tip.toFixed(2)} tip)
    </h3>
  );
}
