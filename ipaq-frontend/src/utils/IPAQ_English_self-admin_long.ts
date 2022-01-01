const pages: any = [
    {
      "pageID": 1,
      "model": { "job": 0, "jobVigorousDays": 0, "jobModerateDays": 0, "jobWalkingDays": 0},
      "schemas": [
        {
            id: 1,
            schema: {
                fields: [
                {
                    type: 'radios',
                    label: 'Do you currently have a job or do any unpaid work outside your home?',
                    model: 'job',
                    values: function() {
                        return [
                            {name:"Yes", value:true},
                            {name:"No", value:false},
                           
                        ]
                    },               
                    required: true,
                }
                ]
          }, 
          showif: function(){
            return true;
          }
        },
        {
            id: 2,
            schema: {
                fields: [
                {
                    type: 'select',
                    label: 'During the <b>last 7 days</b>, on how many days did you do <b>vigorous</b> physical activities like heavy lifting, digging, aerobics, or fast bicycling?',
                    model: 'jobVigorousDays',
                    values: function() {
                        return [
                            {id:0, name:'No vigorous job-related physical activity'},
                            {id:1, name:'1 day'},
                            {id:2, name:'2 days'},
                            {id:3, name: '3 days'},
                            {id:4, name: '4 days'},
                            {id:5, name: '5 days'},
                            {id:6, name: '6 days'},
                            {id:7, name: '7 days'}

                        ]
                    },               
                    required: true,
                }
                ]
          }, 
          showif: function(model){
            return model.job != false;
          }
        },

        {
            id: 3,
            schema: {
                
                fields: [
                    {                                            
                        label: 'How much time did you usually spend on one of those days doing <b>vigorous</b> physical activities as part of your work?',
                                                                    
                    },
                    
                ],

                groups: [{
                    legend: "",
                    styleClasses: "col-md-10",
                    fields: [{
                                type: "input",
                                inputType:"number",                    
                                label: 'Hours ',
                                model: 'jobVigorousTimeHours',
                                styleClasses: "col-md-3",
                                hint: "0-16",
                                max:16,
                                min:0,
                                value:0,
                                placeholder:"0",
                                validator:['number', 'integer']
                        },
                        {
                            type: "input",
                            inputType:"number",
                            label: 'Minutes per day',
                            model: 'jobVigorousTimeMinutes',
                            styleClasses: "col-md-3",
                            hint: "0-60",
                            max:60,
                            min:0,
                            value:0,
                            placeholder:"0",
                            validator:['number', 'integer']
                        }
                    ]
                },
                ]

        },
        
        formOptions: {
            validateAfterLoad: true,
            validateAfterChanged: true
        },
            showif: function(model){
                return model.jobVigorousDays != 0;
            }
        },
        {
            id: 4,
            schema: {
                fields: [
                {
                    type: 'select',
                    label: 'Again, think about only those physical activities that you did for at least 10 minutes at a time. During the <b>last 7 days</b>, on how many days did you do <b>moderate</b> physical activities like carrying light loads <b>as part of your work</b>? Please do not include walking.',
                    model: 'jobModerateDays',
                    values: function() {
                        return [
                            {id:0, name:'No moderate job-related physical activity'},
                            {id:1, name:'1 day'},
                            {id:2, name:'2 days'},
                            {id:3, name: '3 days'},
                            {id:4, name: '4 days'},
                            {id:5, name: '5 days'},
                            {id:6, name: '6 days'},
                            {id:7, name: '7 days'}

                        ]
                    },               
                    required: true,
                }
                ]
          }, 
          showif: function(model){
            return model.job != false;
          }
        },
        {
            id: 5,
            schema: {
                
                fields: [
                    {                                            
                        label: 'How much time did you usually spend on one of those days doing <b>moderate</b> physical activities as part of your work?',
                                                                    
                    },
                    
                ],

                groups: [{
                    legend: "",
                    styleClasses: "col-md-10",
                    fields: [{
                                type: "input",
                                inputType:"number",                    
                                label: 'Hours ',
                                model: 'jobModerateTimeHours',
                                styleClasses: "col-md-3",
                                hint: "0-16",
                                max:16,
                                min:0,
                                value:0,
                                placeholder:"0",
                                validator:['number', 'integer']
                        },
                        {
                            type: "input",
                            inputType:"number",
                            label: 'Minutes per day',
                            model: 'jobModerateTimeMinutes',
                            styleClasses: "col-md-3",
                            hint: "0-60",
                            max:60,
                            min:0,
                            value:0,
                            placeholder:"0",
                            validator:['number', 'integer']
                        }
                    ]
                },
                ]

        },
        
        formOptions: {
            validateAfterLoad: true,
            validateAfterChanged: true
        },
            showif: function(model){
                return model.jobModerateDays != 0;
            }
        },
        {
            id: 6,
            schema: {
                fields: [
                {
                    type: 'select',
                    label: 'During the <b>last 7 days</b>, on how many days did you <b>walk</b> for at least 10 minutes at a time <b>as part of your work</b>? Please do not count any walking you did to travel to or from work.',
                    model: 'jobWwalkingDays',
                    values: function() {
                        return [
                            {id:0, name:'No job-related walking'},
                            {id:1, name:'1 day'},
                            {id:2, name:'2 days'},
                            {id:3, name: '3 days'},
                            {id:4, name: '4 days'},
                            {id:5, name: '5 days'},
                            {id:6, name: '6 days'},
                            {id:7, name: '7 days'}

                        ]
                    },               
                    required: true,
                }
                ]
          }, 
          showif: function(model){
            return model.job != false;
          }
        },
        {
            id: 7,
            schema: {
                
                fields: [
                    {                                            
                        label: 'How much time did you usually spend on one of those days <b>walking</b> as part of your work?',
                                                                    
                    },
                    
                ],

                groups: [{
                    legend: "",
                    styleClasses: "col-md-10",
                    fields: [{
                                type: "input",
                                inputType:"number",                    
                                label: 'Hours ',
                                model: 'jobWalkingTimeHours',
                                styleClasses: "col-md-3",
                                hint: "0-16",
                                max:16,
                                min:0,
                                value:0,
                                placeholder:"0",
                                validator:['number', 'integer']
                        },
                        {
                            type: "input",
                            inputType:"number",
                            label: 'Minutes per day',
                            model: 'jobWalkingTimeMinutes',
                            styleClasses: "col-md-3",
                            hint: "0-60",
                            max:60,
                            min:0,
                            value:0,
                            placeholder:"0",
                            validator:['number', 'integer']
                        }
                    ]
                },
                ]
        },
            showif: function(model){
                console.log(model);
                return model.jobWalkingDays != 0;
            }
        }
      ],
    },
    {
      
      "pageID": 2,
      "model": {},
      "schemas": [
        {
            id: 1,
            schema: {
                fields: [
                {
                    type: 'select',
                    label: 'Analoog aan vorige page => FIRST optimize short & first page form',
                    model: 'TODO',
                    values: function() {
                        return [
                            {id:0, name:'OPTION'},
                         

                        ]
                    },               
                    required: true,
                }
                ]
          }, 
          showif: function(){
            return true;
          }
        },

        ]
      }
];

