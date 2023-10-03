import { FilterLabel, FilterInput } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <>
      <FilterLabel>
        <FilterInput
          type="text"
          placeholder="Find contacts"
          value={filter}
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
        />
      </FilterLabel>
    </>
  );
};
