<script lang="ts">
    import type { ITask } from "./task";
    import { storedTasks } from "./store";
    import Task from "./Task.svelte";

    // Subscribe to store updates
    storedTasks.subscribe((tasks) => {
        console.log("Task List subscribed to Task Storage.");
    });

    // Input Bar text
    let inp: string = $state('');

    // Global task ID
    let taskId: number = $storedTasks.length > 0 ? Math.max(...$storedTasks.map((t) => t.id)) : 0;

    /**
     * Adds a sufficiently long task to the 
     * store when the `Add`-button or `enter`.
     * 
     * It resets the contents that were written to
     * the input bar.
     * 
     * @param event: Either a KeyboardEvent or MouseEvent
     */
    function addTask(event: KeyboardEvent | MouseEvent) {
        if (!event) { return; } 

        if ((event instanceof KeyboardEvent && event.key === 'Enter') || event instanceof MouseEvent) {
            if (inp.length >= 1) {
                taskId += 1;
                // Add a new task to the list of tasks, increment global task ID by 1
                let task: ITask = {id: taskId, todo: inp, done: false};
                storedTasks.update((tasks) => [...tasks, task]);
                inp = '';
            } else {
                window.alert("Please create a task before adding it.");
            }
        }
    }

    /**
     * Deletes all tasks that are marked as completed.
     */
    function deleteAllCompleted() {
        if ($storedTasks.filter((t) => t.done).length === 0) {
            window.alert("No completed tasks to delete.");
            return;
        }
        // Delete all completed tasks
        storedTasks.update((tasks) =>
            // tasks.filter((t) => !(currentSelection.has(Number(t.id)) && t.done))
            tasks.filter((t) => !t.done)
        );

        // Remove deleted tasks
        // const presentIds: Set<number> = new Set($storedTasks.map((task) => task.id));
        // currentSelection = presentIds.intersection(currentSelection);
    }

</script>

<div>
    <div class="input-wrapper">
        <input type="text" 
            id="name" 
            name="name" 
            required minlength="1" 
            size="75" 
            placeholder="Add a new Task"
            bind:value={inp}
            onkeydown={addTask}/>

        <button class={inp.length >= 1 ? "add-btn" : "hide-btn"} onclick={addTask}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                <!-- <polygon fill="#000000" style="stroke-width: 2.5pt"
                    points="60.135,39.865 60.135,5 39.865,5 39.865,39.865 5,39.865 5,60.135 39.865,60.135 39.865,95   60.135,95 60.135,60.135 95,60.135 95,39.865 "/> -->
                <g transform="translate(0,-952.36218)" stroke="white">
                    <path class="plus-icon" 
                        d="m 50,977.36219 c -1.1046,0 -2,0.89543 -2,2 l 0,21.00001 -21,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2 2,2 l 21,0 0,21 c 0,1.1046 0.8954,2 2,2 1.1046,0 2,-0.8954 2,-2 l 0,-21 21,0 c 1.1046,0 2,-0.8954 2,-2 0,-1.1046 -0.8954,-2 -2,-2 l -21,0 0,-21.00001 c 0,-1.10457 -0.8954,-2 -2,-2 z" 
                        height="200"
                        width="200"
                        fill-opacity="1" 
                        style="stroke-width: 7.5pt"
                        visibility="visible" 
                        display="inline" 
                        overflow="visible"/>
                </g>
            </svg>
        </button>
    </div>

    <div class="task-list-wrapper">
        <h1 class={$storedTasks.length > 0 ? "h1-normal" : "h1-normal h1-empty"}>{$storedTasks.length > 0 ? "Open Tasks" : "Currently No Tasks"}</h1>
        <div>
            <ul>
                {#each $storedTasks as task}
                    <Task id={task.id} todo={task.todo} done={task.done} />
                {/each}
            </ul>
            <button class={$storedTasks.length >= 1 ? "del-btn" : "hide-btn"} onclick={deleteAllCompleted}>Delete Selection</button>
        </div>
    </div>
</div>

<style>
    /* ############## INPUT STYLE ############## */
    .input-wrapper {
        position: relative;
        display: inline-block;
    }

    input {
        height: 20%;
        width: 50%;
        padding: 1em;
        margin: 0.5em 0 5em 0;
        border: 0px solid #ccc;
        border-radius: 1.25em;
        text-align: center;
        font-size: 12pt;
        font-weight: 500;
        color: #636262;
        background: none;
        opacity: 0.5;
        background-color: #fff;
    }

    input:hover {
        transform: translateZ(0);
        filter: drop-shadow(0 0 1em #7068ffa1);
    }

    input:focus {
        opacity: 0.6;
        background-color:#fcfaf6;
        border: none;
        outline: none;
        transition: 0.2s ease-in-out
    }

    /* ############## BUTTON STYLES ############## */
    /* ##### ADD BUTTON ##### */
    .add-btn {
        position: absolute;
        right: 80px;
        top: 8px;
        /* transform: translateY(-50%); */
        height: 37%;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        background-color: #036bd3;
        opacity: 0.40;
        border-radius: 1.25em;
    }
    
    .add-btn:hover {
        border: none;
        opacity: 0.90;
        background-color: #036bd3;
        transform: translateZ(0);
        filter: drop-shadow(0 0 2em #036bd390);
    }

    .add-btn svg {
        justify-content: center;
        align-items: center;
        height: 2em;
        width: 1.25em;
    }

    .plus-icon {
        border: none;
        background: none;
        transition: fill 0.1s ease-in-out;
        stroke-width: 3em;
    }
    
    /* ##### DELETE BUTTON ##### */
    .del-btn {
        border-radius: 1.25em;
        font-family: inherit;
        background-color: #bb3636;
    }
    
    .del-btn:hover {
        border-color: #bb3636;
        transform: translateZ(0);
        filter: drop-shadow(0 0 1em #bb363690);
    }

    /* ##### HIDE BUTTONS ##### */
    .hide-btn {
        display: none;
        transition: 0.2s ease-in-out;
    }

    /* ############## TASK LIST WRAPPER ############## */
    .task-list-wrapper {
        justify-content: center;
        align-items: center;
        /* height: 40%; */
        margin: 1em 1em 0 1em;
        padding: 1em;
    }

    /* .task-list-wrapper nav {
        justify-content: center;
        align-items: center;
    } */
    
    .task-list-wrapper ul {
        height: 250px;
        padding: 0;
        overflow: hidden;
        overflow-y: scroll;
    }

    /* .h1-normal {
        opacity: 1;
        margin: 0.5em 0.5em 0.3em 0.5em;
        transition: 0.2s;
    } */
    
    .h1-normal {
        opacity: 1;
        margin: 0.5em 0.5em 0.3em 0.5em;
        /* animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 5s; */
    }

    .h1-empty {
        opacity: 1;
        margin-top: 2em;
        /* animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-out;
        animation-duration: 5s; */
    }

    /**
     * @see {https://stackoverflow.com/questions/11660710/css-transition-fade-in}
     */
    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
  </style>
