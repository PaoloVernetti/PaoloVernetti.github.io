<template>
  <div class="layout">
    <canvas id="back" />
    <div class="wraper">
      <header>
        <nav>
          <ul>
            <nuxt-link class="link" :to="{ path: '/' }">Главная</nuxt-link>
            <nuxt-link class="link" :to="{ path: '/portfolio' }">Портфолио</nuxt-link>
          </ul>
        </nav>
      </header>
      <slot />
    </div>
  </div>
</template>


<script setup>
onMounted(() => {
  var canvas = document.getElementById('back'),
      ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var letters = '1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890';
    letters = letters.split('');

    let delimiter = 10;

    var fontSize = 26,
      columns = canvas.width / delimiter;

    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, .05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * delimiter, drops[i] * delimiter);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .98) {
          drops[i] = 0;
        }
      }
    }

    let rain = setInterval(draw, 100);

    window.addEventListener("resize", () => {
      clearInterval(rain)
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      rain = setInterval(draw, 100);
    })
})
</script>

<style>
.layout {
  display: grid;
  width: 100vw;
  min-height: 100vh;
}

body {background: #000;}

canvas {display: block; position: fixed; z-index: 0;}

.wraper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  z-index: 1;
}

header {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 60px;
  background: rgba(225, 225, 225, 0.7) !important;
  z-index: 2;
}

nav {
  width: auto;
  height: 60px;
}

nav > ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
  flex-direction: row;
}

nav > ul > .link {
  color: rgba(47, 54, 64, .9);
  font-family: 'Roboto Condensed', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding-left: 20px;
  padding-right: 20px;
  height: 60px;
  text-transform: uppercase;
  text-decoration: none;
}
</style>