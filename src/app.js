import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from "./button-group.vue"
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Main from './main.vue'
import Footer from './footer.vue'
import Aside from './aside.vue'
import Toast from './toast.vue'
import plugin from './plugin'
import PTabs from './tabs.vue'
import PTabsBody from './tabs-body.vue'
import PTabsHead from './tabs-head.vue'
import PTabsItem from './tabs-item.vue'
import PTabsPane from './tabs-pane.vue'

Vue.component("g-button",Button)
Vue.component("g-icon",Icon)
Vue.component("g-button-group",ButtonGroup)
Vue.component("g-input",Input)
Vue.component("g-row",Row)
Vue.component("g-col",Col)
Vue.component("g-layout",Layout)
Vue.component("g-header",Header)
Vue.component("g-main",Main)
Vue.component("g-footer",Footer)
Vue.component("g-aside",Aside)
Vue.component("g-toast",Toast)
Vue.component("g-tabs",PTabs)
Vue.component("g-tabs-body",PTabsBody)
Vue.component("g-tabs-head",PTabsHead)
Vue.component("g-tabs-item",PTabsItem)
Vue.component("g-tabs-pane",PTabsPane)
Vue.use(plugin)


new Vue({
    el:"#app",
    data:{
        selectedTab:"wulei"
    },
    methods:{
        inputChange(e){
            console.log(e.target.value)
        },
       
        showToast(){
            this.$toast("qwedsa",{
                closeButton:{
                    text:"知道了",
                    callback(toast){
                        toast.log()
                    }
                },
                enableHtml:false,
                autoClose:false,
                position:"bottom"
            });
        }
    }
})

// 单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.should();
// chai.use(spies);
// setting icon
// {
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData:{
//             icon:"settings"
//         }
//     })
//     button.$mount()
//     let useElement = button.$el.querySelector("use")
//     let href = useElement.getAttribute("xlink:href")
//     href.should.equal("#i-settings")
//     button.$el.remove();
//     button.$destroy()
// }
// // loading icon
// {
//     const Constructor=Vue.extend(Button);
//     const button = new Constructor({
//         propsData:{
//             icon:"settings",
//             loading:true
//         }
//     })
//     button.$mount()
//     let useElement=button.$el.querySelector("use");
//     let href = useElement.getAttribute("xlink:href");
//     href.should.equal("#i-loading")
//     button.$el.remove();
//     button.$destroy()
// }

// {
//     const Constructor=Vue.extend(Button);
//     const button = new Constructor({
//         propsData:{
//             icon:"loading",
//             iconPosition:"left"
//         }
//     })
//     button.$mount()
//     let useElement=button.$el.querySelector("use");
//     let href = useElement.getAttribute("xlink:href");
//     href.should.equal("#i-loading")
//     button.$el.remove();
//     button.$destroy()
// }

// {
//     const div = document.createElement("div")
//     document.body.appendChild(div);
//     const Constructor=Vue.extend(Button);
//     const button = new Constructor({
//         propsData:{
//             icon:"settings",
//         }
//     })
//     button.$mount(div)
//     let svg=button.$el.querySelector("svg");
//     let {order} = window.getComputedStyle(svg);
//     order.should.equal("1");
//     button.$el.remove();
//     button.$destroy()
// }

// {
//     const div = document.createElement("div")
//     document.body.appendChild(div);
//     const Constructor=Vue.extend(Button);
//     const button = new Constructor({
//         propsData:{
//             icon:"settings",
//             iconPosition:"right"
//         }
//     })
//     button.$mount(div)
//     let svg=button.$el.querySelector("svg");
//     let {order} = window.getComputedStyle(svg);
//     order.should.equal("2")
//     button.$el.remove();
//     button.$destroy()
// }

// {
//     const Constructor=Vue.extend(Button);
//     const vm = new Constructor({
//         propsData:{
//             icon:"settings",
//         }
//     })
//     vm.$mount()

//     let spy = chai.spy(function(){});
//     vm.$on("click",spy)

//     let button=vm.$el
//     button.click();

//     spy.should.have.been.called();
//     vm.$el.remove();
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'settings',
//       }
//     })
//     vm.$mount()
//     let spy = chai.spy(function(){})
  
//     vm.$on('click', spy)
//     // 希望这个函数被执行
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
//   }