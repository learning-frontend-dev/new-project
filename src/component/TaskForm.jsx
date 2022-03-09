import React, { useState } from 'react';

function TaskForm(props) {
    const [input, setInput] = useState("");

    const handleInput = e => { setInput(e.target.value) }

    const handleSubmit = e => {
        e.preventDefault();

        // props.onSubmit({
        //     id: Math.floor(Math.random() * 1000),
        //     text: input,
        // });

        setInput("");

    }

    return (
        <section className="task_outer">
            <form onSubmit={handleSubmit}>
                <div className="form_field">
                    <input
                        type="text"
                        className="form_input"
                        placeholder="Add Task Tittle"
                        value={input}
                        onChange={handleInput}
                    />
                    <button>Clear</button>
                    <p>{input}</p>

                </div>
            </form>
        </section>
    )
}

export default TaskForm;