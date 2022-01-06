<template>
  <div class="FAQ">
    <h1>IPAQ - Tool FAQ</h1>
    <overline> Our <b>IPAQ assistent</b> (in the left corner) is always <b> happy to answer your questions</b> ! </overline>
    <p> Ask Away <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
        </svg>
    </p>
    <h5>Some Tips </h5>
    <li> Always check the ANSWERS OVERVIEW |||| TODO: Add suspicious input flags in the OVERVIEW ?</li>
    <li> Use the <b>tab button</b> to navigate faster through the questions </li>
    <li> Use the <b>ENTER button</b> to navigate faster through the pages (To prevent skipping questions -> first use tab to highlight next-btn)</li>
    <br/>
    <h5>Different sorts of activities </h5>
    <img src="../assets/vigorousVSmoderate2.jpg" height="500rem" width="500rem"/> 
    <img src="../assets/moderateVSvigorous.png" height="500rem" width="500rem"/> 
        
    <Chatbot/>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Chatbot from "../components/Chatbot.vue";


@Component({
  components: {
    Chatbot
  },
})

export default class Questionnaire extends Vue {}

</script>