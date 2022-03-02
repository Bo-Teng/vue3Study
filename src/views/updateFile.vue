<template>
  <input type="file" @change="uploadFile" />
  <video
    src=""
    id="video"
    width="480"
    height="300"
    class="video-js vjs-default-skin vjs-big-play-centered"
    autoplay
    controls
  ></video>
</template>
<script lang="ts">
import '@/hls'
import { h, defineComponent, onMounted, nextTick, ref } from 'vue'
export default defineComponent({
  setup(props) {
    onMounted(() => {
      setTimeout(() => {
        if (Hls.isSupported()) {
          var video = document.getElementById('video')
          var hls = new Hls()
          hls.attachMedia(video)
          hls.on(Hls.Events.MEDIA_ATTACHED, function () {
            hls.loadSource('https://v.epro-edu.com/mp4/11.m3u8')
            hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
              video.play()
            })
          })
        }
      }, 2000)
    })

    // hwplayerloaded(function () {
    //   var player = new HWPlayer(
    //     'video',
    //     {
    //       width: 480,
    //       height: 300,
    //       controls: true,
    //     },
    //     function () {
    //       //播放器加载完成执行的逻辑
    //     }
    //   )
    //   player.src({
    //     src: 'https://v.epro-edu.com/mp4/11.m3u8',
    //     type: 'application/x-mpegURL',
    //   })
    // })
  },
})
</script>

<style lang="scss">
// @use '../style/login';
</style>