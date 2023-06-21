import { useState } from 'react';

function Search({ getCoords }) {
  const [term, setTerm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    getCoords(term);
    setTerm('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for city"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
}
export default Search;
