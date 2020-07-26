import React, { createContext } from 'react';
import theme from './theme';
import { Select } from './Select';
import './App.css';

export const ThemeContext = createContext(theme);

function App() {
  const [select, setSelect] = React.useState();

  return (
    <ThemeContext.Provider value={theme}>
      <Select
        id="select"
        name="select"
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
        value={select}
        onChange={(option) => {
          setSelect(option?.value);
        }}
      />
    </ThemeContext.Provider>
  );
}

export default App;
