import { v4 as uuidv4 } from 'uuid';

const Filter = ({ onFilterValue, value }) => (
  <>
    <p>Find contacts by name:</p>
    <label htmlFor={uuidv4()} />
    <input
      id={uuidv4()}
      type="text"
      name="filter"
      onChange={onFilterValue}
      value={value}
    />
  </>
);

export default Filter;
