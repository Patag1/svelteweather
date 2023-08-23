<div>
  <slot />
</div>

<style>
  :global(body) {
    margin: 0;
    display: grid;
    place-content: center;
    min-height: 100vh;
    background-color: #fafafa;
    color: #333;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    user-select: none;
  }

  div {
    padding: 0 12px;
    aspect-ratio: 16/9;
    max-width: 80ch;
    width: 100%;
    background-color: #fff;
    border-radius: 20px;
    filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
      drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  }
</style>
