import React, { useState } from 'react';
import Todo from './Todo';
import styles from "../page.module.css";

const Form = () => {
    const [todo, setTodo] = useState({
        nombre: '',
        marca: '',
        cantidad: '',
        precio: ''
    });

    const [todos, setTodos] = useState([]);

    const handleChange = e => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const handleClick = e => {
        e.preventDefault();
        if (Object.values(todo).some(value => value.trim() === '')) {
            alert('Todos los campos son obligatorios');
            return;
        }
        setTodos([...todos, todo]);
        setTodo({
            nombre: '',
            marca: '',
            cantidad: '',
            precio: ''
        });
    };

    const eliminar = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Nombre del Producto:</label><br />
                <input className={styles.form_input} type="text" name="nombre" value={task.nombre} onChange={handleChange} /><br />

                <label>Marca:</label><br />
                <input className={styles.form_input} type="text" name="marca" value={task.marca} onChange={handleChange} /><br />

                <label>Cantidad:</label><br />
                <input className={styles.form_input} type="text" name="cantidad" value={task.cantidad} onChange={handleChange} /><br />

                <label>Precio:</label><br />
                <input className={styles.form_input} type="text" name="precio" value={task.precio} onChange={handleChange} /><br />

                <button className={styles.form_button} onClick={handleClick}>Agregar</button>
            </form>
            {
                tasks.map((task, index) => (
                    <Todo
                        key={index}
                        index={index}
                        productName={task.nombre}
                        brand={task.marca}
                        quantity={task.cantidad}
                        price={task.precio}
                        eliminar={eliminar}
                    />
                ))
            }
        </>
    );
};

export default Form;