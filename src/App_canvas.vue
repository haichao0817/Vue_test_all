<template>
<div id="draw-border">
  <button>Hover me</button>
  <canvas id="canvas" width="500" height="500" style="border:1px solid red;">not support canvas</canvas>
</div>
</template>

<script>
export default {
  data(){
    return {
    };
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      const canvas = document.getElementById('canvas')
      const ctx = canvas.getContext('2d')
      let drawArray = []

      function draw1 () {
        ctx.beginPath()
        ctx.moveTo(10, 10)
        ctx.lineTo(10, 50)
        ctx.lineTo(50, 50)
        ctx.lineTo(50, 10)
        ctx.fillStyle= 'black'
        ctx.fill()
      }

      function draw2 () {
        ctx.beginPath()
        ctx.moveTo(100, 100)
        ctx.lineTo(100, 150)
        ctx.lineTo(150, 150)
        ctx.lineTo(150, 100)
        ctx.fillStyle= 'red'
        ctx.fill()
        ctx.closePath()
      }

      drawArray.push(draw1, draw2)  

      drawArray.forEach(it => {
        it()
      })

      canvas.addEventListener('click', function (e) {
        ctx.clearRect(0, 0, 400, 750)
        const canvasInfo = canvas.getBoundingClientRect()
        drawArray.forEach(it => {
          it()
          console.log(ctx.isPointInPath(e.clientX - canvasInfo.left, e.clientY - canvasInfo.top))
        })
      })
    }
  },
}
</script>

<style scoped>
#draw-border {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  border: 0;
  background: none;
  text-transform: uppercase;
  color: #4361ee;
  font-weight: bold;
  position: relative;
  outline: none;
  padding: 10px 20px;
  box-sizing: border-box;
}

button::before, button::after {
  box-sizing: inherit;
  position: absolute;
  content: '';
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

button::after {
  bottom: 0;
  right: 0;
}

button::before {
  top: 0;
  left: 0;
}

button:hover::before, button:hover::after {
  width: 100%;
  height: 100%;
}

button:hover::before {
  border-top-color: #4361ee;
  border-right-color: #4361ee;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

button:hover::after {
  border-bottom-color: #4361ee;
  border-left-color: #4361ee;
  transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s, height 0.3s ease-out 1s;
}
</style>