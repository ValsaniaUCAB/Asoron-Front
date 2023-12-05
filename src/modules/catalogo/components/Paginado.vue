<template>
    <button class="button-18" @click="$emit('on-click', 'd')" :disabled="page === 1"> <i
            class=" fa fa-arrow-left"></i></button>
    <span v-for=" i in valorEnteroLista()">
        <button class=" button-18" :class="activo(i)" @click="$emit('on-click', i)" :disabled="page === i">{{ i
        }}</button>
    </span>
    <button class="button-18" @click="$emit('on-click', 'u')" :disabled="page >= ronList.length / 6"><i
            class="fa fa-arrow-right"></i></button>
</template>

<script>
export default {
    props: {
        ronList: {
            type: Array,
            required: true
        },
        page: {
            required: true,
            type: Number,
        }
    },
    data() {
        return {
            activated: 'active'
        }
    },

    methods: {
        activo(num) {
            if (num === this.page) return 'active'
            else return ''
        },
        valorEnteroLista() {
            return Math.ceil(this.ronList.length / 6)

        }
    }
}
</script>

<style lang="scss" scoped>
.button-18 {
    margin: 10px;
    align-items: center;
    background-color: #fff;
    border: 1px solid #31212B;
    border-radius: 100px;
    box-sizing: border-box;
    color: #000;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: normal;
    justify-content: center;
    line-height: 20px;
    max-width: 480px;
    min-height: 60px;
    min-width: 60px;
    overflow: hidden;
    padding: 0px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    touch-action: manipulation;
    transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;

    &:hover,
    :focus {
        background-color: #31212B;
        color: #e6bd7f;
    }

    &:active {
        background: #48323f;
    }

    &:disabled {
        cursor: not-allowed;
        background: rgba(0, 0, 0, .08);
        color: rgba(0, 0, 0, .3);
    }

    &.active {
        background-color: #31212B;
        color: #e6bd7f;
    }
}
</style>