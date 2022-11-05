import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';

import Head from 'next/head';

let count = 0;

const daysOfWeek = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday',
];

const createNewTodo = (text, dueTime) => {
   const creationDate = new Date();

   const newTodo = {
      date: creationDate.toISOString().split('T')[0],
      text: text,
      dueTime: dueTime,
      id: count,
   };

   count += 1;

   return newTodo;
};

const todoSorter = (t1, t2) => {
   const greater =
      t1.date.toString().substring(0, 15) < t2.date.toString().substring(0, 15);
   if (greater) return -1;
   if (!greater) return 1;
   if (parseInt(t1.dueTime) < parseInt(t2.dueTime)) return -1;
   if (parseInt(t1.dueTime) > parseInt(t2.dueTime)) return 1;
   return 0;
};

const removeTodo = (todos, id) => {
   const newTodos = todos.filter((el) => el.id !== id);
   fullySetTodos(newTodos);
};

const Bonbon = () => {
   const [dayCount, setDayCount] = useState(7);
   const [todos, setTodos] = useState([]);

   useEffect(() => {
      const storedTodos = localStorage.getItem('todos');

      if (storedTodos == null) {
         localStorage.setItem('todos', JSON.stringify([]));
      } else {
         setTodos(JSON.parse(storedTodos));
      }
   }, []);

   const updateTodos = (newTodos, sort = false) => {
      if (sort) {
         newTodos.sort(todoSorter);
      }

      localStorage.setItem('todos', JSON.stringify(newTodos));
      setTodos(newTodos);
   };

   const clearTodos = () => {
      setTodos([]);
      localStorage.setItem('todos', JSON.stringify([]));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e);
   };

   const dayCountOptions = [
      { value: 1, label: 'Today' },
      { value: 7, label: 'This Week' },
      { value: 14, label: 'Two Weeks' },
   ];

   return (
      <div style={{ paddingTop: 15 }}>
         <Head>
            <title>Bonbon</title>
         </Head>

         <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
               }}
            >
               <div
                  style={{ width: '30%', textAlign: 'right', marginRight: 10 }}
               >
                  <h2 style={{ margin: 0, padding: 0 }}>BonBon:</h2>
               </div>
               <div style={{ width: '70%' }}>
                  <FormControl variant="outlined" style={{ minWidth: 200 }}>
                     <InputLabel id="select-day-count">
                        Days to Display
                     </InputLabel>
                     <Select
                        labelId="select-day-count"
                        id="select-day-count"
                        value={dayCount}
                        label="Days to Display"
                        onChange={(e) => setDayCount(e.target.value)}
                     >
                        <MenuItem value={1}>Today</MenuItem>
                        <MenuItem value={7}>This Week</MenuItem>
                        <MenuItem value={14}>Two Weeks</MenuItem>
                     </Select>
                  </FormControl>
               </div>
            </div>
         </div>

         <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="text" id="todo-description" autoComplete="off" />
            <input type="number" id="input-time" min="1" max="24" />
            <button id="add-todo" type="submit">
               Add Event
            </button>
         </form>

         <p>{todos.length}</p>
         {todos.map((e, i) => (
            <div key={i}>
               <p>
                  {i} {e}
               </p>
            </div>
         ))}
      </div>
   );
};

export default Bonbon;
