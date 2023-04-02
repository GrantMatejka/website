import { useEffect, useState } from 'react';

import { Check } from '@material-ui/icons';
import Head from 'next/head';
import styled from 'styled-components';
import { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

const FormContainer = styled.div`
   height: 20%;
`;

const BodyContainer = styled.div`
   overflow-x: auto;
   overflow-y: hidden;
   white-space: nowrap;

   height: 80%;
`;

const DateHeader = styled.h2`
   height: 10%;
   margin: 0;

   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const DayContainer = styled.div`
   display: inline-block;

   height: 95%;
   width: 250px;

   min-width: 0;

   margin: 5px;
   padding: 5px;

   border: black 1px solid;
   border-radius: 5px;
`;

const DayTaskColumn = styled.div`
   height: 90%;

   overflow-x: hidden;
   overflow-y: auto;
`;

const TaskContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;

   width: 100%;
`;

const TaskDescription = styled.p`
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;

   font-size: 18px;
`;

const TaskCompleteButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;

   :hover {
      cursor: pointer;
   }
`;

const DAY_DISPLAY_MENU_OPTIONS = [
   { value: 1, label: 'Today' },
   { value: 4, label: 'Half Week' },
   { value: 7, label: 'Week' },
   { value: 14, label: 'Two Weeks' },
];

/**
 * Creates a  default task item, with a random ID
 *
 * @param {string} description
 * @param {string} dueDate in ISO format
 * @returns Task
 */
const createNewTask = (description, dueDate) => {
   return {
      id: uuid(),
      dueDate: dueDate ?? new Date().toISOString(),
      description: description,
   };
};

/**
 * Sorts tasks by due date and then alphabetically by description
 */
const taskSorter = (t1, t2) => {
   const dateDifference = t1.dueDate < t2.dueDate;
   if (dateDifference !== 0) {
      return dateDifference;
   }

   return t1.description - t2.description;
};

const TITLE = 'BonBon [wip]';

const DEFAULT_FORM_INPUT = {
   description: '',
   dueDate: '',
};

const Bonbon = () => {
   const [dayCount, setDayCount] = useState(7);
   const [tasks, setTasks] = useState([]);
   const [formInput, setFormInput] = useState(DEFAULT_FORM_INPUT);

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
      setTasks((oldTasks) => [...oldTasks, newTask].sort(taskSorter));
   };

   const removeTask = (id) => {
      setTasks((oldTasks) => oldTasks.filter((oldTask) => oldTask.id !== id));
   };

   const moveTask = (id, newDate) => {
      setTasks((oldTasks) =>
         oldTasks.map((oldTask) =>
            oldTask.id === id ? { ...oldTask, dueDate: newDate } : oldTask
         )
      );
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      addTask(createNewTask(formInput.description, formInput.dueDate));
      setFormInput(DEFAULT_FORM_INPUT);
   };

   const daysToDisplay = useMemo(() => {
      const today = new Date();

      // Iterate through how many days we add the index to 'today' to calculate what day we need
      return Array(dayCount)
         .fill(new Date())
         .map((date, i) => {
            date.setDate(today.getDate() + i);
            return date.toISOString();
         });
   }, [dayCount]);

   /**
    * Each task, keyed by due date and any outdated events get put into the first date bucket
    */
   const dayKeyedTasks = useMemo(
      () =>
         tasks.reduce((days, task) => {
            let { dueDate: dueDateKey } = task;
            if (dueDateKey < daysToDisplay[0]) {
               dueDateKey = daysToDisplay[0];
            }
            days[dueDateKey] = days[dueDateKey] ?? [];
            days[dueDateKey].push(task);
            return days;
         }, {}),
      [tasks, daysToDisplay]
   );

   return (
      <>
         <Head>
            <title>{TITLE}</title>
         </Head>
         <div className="full" style={{ height: 'calc(100vh - 60px)' }}>
            <FormContainer id="form-div">
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     alignItems: 'center',
                     justifyContent: 'center',

                     width: '100%',
                  }}
               >
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                     }}
                  >
                     <h1>{TITLE}</h1>
                     <div>
                        <label htmlFor="select-day-count">
                           Days to Display:
                        </label>
                        <select
                           id="select-day-count"
                           value={dayCount}
                           label="Days to Display"
                           onChange={(e) =>
                              setDayCount(parseInt(e.target.value))
                           }
                        >
                           {DAY_DISPLAY_MENU_OPTIONS.map((option) => (
                              <option key={option.label} value={option.value}>
                                 {option.label}
                              </option>
                           ))}
                        </select>
                     </div>
                  </div>
               </div>

               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     alignItems: 'center',
                     justifyContent: 'center',

                     width: '100%',
                  }}
               >
                  <form autoComplete="off" onSubmit={handleSubmit}>
                     <label htmlFor="task-description">Description: </label>
                     <input
                        id="task-desription"
                        value={formInput.description}
                        required={true}
                        type="text"
                        onChange={(newValue) => {
                           setFormInput((oldFormInput) => ({
                              ...oldFormInput,
                              description: newValue.target.value,
                           }));
                        }}
                     />
                     <label htmlFor="task-due-date">Due Date: </label>
                     <input
                        id="task-due-date"
                        type="date"
                        value={formInput.dueDate}
                        onChange={(newValue) => {
                           setFormInput((oldFormInput) => ({
                              ...oldFormInput,
                              dueDate: newValue.target.value,
                           }));
                        }}
                     />
                     <button type="submit">{'Add Task'}</button>
                  </form>
               </div>
            </FormContainer>

            <BodyContainer>
               {daysToDisplay.map((day) => (
                  <DayContainer
                     key={day}
                     onDragEnter={(e) => e.preventDefault()}
                     onDragOver={(e) => e.preventDefault()}
                     onDrop={(e) => {
                        const droppedTaskId =
                           e.dataTransfer.getData('text/plain');

                        moveTask(droppedTaskId, day);
                     }}
                  >
                     <DateHeader>
                        {new Intl.DateTimeFormat(undefined, {
                           dateStyle: 'medium',
                        }).format(new Date(day))}
                     </DateHeader>
                     <DayTaskColumn>
                        {(dayKeyedTasks[day] ?? []).map((task, i) => (
                           <TaskContainer
                              key={task.id}
                              draggable={true}
                              onDragStart={(e) => {
                                 e.dataTransfer.setData('text/plain', task.id);
                                 e.dataTransfer.effectAllowed = 'move';
                              }}
                           >
                              <TaskDescription>
                                 {task.description}
                              </TaskDescription>
                              <TaskCompleteButton
                                 onClick={() => removeTask(task.id)}
                              >
                                 <Check fontSize="small" />
                              </TaskCompleteButton>
                           </TaskContainer>
                        ))}
                     </DayTaskColumn>
                  </DayContainer>
               ))}
            </BodyContainer>
         </div>
      </>
   );
};

export default Bonbon;