const parts:any = [
    {  
        "partID":1,
        "ipaqPartTitle":"PART1: JOB-RELATED PHYSICAL ACTIVITY",
        "ipaqPartAnnotation": "The first section is about your work. This includes paid jobs, farming, volunteer work, course work, and any other unpaid work that you did outside your home. Do not include unpaid work you might do around your home, like housework, yard work, general maintenance, and caring for your family. These are asked in Part 3."
    },
    {  
        "partID":2,
        "ipaqPartTitle":"PART 2: TRANSPORTATION PHYSICAL ACTIVITY",
        "ipaqPartAnnotation": "These questions are about how you traveled from place to place, including to places like work, stores, movies, and so on."
    }
   ,
    {  
        "partID":3,
        "ipaqPartTitle":"PART 3: HOUSEWORK, HOUSE MAINTENANCE, AND CARING FOR FAMILY",
        "ipaqPartAnnotation": "This section is about some of the physical activities you might have done in the last 7 days in and around your home, like housework, gardening, yard work, general maintenance work, and caring for your family."
    }
   ,
    {  
        "partID":4,
        "ipaqPartTitle":"PART 4: RECREATION, SPORT, AND LEISURE-TIME PHYSICAL ACTIVITY",
        "ipaqPartAnnotation": "This section is about all the physical activities that you did in the last 7 days solely for recreation, sport, exercise or leisure. Please do not include any activities you have already mentioned."
   }
   ,
    {  
        "partID":5,
        "ipaqPartTitle":"PART 5: TIME SPENT SITTING",
        "ipaqPartAnnotation": "The last questions are about the time you spend sitting while at work, at home, while doing course work and during leisure time. This may include time spent sitting at a desk, visiting friends, reading or sitting or lying down to watch television. Do not include any time spent sitting in a motor vehicle that you have already told me about."
   }
];

export default {pages,parts};