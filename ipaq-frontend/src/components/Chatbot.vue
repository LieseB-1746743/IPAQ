<template>
  <div>
      <iframe
            style="border: none;"
            height="250px"
            width="400px"
            src="https://widget.kommunicate.io/chat?appId=1b03d30d01a20936b285e65478a040d2"
            allow="microphone; geolocation;"
        >
</iframe>
    </div>
</template>

<script>
export default {

    /* 
    methods: {
    },
    mounted (){
      (function(d, m){
        var kommunicateSettings = {"appId":"1b03d30d01a20936b285e65478a040d2","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
    },
   */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>