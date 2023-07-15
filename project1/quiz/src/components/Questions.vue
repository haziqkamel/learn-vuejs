<template>
    <div class="questions-ctr">
        <div class="progress">
            <!-- Progress bar -->
            <div class="bar" :style="{ width: `${questionsAnswered / questions.length * 100}%` }"></div>
            <div class="status">{{ questionsAnswered }} out of {{ questions.length }} questions answered</div>
        </div>
        <div class="single-question" v-for="(question, i) in questions" :key="question.q" v-show="questionsAnswered === i">
            <div class="question">{{ question.q }}</div>
            <div class="answer" v-for="answer in question.answers" :key="answer.text"
                @click.prevent="selectAnswer(answer.is_correct)">{{
                    answer.text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "questions",
        "questionsAnswered",
    ],
    emits: ['question-answer'],
    methods: {
        // Method pass bool and emit "question-answer" event
        selectAnswer(is_correct) {
            this.$emit("question-answer", is_correct)
        }
    }
}
</script>

<style></style>