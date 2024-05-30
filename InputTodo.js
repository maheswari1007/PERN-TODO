import React, { Fragment, useState} from "react";

const InputTodo = ({ fetchTodos }) => {

    const [description, setDescription] = useState("");
    const [status, setStatus] = useState('Pending');
    const [dueDate, setDueDate] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description, status, due_date: dueDate };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            fetchTodos();
            setDescription('');
            setStatus('pending');
            setDueDate('');

            window.location = '/';

        } catch (err) {
            console.error(err.message);
        }
    };

    return(
    <Fragment>
        <form onSubmit={onSubmitForm}>
            <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter todo description"
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>
            <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            />
        </form>
         <h1 className="text-center mt-5">Pern Todo List</h1>
           <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
            <button className="btn btn-success">Add</button>
           </form>
    </Fragment>
    );
};

export default InputTodo;
