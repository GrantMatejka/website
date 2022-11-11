import {
   Button,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   TextField,
} from '@material-ui/core';
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import { useEffect, useState } from 'react';

import Head from 'next/head';
import MomentUtils from '@date-io/moment';

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

const DAY_DISPLAY_MENU_OPTIONS = [
   { value: 1, label: 'Today' },
   { value: 7, label: 'This Week' },
   { value: 14, label: 'Two Weeks' },
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
   const [value, setValue] = useState(null);

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

   return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
         <Head>
            <title>Bonbon</title>
         </Head>
         <div className="full" style={{ paddingTop: '1em' }}>
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',

                  marginBottom: '1em',
               }}
            >
               <h1 style={{ margin: '0 1em', padding: 0 }}>BonBon</h1>
               <FormControl variant="outlined">
                  <InputLabel id="select-day-count">Days to Display</InputLabel>
                  <Select
                     style={{ height: '2.5em', minWidth: '125px' }}
                     labelId="select-day-count"
                     id="select-day-count"
                     value={dayCount}
                     label="Days to Display"
                     onChange={(e) => setDayCount(e.target.value)}
                  >
                     {DAY_DISPLAY_MENU_OPTIONS.map((option) => (
                        <MenuItem key={option.label} value={option.value}>
                           {option.label}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            </div>

            <form autoComplete="off" onSubmit={handleSubmit}>
               <FormControl
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     alignItems: 'flex-start',
                     justifyContent: 'center',
                  }}
                  variant="outlined"
                  autoComplete="off"
               >
                  <TextField
                     variant="outlined"
                     required
                     label={'Task Description'}
                     style={{ marginRight: '1em' }}
                  />
                  <TimePicker
                     inputVariant="outlined"
                     label="Task Due Time"
                     value={value}
                     onChange={(newValue) => {
                        setValue(newValue);
                     }}
                     ampm={false}
                     style={{ height: '4em' }}
                  />
                  <Button
                     variant="outlined"
                     type="submit"
                     style={{ marginLeft: '1em', height: '55px' }}
                  >
                     {'Add Task'}
                  </Button>
               </FormControl>
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
      </MuiPickersUtilsProvider>
   );
};

export default Bonbon;
