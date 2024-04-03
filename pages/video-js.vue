<template>
  <img src="http://127.0.0.1:8000/storage/1/00dd66.png"/>
  <video
      id="my-video"
      class="video-js"
      controls
      preload="auto"
      width="640"
      height="264"
      data-setup="{}"
  >
<!--    <source src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" type="video/mp4" />
    <source src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" type="video/webm" />-->
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
      >supports HTML5 video</a
      >
    </p>
  </video>
</template>
<script setup>

  import videojs from "video.js";

  useHead({
    script:[
      {
        src: 'https://vjs.zencdn.net/8.10.0/video.min.js',
      },
      {
        src: 'https://unpkg.com/browse/@videojs/http-streaming@3.10.0/dist/videojs-http-streaming.js'
      }
    ]
  })

  onMounted(() => {

    const player = videojs('my-video');
    player.src({
      src: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
      // src: 'http://127.0.0.1:8000/secrets/video.m3u8',
      type: 'application/x-mpegURL',
      withCredentials: false
    })
  })
</script>