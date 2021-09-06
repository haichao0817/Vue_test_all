<template>
  <div id="list-demo" class="demo">
    <button @click="download">download</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    download(){
      var FileSaver = require('file-saver');
      var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
      FileSaver.saveAs(blob, "hello world.txt");
    }
  }
}
</script>