<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disables>默认按钮</g-button>
    </div>

    <pre>
        <code>{{content}}</code>
    </pre>
</template>
<script>
import Button from '../../../src/button'
export default {
    components:{
        "g-button":Button
    },
    data(){
        return{
            content:`
            <g-button>默认按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disables>默认按钮</g-button>
            `
        }
    }
}
</script>
