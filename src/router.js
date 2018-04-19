const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children: [
            {
                path: 'openlayers/:city',
                component: (resolve) => require(['./views/openlayers.vue'], resolve),
            }
        ]
    }
];
export default routers;
