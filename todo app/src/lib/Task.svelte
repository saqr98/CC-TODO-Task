<script lang="ts">
    import { storedTasks } from './store'; 

    // Subscribe to stored tasks
    storedTasks.subscribe(() => console.log("Task subscribed to task storage"))

    // Decompose properties
    let {id, todo, done} = $props();

    /**
     * Delete current tasks.
     */
    function deleteTask() {
        storedTasks.update((tasks) =>
            tasks.filter((t) => t.id !== id)
            );
    }

    /**
     * Reacts to a click-Event on a Task's checkbox and
     * toggles the passed task's completion status.
     * 
     * @param task The task that was completed
     */
     function checkTask() {
        // Set the tasks completion state
        storedTasks.update((tasks) => 
            tasks.map((t) => t.id === id ? {...t, done: !done} : t )
        );
    }
</script>


<div class="task-wrapper">
    <div class="checkbox-wrapper" onclick={checkTask} id="task-{id}">
        <input class="task-checkbox" type="checkbox" id="cbx-{id}" checked={done} />
        <label class={done ? 'task_done' : 'task_open'} for="cbx-{id}">{todo}</label>
    </div>
    <button class="btn" onclick={deleteTask}>
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 90" x="0px" y="0px">
            <path class="trash-icon" d="M80,23.5H67v-3a8,8,0,0,0-8-8H41a8,8,0,0,0-8,8v3H20a4,4,0,0,0,0,8h1.26l4.26,46.91a10,10,0,0,0,10,9.09h29a10,10,0,0,0,10-9.09L78.74,31.5H80a4,4,0,0,0,0-8Zm-39-3H59v3H41ZM66.51,77.68a2,2,0,0,1-2,1.82h-29a2,2,0,0,1-2-1.82L29.29,31.5H70.71Z"/>
         </svg>
    </button>
</div>


<style>
    /* ##############  TASK WRAPPER ############## */
    .task-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1em;
        padding: 5pt;
        color: #000;
        text-align: center;
        font-size: 24pt;
        font-weight: 500;
        opacity: 0.5;
        background-color: #fff;
        backdrop-filter: blur(100em);
        border-radius: .65em;
    }

    .task-wrapper:hover {
        cursor: pointer;
        background-color: #fff;
        opacity: 0.6;
        border-color: #fff;
        box-shadow: 0px 0px 1em #7068ffa1;
    }

    /* ##############  CHECKBOX WRAPPER ############## */
    .checkbox-wrapper {
        display: flex;
        align-items: center;
        width: 80%;
        gap: 35px;
    }

    .checkbox-wrapper input[type=checkbox] {
        width: 2em;
        height: 2em;
        margin: 0 0 0 .75em;
    }
    
    /* ##############  TASK STYLE ############## */
    .task_open {
        font-size: 14pt;
    }
    
    .task_done {
        font-size: 14pt;
        color: #275EFE;
        text-decoration: line-through;
    }

    label {
        color: #636262;
        display: block;
        text-align: left;
        word-wrap: break-word;
        width: 80%;
    }

    /* ##############  DELETE BUTTON ##############*/
    .btn {
        margin: 0em;
        padding: 0;
        background: none;
        border: none;
    }

    .btn svg {
        justify-content: center;
        align-items: center;
        width: 1em;
    }

    .btn:hover .trash-icon {
        cursor: pointer;
        fill: #aa1010;
    }

    .trash-icon {
        fill: #000;
        border: none;
        background: none;
        transition: fill 0.1s ease-in-out;
        margin-left: auto;
    }
</style>