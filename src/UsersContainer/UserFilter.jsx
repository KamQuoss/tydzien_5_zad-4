export default function UserFilter({ setfilterValue, placeholder }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setfilterValue(e.target.value);
    } else return;
  };

  return (
    <input type="text" placeholder={placeholder} onKeyPress={handleKeyPress} />
  );
}
