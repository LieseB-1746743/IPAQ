const pages: any = [
  {
    pageID: 1,
    model: {
      job: -1,
      jobVigorousDays: 0,
      jobVigorousTimeHours: 0,
      jobVigorousTimeMinutes: 0,
      jobModerateDays: 0,
      jobModerateTimeHours: 0,
      jobModerateTimeMinutes: 0,
      jobWalkingDays: 0,
      jobWalkingTimeHours: 0,
      jobWalkingTimeMinutes: 0,
      transTravelDays: 0,
      transTravelTimeHours: 0,
      transTravelTimeMinutes: 0,
      transBicycleDays: 0,
      transBicycleTimeHours: 0,
      transBicycleTimeMinutes: 0,
      transWalkingDays: 0,
      transWalkingTimeHours: 0,
      transWalkingTimeMinutes: 0,
      gardenVigorousDays: 0,
      gardenVigorousTimeHours: 0,
      gardenVigorousTimeMinutes: 0,
      gardenModerateDays: 0,
      gardenModerateTimeHours: 0,
      gardenModerateTimeMinutes: 0,
      insideModerateDays: 0,
      insideModerateTimeHours: 0,
      insideModerateTimeMinutes: 0,
      leisureWalkingDays: 0,
      leisureWalkingTimeHours: 0,
      leisureWalkingTimeMinutes: 0,
      leisureVigorousDays: 0,
      leisureVigorousTimeHours: 0,
      leisureVigorousTimeMinutes: 0,
      leisureModerateDays: 0,
      leisureModerateTimeHours: 0,
      leisureModerateTimeMinutes: 0,
      sittingWeekdayTimeHours: 0,
      sittingWeekdayTimeMinutes: 0,
      sittingWeekenddayTimeHours: 0,
      sittingWeekenddayTimeMinutes: 0,
    },
    schemas: [
      {
        id: 1,
        schema: {
          fields: [
            {
              type: "radios",
              label:
                "Do you currently have a job or do any unpaid work outside your home?",
              model: "job",
              values: function () {
                return [
                  { name: "Yes", value: true },
                  { name: "No", value: false },
                ];
              },
              required: true,
            },
          ],
        },
        formOptions: {
          validateAfterLoad: true,
          validateAfterChanged: true,
        },
        showif: function () {
          return true;
        },
      },
      {
        id: 2,
        schema: {
          fields: [
            {
              type: "select",
              label:
                "During the <b>last 7 days</b>, on how many days did you do <b>vigorous</b> physical activities like heavy lifting, digging, heavy construction, or climbing up stairs <b>as part of your work</b>? <br/>Think about only those physical activities that you did for at least 10 minutes at a time.",
              model: "jobVigorousDays",
              values: function () {
                return [
                  { id: 0, name: "No vigorous job-related physical activity" },
                  { id: 1, name: "1 day" },
                  { id: 2, name: "2 days" },
                  { id: 3, name: "3 days" },
                  { id: 4, name: "4 days" },
                  { id: 5, name: "5 days" },
                  { id: 6, name: "6 days" },
                  { id: 7, name: "7 days" },
                ];
              },
              required: true,
            },
          ],
        },
        showif: function (model) {
          return model.job && model.job != -1;
        },
      },

      {
        id: 3,
        schema: {
          fields: [
            {
              label:
                "How much time did you usually spend on one of those days doing <b>vigorous</b> physical activities as part of your work?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "jobVigorousTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "jobVigorousTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },

        formOptions: {
          validateAfterLoad: true,
          validateAfterChanged: true,
        },
        showif: function (model) {
          return model.jobVigorousDays != 0;
        },
      },
      {
        id: 4,
        schema: {
          fields: [
            {
              type: "select",
              label:
                "During the <b>last 7 days</b>, on how many days did you do <b>moderate</b> physical activities like carrying light loads <b>as part of your work</b>? <br/>Please do not include walking. <br/>Again, think about only those physical activities that you did for at least 10 minutes at a time.",
              model: "jobModerateDays",
              values: function () {
                return [
                  { id: 0, name: "No moderate job-related physical activity" },
                  { id: 1, name: "1 day" },
                  { id: 2, name: "2 days" },
                  { id: 3, name: "3 days" },
                  { id: 4, name: "4 days" },
                  { id: 5, name: "5 days" },
                  { id: 6, name: "6 days" },
                  { id: 7, name: "7 days" },
                ];
              },
              required: true,
            },
          ],
        },
        showif: function (model) {
          return model.job != 0 && model.job != -1;
        },
      },
      {
        id: 5,
        schema: {
          fields: [
            {
              label:
                "How much time did you usually spend on one of those days doing <b>moderate</b> physical activities as part of your work?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "jobModerateTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "jobModerateTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },

        formOptions: {
          validateAfterLoad: true,
          validateAfterChanged: true,
        },
        showif: function (model) {
          return model.jobModerateDays != 0;
        },
      },
      {
        id: 6,
        schema: {
          fields: [
            {
              type: "select",
              label:
                "During the <b>last 7 days</b>, on how many days did you <b>walk</b> for at least 10 minutes at a time <b>as part of your work</b>? <br/>Please do not count any walking you did to travel to or from work.",
              model: "jobWalkingDays",
              values: function () {
                return [
                  { id: 0, name: "No job-related walking" },
                  { id: 1, name: "1 day" },
                  { id: 2, name: "2 days" },
                  { id: 3, name: "3 days" },
                  { id: 4, name: "4 days" },
                  { id: 5, name: "5 days" },
                  { id: 6, name: "6 days" },
                  { id: 7, name: "7 days" },
                ];
              },
              required: true,
            },
          ],
        },
        showif: function (model) {
          return model.job != false && model.job != -1;
        },
      },
      {
        id: 7,
        schema: {
          fields: [
            {
              label:
                "How much time did you usually spend on one of those days <b>walking</b> as part of your work?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "jobWalkingTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "jobWalkingTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },
        showif: function (model) {
          console.log(model);
          return model.jobWalkingDays != 0;
        },
      },
    ],
  },
  {
    pageID: 2,
    model: {},
    schemas: [
      {
        id: 1,
        schema: {
          fields: [
            {
              type: "select",
              label:
                "During the <b>last 7 days</b>,on how many days did you <b>travel in a motor vehicle</b> like a train, bus, car, or tram?",
              model: "transTravelDays",
              values: function () {
                return [
                  { id: 0, name: "No traveling in a motor vehicle" },
                  { id: 1, name: "1 day" },
                  { id: 2, name: "2 days" },
                  { id: 3, name: "3 days" },
                  { id: 4, name: "4 days" },
                  { id: 5, name: "5 days" },
                  { id: 6, name: "6 days" },
                  { id: 7, name: "7 days" },
                ];
              },
              required: true,
            },
          ],
        },
        showif: function (model) {
          return true;
        },
      },
      {
        id: 2,
        schema: {
          fields: [
            {
              label:
                "How much time did you usually spend on one of those days <b>traveling</b> in a train, bus, car, tram, or other kind of motor vehicle?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "transTravelTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "transTravelTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },

        formOptions: {
          validateAfterLoad: true,
          validateAfterChanged: true,
        },
        showif: function (model) {
          return model.transTravelDays != 0;
        },
      },
      {
        id: 3,
        schema: {
          fields: [
            {
              type: "select",
              label:
                "During the <b>last 7 days</b>, on how many days did you <b>bicycle</b> for at least 10 minutes at a time to go <b>from place to place?</b>",
              model: "transBicycleDays",
              values: function () {
                return [
                  { id: 0, name: "No bicycling from place to place" },
                  { id: 1, name: "1 day" },
                  { id: 2, name: "2 days" },
                  { id: 3, name: "3 days" },
                  { id: 4, name: "4 days" },
                  { id: 5, name: "5 days" },
                  { id: 6, name: "6 days" },
                  { id: 7, name: "7 days" },
                ];
              },
              required: true,
            },
          ],
        },
        showif: function (model) {
          return true;
        },
      },
      {
        id: 4,
        schema: {
          fields: [
            {
              label:
                "How much time did you usually spend on one of those days <b>bicycle</b> from place to place?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "transBicycleTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "transBicycleTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },
        showif: function (model) {
          console.log(model);
          return model.transBicycleDays != 0;
        },
      },
      {
        id: 5,
        schema: {
          fields: [
            {
              type: "select",
              label:
                "During the <b>last 7 days</b>, on how many days did you <b>walk</b> for at least 10 minutes at a time <b>as part of your work</b>? <br/>Please do not count any walking you did to travel to or from work.",
              model: "transWalkingDays",
              values: function () {
                return [
                  { id: 0, name: "No walking from place to place" },
                  { id: 1, name: "1 day" },
                  { id: 2, name: "2 days" },
                  { id: 3, name: "3 days" },
                  { id: 4, name: "4 days" },
                  { id: 5, name: "5 days" },
                  { id: 6, name: "6 days" },
                  { id: 7, name: "7 days" },
                ];
              },
              required: true,
            },
          ],
        },
        showif: function (model) {
          return true;
        },
      },
      {
        id: 6,
        schema: {
          fields: [
            {
              label:
                "How much time did you usually spend on one of those days <b>walking</b> from place to place?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "transWalkingTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "transWalkingTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },
        showif: function (model) {
          console.log(model);
          return model.transWalkingDays != 0;
        },
      },
    ],
  },
  {
    pageID: 3,
    model: {},
    schemas: [
      {
        id: 1,
        schema: {
          fields: [
            {
              type: "select",
              label:
                "During the <b>last 7 days</b>, on how many days did you do <b>vigorous</b> physical activities like heavy lifting, chopping wood, shoveling snow, or digging <b>in the garden or yard</b>? <br/> Think about only those physical activities that you did for at least 10 minutes at a time.",
              model: "gardenVigorousDays",
              values: function () {
                return [
                  { id: 0, name: "No vigorous activity in garden or yard" },
                  { id: 1, name: "1 day" },
                  { id: 2, name: "2 days" },
                  { id: 3, name: "3 days" },
                  { id: 4, name: "4 days" },
                  { id: 5, name: "5 days" },
                  { id: 6, name: "6 days" },
                  { id: 7, name: "7 days" },
                ];
              },
              required: true,
            },
          ],
        },
        showif: function (model) {
          return true;
        },
      },
      {
        id: 2,
        schema: {
          fields: [
            {
              label:
                "How much time did you usually spend on one of those days doing <b>vigorous</b> physical activities in the garden or yard?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "gardenVigorousTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "gardenVigorousTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },

        formOptions: {
          validateAfterLoad: true,
          validateAfterChanged: true,
        },
        showif: function (model) {
          return model.gardenVigorousDays != 0;
        },
      },
      {
        id: 3,
        schema: {
          fields: [
            {
              type: "select",
              label:
                "During the <b>last 7 days</b>, on how many days did you do <b>moderate</b> activities activities like carrying light loads, sweeping, washing windows, and raking <b>in the garden or yard</b>? <br/>Again, think about only those physical activities that you did for at least 10 minutes at a time.",
              model: "gardenModerateDays",
              values: function () {
                return [
                  { id: 0, name: "No moderate activity in garden or yard" },
                  { id: 1, name: "1 day" },
                  { id: 2, name: "2 days" },
                  { id: 3, name: "3 days" },
                  { id: 4, name: "4 days" },
                  { id: 5, name: "5 days" },
                  { id: 6, name: "6 days" },
                  { id: 7, name: "7 days" },
                ];
              },
              required: true,
            },
          ],
        },
        showif: function (model) {
          return true;
        },
      },
      {
        id: 4,
        schema: {
          fields: [
            {
              label:
                "How much time did you usually spend on one of those days doing <b>moderate</b> activities in the garden or yard?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "gardenModerateTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "gardenModerateTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },
        showif: function (model) {
          console.log(model);
          return model.gardenModerateDays != 0;
        },
      },
      {
        id: 5,
        schema: {
          fields: [
            {
              type: "select",
              label:
                "During the <b>last 7 days</b>, on how many days did you do <b>moderate</b> activities like carrying light loads, washing windows, scrubbing floors and sweeping <b>inside your home</b>? <br/>Once again, think about only those physical activities that you did for at least 10 minutes at a time.",
              model: "insideModerateDays",
              values: function () {
                return [
                  { id: 0, name: "No moderate activity inside home" },
                  { id: 1, name: "1 day" },
                  { id: 2, name: "2 days" },
                  { id: 3, name: "3 days" },
                  { id: 4, name: "4 days" },
                  { id: 5, name: "5 days" },
                  { id: 6, name: "6 days" },
                  { id: 7, name: "7 days" },
                ];
              },
              required: true,
            },
          ],
        },
        showif: function (model) {
          return true;
        },
      },
      {
        id: 6,
        schema: {
          fields: [
            {
              label:
                "How much time did you usually spend on one of those days doing <b>moderate</b> physical activities inside your home?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "insideModerateTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "insideModerateTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },
        showif: function (model) {
          console.log(model);
          return model.insideModerateDays != 0;
        },
      },
    ],
  },
  {
    pageID: 4,
    model: {},
    schemas: [
      {
        id: 1,
        schema: {
          fields: [
            {
              type: "select",
              label:
                "<i>Not counting any walking you have already mentioned</i>, during the <b>last 7 days</b>, on how many days did you <b>walk</b> for at least 10 minutes at a time in your leisure time?",
              model: "leisureWalkingDays",
              values: function () {
                return [
                  { id: 0, name: "No walking in leisure time" },
                  { id: 1, name: "1 day" },
                  { id: 2, name: "2 days" },
                  { id: 3, name: "3 days" },
                  { id: 4, name: "4 days" },
                  { id: 5, name: "5 days" },
                  { id: 6, name: "6 days" },
                  { id: 7, name: "7 days" },
                ];
              },
              required: true,
            },
          ],
        },
        showif: function (model) {
          return true;
        },
      },
      {
        id: 2,
        schema: {
          fields: [
            {
              label:
                "During the <b>last 7 days</b>, on how many days did you do <b>vigorous</b> physical activities like aerobics, running, fast bicycling, or fast swimming <b>in your leisure time</b>? <br/>Think about only those physical activities that you did for at least 10 minutes at a time.?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "leisureWalkingTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "leisureWalkingTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },

        formOptions: {
          validateAfterLoad: true,
          validateAfterChanged: true,
        },
        showif: function (model) {
          return model.leisureWalkingDays != 0;
        },
      },
      {
        id: 3,
        schema: {
          fields: [
            {
              type: "select",
              label:
                "During the <b>last 7 days</b>, on how many days did you do <b>vigorous</b> activities activities like aerobics, running, fast bicycling, or fast swimming <b>in your leisure time</b>? <br/>Again, think about only those physical activities that you did for at least 10 minutes at a time.",
              model: "leisureVigorousDays",
              values: function () {
                return [
                  { id: 0, name: "No vigorous activity in leisure time" },
                  { id: 1, name: "1 day" },
                  { id: 2, name: "2 days" },
                  { id: 3, name: "3 days" },
                  { id: 4, name: "4 days" },
                  { id: 5, name: "5 days" },
                  { id: 6, name: "6 days" },
                  { id: 7, name: "7 days" },
                ];
              },
              required: true,
            },
          ],
        },
        showif: function (model) {
          return true;
        },
      },
      {
        id: 4,
        schema: {
          fields: [
            {
              label:
                "How much time did you usually spend on one of those days doing <b>vigorous</b> activities in your leisure time?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "leisureVigorousTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "leisureVigorousTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },
        showif: function (model) {
          console.log(model);
          return model.leisureVigorousDays != 0;
        },
      },
      {
        id: 5,
        schema: {
          fields: [
            {
              type: "select",
              label:
                "During the <b>last 7 days</b>, on how many days did you do <b>moderate</b> activities like bicycling at a regular pace, swimming at a regular pace, and doubles tennis <b>in your leisure time</b>? <br/>Again, think about only those physical activities that you did for at least 10 minutes at a time.",
              model: "leisureModerateDays",
              values: function () {
                return [
                  { id: 0, name: "No moderate activity in leisure time" },
                  { id: 1, name: "1 day" },
                  { id: 2, name: "2 days" },
                  { id: 3, name: "3 days" },
                  { id: 4, name: "4 days" },
                  { id: 5, name: "5 days" },
                  { id: 6, name: "6 days" },
                  { id: 7, name: "7 days" },
                ];
              },
              required: true,
            },
          ],
        },
        showif: function (model) {
          return true;
        },
      },
      {
        id: 6,
        schema: {
          fields: [
            {
              label:
                "How much time did you usually spend on one of those days doing <b>moderate</b> physical activities in your leisure time?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "leisureModerateTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "leisureModerateTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },
        showif: function (model) {
          console.log(model);
          return model.leisureModerateDays != 0;
        },
      },
    ],
  },
  {
    pageID: 5,
    model: {},
    schemas: [
      {
        id: 1,
        schema: {
          fields: [
            {
              label:
                "During the last 7 days, how much time did you usually spend <b>sitting</b> on a <b>weekday</b>?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "sittingWeekdayTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "sittingWeekdayTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },
        showif: function (model) {
          return true;
        },
      },
      {
        id: 2,
        schema: {
          fields: [
            {
              label:
                "During the last 7 days, how much time did you usually spend <b>sitting</b> on a <b>weekend day</b>?",
            },
          ],

          groups: [
            {
              legend: "",
              styleClasses: "col-md-10",
              fields: [
                {
                  type: "input",
                  inputType: "number",
                  label: "Hours ",
                  model: "sittingWeekenddayTimeHours",
                  styleClasses: "col-md-3",
                  hint: "0-16",
                  max: 16,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
                {
                  type: "input",
                  inputType: "number",
                  label: "Minutes per day",
                  model: "sittingWeekenddayTimeMinutes",
                  styleClasses: "col-md-3",
                  hint: "0-60",
                  max: 60,
                  min: 0,
                  value: 0,
                  placeholder: "0",
                  validator: ["number", "integer"],
                },
              ],
            },
          ],
        },
        showif: function (model) {
          return true;
        },
      },
    ],
  },
];

const parts: any = [
  {
    partID: 1,
    ipaqPartTitle: "PART1: JOB-RELATED PHYSICAL ACTIVITY",
    ipaqPartAnnotation:
      "The first section is about your work. This includes paid jobs, farming, volunteer work, course work, and any other unpaid work that you did outside your home. Do not include unpaid work you might do around your home, like housework, yard work, general maintenance, and caring for your family. These are asked in Part 3.",
  },
  {
    partID: 2,
    ipaqPartTitle: "PART 2: TRANSPORTATION PHYSICAL ACTIVITY",
    ipaqPartAnnotation:
      "These questions are about how you traveled from place to place, including to places like work, stores, movies, and so on.",
  },
  {
    partID: 3,
    ipaqPartTitle:
      "PART 3: HOUSEWORK, HOUSE MAINTENANCE, AND CARING FOR FAMILY",
    ipaqPartAnnotation:
      "This section is about some of the physical activities you might have done in the last 7 days in and around your home, like housework, gardening, yard work, general maintenance work, and caring for your family.",
  },
  {
    partID: 4,
    ipaqPartTitle:
      "PART 4: RECREATION, SPORT, AND LEISURE-TIME PHYSICAL ACTIVITY",
    ipaqPartAnnotation:
      "This section is about all the physical activities that you did in the last 7 days solely for recreation, sport, exercise or leisure. Please do not include any activities you have already mentioned.",
  },
  {
    partID: 5,
    ipaqPartTitle: "PART 5: TIME SPENT SITTING",
    ipaqPartAnnotation:
      "The last questions are about the time you spend sitting while at work, at home, while doing course work and during leisure time. This may include time spent sitting at a desk, visiting friends, reading or sitting or lying down to watch television. Do not include any time spent sitting in a motor vehicle that you have already told me about.",
  },
];

export default { pages, parts };
