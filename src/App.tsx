import Select from './Select';
import './App.css';
import { useState } from 'react';

const selectOptions = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
  { label: 'Sixth', value: 6 },
];

const App = () => {
  const [selectValue, setSelectValue] = useState<
    typeof selectOptions[0] | undefined
  >(selectOptions[0]);
  return (
    <Select
      options={selectOptions}
      value={selectValue}
      onChange={o => setSelectValue(o)}
    ></Select>
  );
};

export default App;
