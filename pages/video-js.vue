<template>
<!--
<div class="plyr__video-embed" :data-plyr-config="config" id="player">
  <iframe
      src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
      allowfullscreen
      allowtransparency
      allow="autoplay"
  ></iframe>
</div>
  -->

  <video id="player" controls :data-plyr-config="config" >
    <source
        type="application/x-mpegURL"
        :src="hls_type_video"
    >
  </video>


</template>
<script setup>
const video = "http://10.16.100.212/iccftps12/iccftps12sasd1/Movies/Hindi/Murder%20Mubarak%20(2024)%20720p%20WEBRip.mp4";
const video_w3 = "https://www.w3schools.com/html/mov_bbb.mp4";
const hls_type_video = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
const config = JSON.stringify({
  title: "Example Title",
  enabled: true,
  debug: true,
  controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'settings',
      'download',
      'fast-forward',
      'rewind',
      'duration',
      'restart',
      'captions',
  ],
  settings: [
      'captions',
      'quality',
      'speed',
      'loop'
  ],
  i18n: {
    restart: 'segsd',
  },
  loadSprite: true,
  seekTime: 60,
  disableContextMenu: true,
  quality: {
    default: 240,
    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240, 120, 50]
  }

})

useHead({
  style: {
    rel: "text/css",
    type: "stylesheet",
    href: 'https://cdn.plyr.io/3.7.8/plyr.css'
  },
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/hls.js'
    },
    {
      src: 'https://cdn.plyr.io/3.7.8/plyr.js'
    }
  ]
})
onMounted( () => {
  const video = document.querySelector("video");
  const source = video.getElementsByTagName("source")[0].src;

  // For more options see: https://github.com/sampotts/plyr/#options
  // captions.update is required for captions to work with hls.js
  const defaultOptions = {};

  if (Hls.isSupported()) {
    // For more Hls.js options, see https://github.com/dailymotion/hls.js
    const hls = new Hls();
    hls.loadSource(source);

    // From the m3u8 playlist, hls parses the manifest and returns
    // all available video qualities. This is important, in this approach,
    // we will have one source on the Plyr player.
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {

      // Transform available levels into an array of integers (height values).
      const availableQualities = hls.levels.map((l) => l.height)

      // Add new qualities to option
      defaultOptions.quality = {
        default: availableQualities[0],
        options: availableQualities,
        // this ensures Plyr to use Hls to update quality level
        forced: true,
        onChange: (e) => updateQuality(e),
      }

      // Initialize here
      const player = new Plyr(video, defaultOptions);
    });
    hls.attachMedia(video);
    window.hls = hls;
  } else {
    // default options with no quality update in case Hls is not supported
    const player = new Plyr(video, defaultOptions);
  }

  function updateQuality(newQuality) {
    window.hls.levels.forEach((level, levelIndex) => {
      if (level.height === newQuality) {
        console.log("Found quality match with " + newQuality);
        window.hls.currentLevel = levelIndex;
      }
    });
  }

  // const player = new Plyr('#player')

})


</script>