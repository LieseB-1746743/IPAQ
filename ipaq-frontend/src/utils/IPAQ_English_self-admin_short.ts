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
                    type: 'select',
                    label: 'During the <b>last 7 days</b>, on how many days did you do <b>vigorous</b> physical activities like heavy lifting, digging, aerobics, or fast bicycling?',
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
                    label: 'During the <b>last 7 days</b>, on how many days did you do <b>moderate</b> physical activities like carrying light loads, bicycling at a regular pace, or doubles tennis? Do not include walking.',
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
      
        "pageID": 3,
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
      
        "pageID": 4,
        "model": {},
        "schemas": [
          {
              id: 1,
              schema: {
                fields: [
                    {                                            
                        label: 'During the <b>last 7 days</b>, how much time did you spend <b>sitting</b> on a <b>week day</b>?',
                                                                    
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
      }
];

const parts:any = [
    {  
        "partID":1,
        "ipaqPartTitle":"Vigorous activities",
        "ipaqPartAnnotation": "Think about all the vigorous activities that you did in the last 7 days. Vigorous physical activities refer to activities that take hard physical effort and make you breathe much harder than normal. Think only about those physical activities that you did for at least 10 minutes at a time."
    },
    {  
        "partID":2,
        "ipaqPartTitle":"Moderate activities",
        "ipaqPartAnnotation": "Think about all the moderate activities that you did in the last 7 days. Moderate activities refer to activities that take moderate physical effort and make you breathe somewhat harder than normal. Think only about those physical activities that you did for at least 10 minutes at a time."
   }
   ,
    {  
        "partID":3,
        "ipaqPartTitle":"Walking",
        "ipaqPartAnnotation": "Think about the time you spent walking in the last 7 days. This includes at work and at home, walking to travel from place to place, and any other walking that you have done solely for recreation, sport, exercise, or leisure."
   }
   ,
    {  
        "partID":4,
        "ipaqPartTitle":"Sitting",
        "ipaqPartAnnotation": "The last question is about the time you spent sitting on weekdays during the last 7 days. Include time spent at work, at home, while doing course work and during leisure time. This may include time spent sitting at a desk, visiting friends, reading, or sitting or lying down to watch television."
   }
];

export default {pages,parts};