<template>
  <div class="slc-map">
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
        <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

        <vl-layer-tile id="osm">
            <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
    </vl-map>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        zoom: 13,
        center: [116.3931, 39.8993],
        rotation: 0,
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        // replace getPost with your data fetching util / API wrapper
        // getPost(this.$route.params.city, (err, post) => {
          if (this.$route.params.city === 'beijing') {
            this.center = [116.3931, 39.9053]
          } else if (this.$route.params.city === 'nanjing') {
            this.center = [118.7963, 32.0701]
          }
        // })
      }
    }
  }
</script>

<style lang="less">
.slc-map {
  height: 100%;
  width: 100%;
  .vl-map {
    height: 100%;
    width: 100%;
  }
}
</style>
