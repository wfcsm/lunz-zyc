import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from "./button-group.vue"


Vue.component("g-button",Button)
Vue.component("g-icon",Icon)
Vue.component("g-button-group",ButtonGroup)
new Vue({
    el:"#app",
    data:{
        message:"hi",
        loading1: false,
        loading2: true,
        loading3: false
    }
})

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.should();
chai.use(spies);
// setting icon
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:"settings"
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector("use")
    let href = useElement.getAttribute("xlink:href")
    href.should.equal("#i-settings")
    button.$el.remove();
    button.$destroy()
}
// loading icon
{
    const Constructor=Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:"settings",
            loading:true
        }
    })
    button.$mount()
    let useElement=button.$el.querySelector("use");
    let href = useElement.getAttribute("xlink:href");
    href.should.equal("#i-loading")
    button.$el.remove();
    button.$destroy()
}

{
    const Constructor=Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:"loading",
            iconPosition:"left"
        }
    })
    button.$mount()
    let useElement=button.$el.querySelector("use");
    let href = useElement.getAttribute("xlink:href");
    href.should.equal("#i-loading")
    button.$el.remove();
    button.$destroy()
}

{
    const div = document.createElement("div")
    document.body.appendChild(div);
    const Constructor=Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:"settings",
        }
    })
    button.$mount(div)
    let svg=button.$el.querySelector("svg");
    let {order} = window.getComputedStyle(svg);
    order.should.equal("1");
    button.$el.remove();
    button.$destroy()
}

{
    const div = document.createElement("div")
    document.body.appendChild(div);
    const Constructor=Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:"settings",
            iconPosition:"right"
        }
    })
    button.$mount(div)
    let svg=button.$el.querySelector("svg");
    let {order} = window.getComputedStyle(svg);
    order.should.equal("2")
    button.$el.remove();
    button.$destroy()
}

{
    const Constructor=Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon:"settings",
        }
    })
    vm.$mount()

    let spy = chai.spy(function(){});
    vm.$on("click",spy)

    let button=vm.$el
    button.click();

    spy.should.have.been.called();
    vm.$el.remove();
    vm.$destroy()
}
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