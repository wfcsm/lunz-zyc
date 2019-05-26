chai.should();
import Vue from 'vue'
import Row from '../src/row.vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        Row.should.exist
    })

    it('接受gutter.', (done) => {
      Vue.component("g-row",Row);
      Vue.component("g-col",Col);
      const div = document.createElement('div');
      document.body.appendChild(div);
      div.innerHTML =`
        <g-row gutter="20">
            <g-col span="12"></g-col>
            <g-col span="12"></g-col>
        </g-row>
      `
      const vm = new Vue({
          el:div
      })
     setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            getComputedStyle(row).marginLeft.should.equal('-10px')
            getComputedStyle(row).marginRight.should.equal('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            getComputedStyle(cols[0]).paddingLeft.should.equal('10px')
            getComputedStyle(cols[1]).paddingRight.should.equal('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })
    })

    it("接收 align 属性",()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
          propsData: {
            position: 'right'
          }
        }).$mount(div)
        const element = vm.$el
        getComputedStyle(element).justifyContent.should.equal("flex-end")
        div.remove()
        vm.$destroy()
    })
   

})
