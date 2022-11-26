import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

function App() {

  const recipes = [];

  const [recipe, setRecipe] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRecipe(event.target.value as string);
  };

  return (
    <div className="App">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={recipe}
          label="Age"
          onChange={handleChange}
        >
          {recipes.map((r, i) => {{return <MenuItem value={10} key={i}>r.name</MenuItem>}})}
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
