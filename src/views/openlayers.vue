<template>
  <div class="slc-map">
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
        <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>
        <vl-geoloc @update:position="center = $event">
          <template slot-scope="geoloc">
            <vl-feature v-if="geoloc.position" id="position-feature">
              <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
              <vl-style-box>
                <vl-style-icon src="_media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
              </vl-style-box>
            </vl-feature>
          </template>
        </vl-geoloc>
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
        rotation: 0
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
        // this.$http.get('/api/location/' + this.$route.params.city, (err, post) => {
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
