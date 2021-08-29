import { ReactElement, useEffect, useState } from 'react';

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

   useEffect(() => {
      // TODO: fix this as it will always set localstorage when initing
      const storedTodos = JSON.parse(localStorage.getItem('todos') ?? '[]');
      if (storedTodos.length === 0) {
         console.log(storedTodos);
         localStorage.setItem('todos', JSON.stringify([]));
      }
      setTodos(storedTodos);
   }, []);

   return <p>{`I haven't been carried over yet :(`}</p>;
};

export default Bonbon;
