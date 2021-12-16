const pages: any = [
    {
      "pageID": 1,
      "model": { "vigorousDays": 0 },
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
                    type: "dateTimePicker",
                    label: 'How much time did you usually spend doing <b>vigorous</b> physical activities on one of those days?',
                    model: 'vigorousTime',
                    format: "YYYY-MM-DD HH:mm:ss",
                    dateTimePickerOptions: {
                        format: "YYYY-MM-DD HH:mm:ss"
                    }
                }
                ]
            },
            showif: function(model){
                console.log(model);
                return model.vigorousDays != 0;
            }
        }
      ]
    },
    {
      
      "pageID": 2,
      "model": { "moderateDays": 0 },
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
                    type: "dateTimePicker",
                    label: 'How much time did you usually spend doing <b>moderate</b> physical activities on one of those days?',
                    model: 'vigorousTime',
                    format: "YYYY-MM-DD HH:mm:ss",
                    dateTimePickerOptions: {
                        format: "YYYY-MM-DD HH:mm:ss"
                    }
                }
                ]
            },
            showif: function(model){
                console.log(model);
                return model.moderateDays != 0;
            }
        }
      ]
    }
];

export default pages;