chai.should();
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        Input.should.exist
    })


    describe('props',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        it("接受 value",()=>{ 
            vm = new Constructor({
                propsData:{
                    value:'1234'
                }
            })
            vm.$mount();
            const inputElement = vm.$el.querySelector('input');
            inputElement.value.should.equal("1234"); 
        })

        it("接收 disabled", ()=>{
            vm = new Constructor({
                propsData:{
                    disabled:true
                }
            })
            vm.$mount();
            const inputElement = vm.$el.querySelector('input');
            inputElement.disabled.should.equal(true)
        })

        it("接收 readonly", ()=>{
            vm = new Constructor({
                propsData:{
                    readonly:true
                }
            })
            vm.$mount();
            const inputElement = vm.$el.querySelector('input');
            inputElement.readOnly.should.equal(true)
        })

        it("接收 error", ()=>{
            vm = new Constructor({
                propsData:{
                    error:"2133"
                }
            })
            vm.$mount();
            const useElement = vm.$el.querySelector('use');
            useElement.getAttribute("xlink:href").should.equal("#i-error")
            const errorMessageElement = vm.$el.querySelector(".errorMessage");
            errorMessageElement.innerText.should.equal("2133")
         
        })
        afterEach(()=>{
            vm.$destroy();
        })
    })
   
    describe("事件",()=>{
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(()=>{
            vm.$destroy();
        }) 
        it('支持change/input/foucs/blur 事件', ()=>{
            ["change","input","foucs","blur"].forEach((name)=>{
                vm = new Constructor({}).$mount();
                const callback = sinon.fake();
                vm.$on(name,callback);
                // 触发input的change事件
                let event = new Event(name);
                Object.defineProperty(event,'target',{
                    value:{value:"hi"},
                    enumerable:true
                })
                let inputElement = vm.$el.querySelector("input");
                inputElement.dispatchEvent(event);
                callback.should.be.calledWith("hi");
            })
            
        })

    })
})