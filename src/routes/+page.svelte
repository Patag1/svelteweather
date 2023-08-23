<script>
  import { getWeatherFrom } from '../services/weather'

  let weatherPromise = getWeatherFrom()
</script>

{#await weatherPromise then weather}
  <div style="position: relative;">
    <h2>{weather?.city}</h2>
    <div class="main">
      <h1>{weather?.temp}°C</h1>
      <img src={weather?.icon} alt="icon" />
    </div>
    <h3>{weather?.description}</h3>
  </div>
  <div class="dash">
    <div>
      <h4>Feels like</h4>
      <p>{weather?.feelsLike}°C</p>
    </div>
    <div>
      <h4>Humidity</h4>
      <p>{weather?.humidity}%</p>
    </div>
    <div>
      <h4>Wind speed</h4>
      <p>{weather?.windKph}km/h</p>
    </div>
    <div>
      <h4>Wind direction</h4>
      <p>{weather?.windDir}</p>
    </div>
  </div>
{/await}

<style>
  h1 {
    margin-top: 0;
    line-height: 4rem;
    font-size: 4rem;
    font-weight: 400;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 400;
  }

  h3 {
    position: absolute;
    line-height: none;
    font-weight: 700;
    margin-bottom: 0;
    padding-bottom: 0;
    top: 0;
    right: -12px;
    transform: rotate(-90deg);
  }

  h4 {
    line-height: none;
    font-weight: 800;
    margin-bottom: 2px;
    padding-bottom: 0;
  }

  p {
    line-height: none;
    font-weight: 600;
    margin-top: 0;
    padding-top: 0;
  }

  img {
    height: 4rem;
    aspect-ratio: 1/1;
    object-fit: cover;
    animation: rock 2s infinite;
  }

  @keyframes rock {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(12deg);
    }
  }

  .main {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: start;
  }

  .dash {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    padding: 0 24px;
    text-align: center;
    border: 2px solid #333;
    border-radius: 12px;
  }

  @media (max-width: 640px) {
    .dash {
      flex-direction: column;
      padding: 0;
      margin-bottom: 12px;
      gap: 0;
    }
  }
</style>
