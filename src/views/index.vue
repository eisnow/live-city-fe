<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">Smart Live City</div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <router-link :to="{path: '/openlayers/beijing'}">
                                <Icon type="map"></Icon>
                                OpenStreetMap
                            </router-link>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="android-map"></Icon>
                            BaiduMap
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger class="sider-nav">
                    <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="map"></Icon>
                                OpenStreetMap
                            </template>
                            <MenuItem name="1-1">
                                <router-link :to="{path: '/openlayers/beijing'}">
                                    Beijing
                                </router-link>
                            </MenuItem>
                            <MenuItem name="1-2">
                                <router-link :to="{path: '/openlayers/nanjing'}">
                                    Nanjing
                                </router-link>
                            </MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="android-map"></Icon>
                                BaiduMap
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>OpenStreetMap</BreadcrumbItem>
                        <BreadcrumbItem>{{ this.$route.params.city }}</BreadcrumbItem>
                    </Breadcrumb>
                    <Content class="layout-content">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
            <Footer class="layout-footer-center">2011-2016 &copy; Smart Live City</Footer>
        </Layout>
    </div>
</template>
<script>
export default {
  methods: {
    handleStart() {
      this.$Modal.info({
        title: "Bravo",
        content: "Now, enjoy the convenience of iView."
      });
    }
  }
};
</script>
<style scoped lang="less">
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: calc(100vh);
}
.ivu-layout {
    height: 100%;
}
.layout-logo{
    width: 8rem;
    height: 2rem;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 1rem;
    left: 1.25rem;
}
.layout-nav{
    width: 36rem;
    margin: 0 auto;
    margin-right: 1.25rem;
    a {
        color: inherit;
    }
}
.sider-nav {
    background: #fff;
    a {
        color: inherit;
    }
}
.layout-content {
    padding: 0;
    height: calc(100vh - 21rem);
    background: #fff;
}
.layout-footer-center{
    border-top: 1px solid #d7dde4;
    text-align: center;
    padding: 0.5rem;
}
</style>
