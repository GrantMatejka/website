import Head from 'next/head';
import { FormEvent } from 'react';
import { FormEventHandler, ReactElement, useEffect, useState } from 'react';

interface Todo {
   date: string
   text: string
   dueTime: string
   id?: number
}

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

const createNewTodo = (text: string, dueTime: string): Todo => {
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

const Bonbon = (): ReactElement => {
   const [dateRange, setDateRange] = useState(15);
   const [todos, setTodos] = useState<Todo[]>([]);

   const fullySetTodos = ((newTodos: Todo[], sort = false) => {
      if (sort) {
         const todoSorter = (t1: Todo, t2: Todo) => {
            const greater = t1.date.toString().substring(0, 15) < t2.date.toString().substring(0, 15);
            if (greater) return -1;
            if (!greater) return 1;
            if (parseInt(t1.dueTime) < parseInt(t2.dueTime)) return -1;
            if (parseInt(t1.dueTime) > parseInt(t2.dueTime)) return 1;
            return 0;
         };

         newTodos.sort(todoSorter);
      }

      localStorage.setItem('todos', JSON.stringify(newTodos));
      setTodos(newTodos);
   });

   const removeTodo = ((id: number) => {
      const newTodos = todos.filter((el) => el.id !== id);
      fullySetTodos(newTodos);
   });

   const clearTodos = () => {
      setTodos([]);
      localStorage.setItem('todos', JSON.stringify([]));
   };

   const todoFormSubmission = ((e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const todos = JSON.parse(localStorage.getItem('todos') ?? '[]');
      console.log(todos);
      todos.push('hey');

      fullySetTodos(todos);
      console.log(e);
      //TODO: create todo here
   });

   useEffect(() => {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos == null) {
         localStorage.setItem('todos', JSON.stringify([]));
      } else {
         const parsedTodos = JSON.parse(storedTodos);
         setTodos(parsedTodos);
      }
   }, []);

   return (
      <div>
         <Head>
            <title>Bonbon</title>
         </Head>
         <button onClick={() => setDateRange(1)}>Today</button>
         <button onClick={() => setDateRange(7)}>Week</button>
         <button onClick={() => setDateRange(14)}>Two Weeks</button>
         <button onClick={clearTodos}>clear</button>
         <p>{dateRange}</p>

         <form id="form" autoComplete="off" onSubmit={todoFormSubmission}>
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
