import { useState } from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Custom CSS
import "./App.css";

function App() {
    const tasks = [
        {
            id: 1,
            title: "Implementare la homepage",
            priority: 1,
            estimatedTime: 120,
            state: "completed",
        },
        {
            id: 2,
            title: "Sviluppare il menu di navigazione",
            priority: 2,
            estimatedTime: 60,
            state: "completed",
        },
        {
            id: 3,
            title: "Creare il footer del sito",
            priority: 3,
            estimatedTime: 30,
            state: "completed",
        },
        {
            id: 4,
            title: "Ottimizzare le performance",
            priority: 1,
            estimatedTime: 180,
            state: "completed",
        },
        {
            id: 5,
            title: "Scrivere test per i componenti",
            priority: 2,
            estimatedTime: 90,
            state: "completed",
        },
        {
            id: 6,
            title: "Implementare la pagina dei contatti",
            priority: 3,
            estimatedTime: 60,
            state: "completed",
        },
        {
            id: 7,
            title: "Aggiungere animazioni CSS",
            priority: 2,
            estimatedTime: 30,
            state: "backlog",
        },
        {
            id: 8,
            title: "Integrare l'API di autenticazione",
            priority: 1,
            estimatedTime: 120,
            state: "in_progress",
        },
        {
            id: 9,
            title: "Aggiornare la documentazione",
            priority: 3,
            estimatedTime: 60,
            state: "backlog",
        },
        {
            id: 10,
            title: "Rifattorizzare il codice CSS",
            priority: 2,
            estimatedTime: 90,
            state: "in_progress",
        },
    ];

    console.log(tasks);

    console.log("-----------------------");

    const CompletedTasks = tasks.filter((task) => task.state == "completed");
    const notCompletedTasks = tasks.filter((task) => task.state != "completed");

    console.log("Completed Tasks: ", CompletedTasks);
    console.log("Not Completed Tasks: ", notCompletedTasks);

    return (
        <>
            <section className="page-title p-3 text-bg-primary">
                <h1>Task Manager</h1>
            </section>

            <h2 className="p-3">Current Tasks ({notCompletedTasks.length})</h2>
            <ul>
                {notCompletedTasks.map((task) => (
                    <li className={`${task.id} mb-3`}>
                        <h6 className="d-inline pe-3">{task.title}</h6>
                        <span className="badge text-bg-warning">
                            {task.state}
                        </span>
                        <p className="m-0">Priority: {task.priority}</p>
                        <p className="m-0">Est. time: {task.estimatedTime}</p>
                    </li>
                ))}
            </ul>

            <hr />

            <h2 className="p-3">Completed Tasks ({CompletedTasks.length})</h2>
            <ul>
                {CompletedTasks.map((task) => (
                    <li className={`${task.id} mb-3`}>
                        <h6 className="d-inline pe-3">{task.title}</h6>
                        <span className="badge text-bg-warning">
                            {task.state}
                        </span>
                        <p className="m-0">Priority: {task.priority}</p>
                        <p className="m-0">Est. time: {task.estimatedTime}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
