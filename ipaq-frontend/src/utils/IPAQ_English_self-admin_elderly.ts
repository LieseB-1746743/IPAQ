const pages: any = [
    {
      
        "pageID": 1,
        "model": { "vigorousDays": 0, "moderateDays": 0, "walkingDays": 0, "moderateTimeHours":0, "moderateTimeMinutes":0,"vigorousTimeHours": 0, "vigorousTimeMinutes": 0, "walkingTimeHours": 0, "walkingTimeMinutes": 0, "sittingTimeHours": 0, "sittingTimeMinutes": 0 },
        "schemas": [
          {
              id: 1,
              schema: {
                fields: [
                    {                                            
                        label: 'During the <b>last 7 days</b>, how much time did you spend <b>sitting</b> during a day?',
                                                                    
                    },
                    
                ],
                groups: [{
                    legend: "",
                    styleClasses: "col-md-10",
                    fields: [{
                                type: "input",
                                inputType:"number",                    
                                label: 'Hours ',
                                model: 'sittingTimeHours',
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
                            model: 'sittingTimeMinutes',
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
            showif: function(){
              return true;
            }
          },
        ]
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
                      label: 'During the <b>last 7 days</b>, on how many days did you do <b>walk</b> for at least 10 minutes at a time?',
                      model: 'walkingDays',
                      values: function() {
                          return [
                              {id:0, name:'No walking activities'},
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
            showif: function(){
              return true;
            }
          },
          {
              id: 2,
              schema: {
                  
                  fields: [
                      {                                            
                          label: 'How much time did you usually spend <b>walking</b> on one of those days?',
                                                                      
                      },
                      
                  ],
  
                  groups: [{
                      legend: "",
                      styleClasses: "col-md-10",
                      fields: [{
                                  type: "input",
                                  inputType:"number",                    
                                  label: 'Hours ',
                                  model: 'walkingTimeHours',
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
                              model: 'walkingTimeMinutes',
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
                  return model.walkingDays != 0;
              }
          }
        ]
      },
      {
      
        "pageID": 3,
        "model": {},
        "schemas": [
          {
              id: 1,
              schema: {
                  fields: [
                  {
                      type: 'select',
                      label: 'During the <b>last 7 days</b>, on how many days did you do <b>moderate</b> physical activities like carrying light loads, bicycling at a regular pace, or doubles tennis? <br/>Think <i>only about those physical activities that you did for at least 10 minutes</i> at a time. Do not include walking.',
                      model: 'moderateDays',
                      values: function() {
                          return [
                              {id:0, name:'No moderate physical activities'},
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
            showif: function(){
              return true;
            }
          },
          {
              id: 2,
              schema: {
                  
                  fields: [
                      {                                            
                          label: 'How much time did you usually spend doing <b>moderate</b> physical activities on one of those days?',
                                                                      
                      },
                      
                  ],
  
                  groups: [{
                      legend: "",
                      styleClasses: "col-md-10",
                      fields: [{
                                  type: "input",
                                  inputType:"number",                    
                                  label: 'Hours ',
                                  model: 'moderateTimeHours',
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
                              model: 'moderateTimeMinutes',
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
                  return model.moderateDays != 0;
              }
          }
        ]
      },
    {
      "pageID": 4,
      "model": {},
      "schemas": [
        {
            id: 1,
            schema: {
                fields: [
                {
                    type: 'select',
                    label: 'During the <b>last 7 days</b>, on how many days did you do <b>vigorous</b> physical activities like heavy lifting, heavier garden or construction work, chopping woods, aerobics, jogging/running or fast bicycling? <br/>Think <i>only about those physical activities that you did for at least 10 minutes</i> at a time.',
                    model: 'vigorousDays',
                    values: function() {
                        return [
                            {id:0, name:'No vigorous physical activities'},
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
          showif: function(){
            return true;
          }
        },

        {
            id: 2,
            schema: {
                
                fields: [
                    {                                            
                        label: 'How much time did you usually spend doing <b>vigorous</b> physical activities on one of those days?',
                                                                    
                    },
                    
                ],

                groups: [{     
                    legend: "",
                    styleClasses: "col-md-10",
                    fields: [{
                                type: "input",
                                inputType:"number",                    
                                label: 'Hours ',
                                model: 'vigorousTimeHours',
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
                            model: 'vigorousTimeMinutes',
                            styleClasses: "col-md-3",
                            hint: "0-60",
                            max:60,
                            min:0,
                            value:0,
                            placeholder:"0",
                            validator:['number', 'integer','MinutesValidator']
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
                console.log(model);
                return model.vigorousDays != 0;
            }
        }
      ],
    },
    
   
     
];

const parts:any = [
    {  
        "partID":1,
        "ipaqPartTitle":"Sitting",
        "ipaqPartAnnotation": "The first question is about the time you spent sitting during the last 7 days. Include time spent at work, at home, while doing course work and during leisure time. This may include time spent sitting at a desk, visiting friends, reading, or sitting or lying down to watch television."
    },
    {  
        "partID":2,
        "ipaqPartTitle":"Walking",
        "ipaqPartAnnotation": "Think about the time you spent walking in the last 7 days. This includes at work and at home, walking to travel from place to place, and any other walking that you might do solely for recreation, sport, exercise, or leisure."
   }
   ,
    {  
        "partID":3,
        "ipaqPartTitle":"Moderate Activities",
        "ipaqPartAnnotation": "During the last 7 days, on how many days did you do moderate physical activities like gardening, cleaning, bicycling at a regular pace, swimming or other fitness activities.."
   }
   ,
    {  
        "partID":4,
        "ipaqPartTitle":"Vigorous Activities",
        "ipaqPartAnnotation": "Think only about those physical activities that you did for at least 10 minutes at a time."
   }
];

export default {pages,parts};