export default function User({ id, first_name, last_name }) {
  return (
    <div key={id}>
      {first_name} {last_name}
    </div>
  );
}
