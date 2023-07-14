<template>
    <p>The user is {{ age }} years old</p>
    <button type="button" @click="onClickAge">Update Age Event</button>
    <p>{{ ageDoubled }}</p>
    <button type="button" @click="ageChangeFn(3)">Update Age CB</button>
</template>

<script>
export default {
    name: "User",
    props: {
        age: {
            type: Number,
            // required: true,
            // default: 10,
            validator(value) {
                // this.onClickAge()
                return value < 40
            }
        },
        ageChangeFn: Function
    },
    emits: ['age-change'],
    computed: {
        ageDoubled() {
            return this.age * 2
        }
    },
    methods: {
        onClickAge() {
            this.$emit('age-change', 1)
        }
    }
}
</script>