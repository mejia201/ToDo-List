import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config'; 
import { Task } from '../pages/task/task';
import Swal from 'sweetalert2';


export const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Obtener la lista de tasks
  const fetchTasks = async () => {
    const request = await getDocs(collection(db, 'todoList'));
    const tasksArray = request.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTasks(tasksArray);
  };

  // Función para agregar una nueva tarea
  const addTask = async () => {
    if (newTask.trim()) {
      await addDoc(collection(db, 'todoList'), {
        task: newTask,
        complete: false,
      });
      setNewTask('');
      fetchTasks();// Actualizar la lista 

      Swal.fire({
        icon: 'success',
        title: 'Tarea agregada',
        text: 'La tarea se ha agregado con éxito.',
        timer: 1500,
        showConfirmButton: false,
      });

    }
  };

  // Función para actualizar el estado de una tarea
  const toggleComplete = async (id, currentStatus) => {
    const taskDoc = doc(db, 'todoList', id);
    await updateDoc(taskDoc, { complete: !currentStatus });
    fetchTasks(); // Actualizar la lista 
  };

  // Función para eliminar una tarea
  const deleteTask = async (id) => {
    const taskDoc = doc(db, 'todoList', id);
    await deleteDoc(taskDoc); 
    fetchTasks(); // Actualiza la lista 

    Swal.fire({
      icon: 'warning',
      title: 'Tarea eliminada',
      text: 'La tarea se ha eliminado con éxito.',
      timer: 1500,
      showConfirmButton: false,
    });
    
  };

  // Cargar las tareas al montar el componente
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">ToDo List</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button className="btn btn-primary" onClick={addTask}>Agregar</button>
      </div>

      <div className="row">
        {tasks.map((task) => (
          <div key={task.id} className="col-md-4 mb-3">
            <Task task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />
          </div>
        ))}
      </div>
    </div>
  );
  
};
