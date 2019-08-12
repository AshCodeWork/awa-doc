<template>
    <div class="home">
       <awa-doc
        :base="base"
        :config="config"
        :lang="lang"
        active="Vue 组件"
        :simulators="simulators"
        :current-simulator="currentSimulator"
        >
        <!-- <router-view @changeDemoURL="onChangeDemoURL" /> -->
        </awa-doc>
    </div>
</template>
<script>
export default {
    name: 'Home', 
    data () {
        return {
            base: '/zh-CN',
            config: {
                header: {
                    logo: {
                        href: '#/',
                        image: "https://imageplustest.miaohealth.net/upload/cms/image/d42cf69d-82c7-4efa-878d-4b285ec24637.png",
                        title: 'Awa',
                        version: '1.0.0'
                    },
                    nav: {
                    }
                },
                nav: [
                    {
                        groups: [
                            {
                                list: [
                                    {
                                        path: '/intro',
                                        title: '介绍'
                                    },
                                    {
                                        path: '/quickstart',
                                        title: '快速上手'
                                    },
                                    {
                                        path: '/changelog',
                                        title: '更新日志'
                                    }
                                ]
                            }
                        ],
                        name: '开发指南'
                    }
                ]
            },
            currentSimulator: 0,
            lang: 'zh-CN',
            simulators: []
        }
    }
}
</script>

