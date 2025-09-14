const employees = [
    {
        "id": 1,
        "first_name": "Amit",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            { "task_title": "Complete monthly report", "task_description": "Prepare the report for the entire month", "active": true, "new_task": false, "completed": false, "failed": false, "date": "2025-01-01", "category": "Reporting" },
            { "task_title": "Team meeting", "task_description": "Attend the weekly team meeting to discuss progress", "active": false, "new_task": false, "completed": true, "failed": false, "date": "2025-01-03", "category": "Meetings" },
            { "task_title": "Bug fix in project A", "task_description": "Fix bugs found in the codebase of project A", "active": false, "new_task": false, "completed": false, "failed": true, "date": "2025-01-05", "category": "Development" }
        ],
        "task_count": {
            "active": 1,
            "failed": 1,
            "completed": 1,
            "new_task": 0
        }
    },
    {
        "id": 2,
        "first_name": "Raj",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            { "task_title": "Design new UI layout", "task_description": "Create a new user interface layout for the application", "active": true, "new_task": true, "completed": false, "failed": false, "date": "2025-01-02", "category": "Design" },
            { "task_title": "Implement new feature", "task_description": "Add a new feature to the app as per requirements", "active": true, "new_task": true, "completed": false, "failed": false, "date": "2025-01-04", "category": "Development" },
            { "task_title": "Review codebase", "task_description": "Review the pull requests and ensure the code quality", "active": false, "new_task": false, "completed": true, "failed": false, "date": "2025-01-06", "category": "Code Review" }
        ],
        "task_count": {
            "active": 2,
            "failed": 0,
            "completed": 1,
            "new_task": 2
        }
    },
    {
        "id": 3,
        "first_name": "Priya",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            { "task_title": "Update database schema", "task_description": "Modify the database schema to accommodate new features", "active": true, "new_task": true, "completed": true, "failed": false, "date": "2025-01-02", "category": "Database" },
            { "task_title": "Write unit tests", "task_description": "Write unit tests for the newly implemented features", "active": true, "new_task": true, "completed": false, "failed": false, "date": "2025-01-05", "category": "Testing" },
            { "task_title": "Refactor legacy code", "task_description": "Refactor the outdated parts of the codebase", "active": true, "new_task": false, "completed": false, "failed": false, "date": "2025-01-07", "category": "Development" }
        ],
        "task_count": {
            "active": 3,
            "failed": 0,
            "completed": 1,
            "new_task": 2
        }
    },
    {
        "id": 4,
        "first_name": "Neha",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            { "task_title": "Develop new feature", "task_description": "Develop a new feature based on the product team's request", "active": true, "new_task": false, "completed": false, "failed": false, "date": "2025-01-01", "category": "Development" },
            { "task_title": "Fix app crash issue", "task_description": "Resolve the issue causing the app to crash on startup", "active": true, "new_task": false, "completed": false, "failed": false, "date": "2025-01-03", "category": "Bug Fix" },
            { "task_title": "Create documentation", "task_description": "Write the API documentation for new endpoints", "active": false, "new_task": false, "completed": true, "failed": false, "date": "2025-01-06", "category": "Documentation" }
        ],
        "task_count": {
            "active": 2,
            "failed": 0,
            "completed": 1,
            "new_task": 1
        }
    },
    {
        "id": 5,
        "first_name": "Vikram",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            { "task_title": "Research market trends", "task_description": "Research the current market trends for our industry", "active": true, "new_task": true, "completed": false, "failed": false, "date": "2025-01-02", "category": "Research" },
            { "task_title": "Analyze customer feedback", "task_description": "Review and analyze customer feedback from surveys", "active": true, "new_task": false, "completed": true, "failed": false, "date": "2025-01-04", "category": "Analysis" },
            { "task_title": "Prepare quarterly presentation", "task_description": "Prepare and design the presentation for the quarterly meeting", "active": true, "new_task": true, "completed": false, "failed": false, "date": "2025-01-07", "category": "Presentation" }
        ],
        "task_count": {
            "active": 3,
            "failed": 0,
            "completed": 1,
            "new_task": 2
        }
    }
];


  const admin=[{
    "id": 1,
    "first_name":"pushkar",
    "email": "admin@example.com",
    "password": "123"
  }]
  export const setLocalStorage=()=>{
      localStorage.setItem("employees",JSON.stringify(employees));
      localStorage.setItem("admin",JSON.stringify(admin));
  }
  
  export const getLocalStorage=()=>{
     const employees=JSON.parse(localStorage.getItem("employees"));
     const admin=JSON.parse(localStorage.getItem("admin"));

     return{employees,admin};
     
  }
  