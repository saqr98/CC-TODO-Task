<script lang="ts">
  import ccLogo from './assets/ccLogo.png'
  import TaskList from './lib/TaskList.svelte';

  let greeting: string = 'CyberCurriculum';

</script>

<main>
  <div>
    <a href="https://cyber-curriculum.com" target="_blank" rel="noreferrer">
      <img src={ccLogo} class="logo" alt="CC Logo" />
    </a>
  </div>
  <h1><strong>Your Tasks @</strong> {greeting}</h1>

  <div class="card">
    <TaskList />
  </div>
  <p class="read-the-docs">
    Check out <a href="https://github.com/saqr98/CC-TODO-Task.git" target="_blank" rel="noreferrer">GitHub</a> for the complete code!
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #7068ff); /* #646cffaa  515F51 eeaeca*/
  }
  
  .read-the-docs {
    position: sticky;
    bottom: 0;
    padding-bottom: 1.3em;
    color: #e9e9e9; /* #888; */
  }

  h1 {
    font-size: 48pt;
    font-weight: 900;
  }

</style>
