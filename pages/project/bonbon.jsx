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
import moment from 'moment/moment';
import { v4 as uuid } from 'uuid';

const DAY_DISPLAY_MENU_OPTIONS = [
   { value: 1, label: 'Today' },
   { value: 7, label: 'This Week' },
   { value: 14, label: 'Two Weeks' },
];

const createNewTask = (description, dueTime) => {
   return {
      id: uuid(),
      date: moment().unix(),
      description: description,
      dueTime: dueTime ? dueTime.unix() : 0,
   };
};

const taskSorter = (t1, t2) => {
   const dateDifference = t1.date < t2.date;
   if (dateDifference !== 0) {
      return dateDifference;
   }

   return t1.dueTime - t2.dueTime;
};

const Bonbon = () => {
   const [dayCount, setDayCount] = useState(7);
   const [tasks, setTasks] = useState([]);
   const [formInput, setFormInput] = useState({
      description: '',
      dueTime: null,
   });

   // We refer to local store on the initial load to populate any saved state
   useEffect(() => {
      const storedTasks = localStorage.getItem('tasks');

      if (storedTasks == null) {
         localStorage.setItem('tasks', JSON.stringify([]));
      } else {
         setTasks(JSON.parse(storedTasks));
      }
   }, []);

   // Whenever our state changes, update local storage
   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }, [tasks]);

   const addTask = (newTask) => {
      const newTasks = [...tasks, newTask].sort(taskSorter);
      setTasks(newTasks);
   };

   const removeTask = (id) => {
      const newTasks = tasks.filter((el) => el.id !== id);
      setTasks(newTasks);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      addTask(createNewTask(formInput.description, formInput.dueTime));
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
                     value={formInput.description}
                     onChange={(newValue) => {
                        const newFormInput = { ...formInput };
                        newFormInput.description = newValue.target.value;
                        setFormInput(newFormInput);
                     }}
                     style={{ marginRight: '1em' }}
                  />
                  <TimePicker
                     inputVariant="outlined"
                     label="Task Due Time"
                     value={formInput.dueTime}
                     clearable={true}
                     onChange={(newValue) => {
                        const newFormInput = { ...formInput };
                        console.log(newValue);
                        newFormInput.dueTime = newValue;
                        setFormInput(newFormInput);
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

            <p>{tasks.length}</p>
            {tasks.map((e, i) => (
               <div key={i}>
                  <p>
                     {i} {e.description}
                  </p>
               </div>
            ))}
         </div>
      </MuiPickersUtilsProvider>
   );
};

export default Bonbon;
