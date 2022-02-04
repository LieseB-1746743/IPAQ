<template>
<div id="res">
  
  <table style="margin-bottom:32px;" class="table">
    <tbody>
      <tr>
        <th>Name</th>
        <td> {{user.first_name}} {{user.last_name}}</td>
      </tr>
      <tr>
        <th>Gender</th>
        <td> {{user.gender}}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td> {{user.email}}</td>
      </tr>
      <tr>
        <th>Tel.</th>
        <td> {{user.tel}}</td>
      </tr>
      <tr>
        <th>Form ID</th>
        <td>000457458931</td>
      </tr>
  
      <tr v-if="user.formtype=='long'">
      <th>Form type</th>
      <td>IPAQ LONG</td> 
      </tr>
      <tr v-if="user.formtype=='short'">
      <th>Form type</th>
      <td>IPAQ SHORT</td> 
      </tr>
      <tr v-if="user.formtype=='elderly'">
      <th>Form type</th>
      <td>IPAQ ELDERLY</td> 
      </tr>
      <tr>
        <th>Categorical Score</th>
        <td>{{results.categoricalScore}}</td>
      </tr>
    </tbody>
  </table>

  <h2>Detailed Analysis</h2> 

  <div  v-if="user.formtype=='long'">
  <h5><i>Activity days per week</i></h5>
  Each column represents an activity type (SITTING, WALKING, VIGOROUS, ... ) <br/>
  Rows are different domains (WORK, TRANSPORTATION, HOUSEWORK, ... )
    <table v-if="user.formtype=='long'" class="table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">VIGOROUS</th>
        <th scope="col">MODERATE</th>
        <th scope="col">WALKING</th>
        <th scope="col">SITTING</th>
        <th scope="col">TRAVELING</th>
        <th scope="col">CYCLING</th>
        <th scope="col">MODERATE INSIDE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">WORK</th>
        <td>{{results.daysPerWeekArray[0][0]}}</td>
        <td>{{results.daysPerWeekArray[0][1]}}</td>
        <td>{{results.daysPerWeekArray[0][2]}}</td>
        <td>{{results.daysPerWeekArray[0][3]}}</td>
        <td>{{results.daysPerWeekArray[0][4]}}</td>
        <td>{{results.daysPerWeekArray[0][5]}}</td>
        <td>{{results.daysPerWeekArray[0][6]}}</td>
      </tr>
        <tr>
        <th scope="row">TRANSPORTATION</th>
        <td>{{results.daysPerWeekArray[1][0]}}</td>
        <td>{{results.daysPerWeekArray[1][1]}}</td>
        <td>{{results.daysPerWeekArray[1][2]}}</td>
        <td>{{results.daysPerWeekArray[1][3]}}</td>
        <td>{{results.daysPerWeekArray[1][4]}}</td>
        <td>{{results.daysPerWeekArray[1][5]}}</td>
        <td>{{results.daysPerWeekArray[1][6]}}</td>
      </tr>
        <tr>
        <th scope="row">HOUSEWORK</th>
        <td>{{results.daysPerWeekArray[2][0]}}</td>
        <td>{{results.daysPerWeekArray[2][1]}}</td>
        <td>{{results.daysPerWeekArray[2][2]}}</td>
        <td>{{results.daysPerWeekArray[2][3]}}</td>
        <td>{{results.daysPerWeekArray[2][4]}}</td>
        <td>{{results.daysPerWeekArray[2][5]}}</td>
        <td>{{results.daysPerWeekArray[2][6]}}</td>
      </tr>
        <tr>
        <th scope="row">SITTING</th>
        <td>{{results.daysPerWeekArray[3][0]}}</td>
        <td>{{results.daysPerWeekArray[3][1]}}</td>
        <td>{{results.daysPerWeekArray[3][2]}}</td>
        <td>{{results.daysPerWeekArray[3][3]}}</td>
        <td>{{results.daysPerWeekArray[3][4]}}</td>
        <td>{{results.daysPerWeekArray[3][5]}}</td>
        <td>{{results.daysPerWeekArray[3][6]}}</td>
      </tr>
        <tr>
        <th scope="row">LEISURE</th>
        <td>{{results.daysPerWeekArray[4][0]}}</td>
        <td>{{results.daysPerWeekArray[4][1]}}</td>
        <td>{{results.daysPerWeekArray[4][2]}}</td>
        <td>{{results.daysPerWeekArray[4][3]}}</td>
        <td>{{results.daysPerWeekArray[4][4]}}</td>
        <td>{{results.daysPerWeekArray[4][5]}}</td>
        <td>{{results.daysPerWeekArray[4][6]}}</td>
      </tr>
    </tbody>
  </table>
  <br/>

  <h5><i>MET scores</i></h5>
  <ul>
    <li>Vigorous activity METS: <b>{{results.vigorousMET}}</b> </li>
    <li>Moderate activity METS:  <b>{{results.moderateMET}}</b> </li>
    <li>Walking METS:  <b>{{results.walkingMET}}</b> </li>
  </ul>
  <table v-if="user.formtype=='long'" class="table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">WORK</th>
        <th scope="col">TRANSPORTATION</th>
        <th scope="col">HOUSEWORK</th>
        <th scope="col">SITTING</th>
        <th scope="col">LEISURE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">TOTAL METS = {{results.totalMET}}</th>
        <td>{{results.totalMETSPerDomain[0]}}</td>
        <td>{{results.totalMETSPerDomain[1]}}</td>
        <td>{{results.totalMETSPerDomain[2]}}</td>
        <td>{{results.totalMETSPerDomain[3]}}</td>
        <td>{{results.totalMETSPerDomain[4]}}</td>
      </tr>
    </tbody>
  </table>

  <h5><i>Other interesting stats to plot over time</i></h5>
  <ul>
    <li>Days walking at least 30 min. this week:  {{results.daysWalking30min}}</li>
    <li>Days doing at least 20 min. vigorous activites this week:  {{results.daysOfVigorousActivity20min}}</li>
    <li>Average minutes sitting every day:  {{results.avgSittingPerDay}}</li>
  </ul>
  </div>

  <div  v-if="user.formtype!='long'">
   <h5><i>Activity days per week</i></h5>
    <table v-if="user.formtype!='long'" class="table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">VIGOROUS</th>
        <th scope="col">MODERATE</th>
        <th scope="col">WALKING</th>
        <th scope="col">SITTING</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Active days</th>
        <td>{{results.daysPerWeekArray[0]}}</td>
        <td>{{results.daysPerWeekArray[1]}}</td>
        <td>{{results.daysPerWeekArray[2]}}</td>
        <td>{{results.daysPerWeekArray[3]}}</td>

      </tr>
        
      
    </tbody>
  </table>


  <h5><i>MET scores</i></h5>
  <ul>
    <li>Vigorous activity METS: <b>{{results.vigorousMET}}</b> </li>
    <li>Moderate activity METS:  <b>{{results.moderateMET}}</b> </li>
    <li>Walking METS:  <b>{{results.walkingMET}}</b> </li>
  </ul>

  
  <h5><i>Other interesting stats to plot over time</i></h5>
  <ul>
    <li>Days walking at least 30 min. this week:  {{results.daysWalking30min}}</li>
    <li>Days doing at least 20 min. vigorous activites this week:  {{results.daysOfVigorousActivity20min}}</li>
    <li>Average minutes sitting every day:  {{results.avgSittingPerDay}}</li>
  </ul>
</div>
  <button v-if="!mailSent" type="button" v-on:click="sendMail" class="btn btn-primary btn-lg">Mail my results </button>
  <button  v-if="mailSent" type="button" class="btn btn-success btn-lg">Email was successfully sent to {{user.email}} </button>
</div>
</template>




<script lang="ts" src="./ResultOverview.ts">
</script>

<style scoped>
#res{
    margin-top: 1.5rem;
    margin-bottom: 5rem;
}

h5 {
  margin-top: 16px;
}
</style>