# <img src="src/components/nav/darklogo.svg" height="40px" width="40px"> CPR - Copy Paste Refactor

CPR is a React web app with full CRUD functionality that allows users to keep track of code snippets from past projects and view other Users Snippets. Users can comment on other users Code Snippets offering advice or asking for help. Users can edit and delete their code snippets. Also Users can Filter code languages to find a specific snippet. Prism.js was used to display the code documentation formatting.

<img src="./public/dashboard.PNG" height="400px" width="700px"> <img src="./public/userview.PNG" height="400px" width="700px">

## Installation

Install react packages:

```bash
npm create-react-app
npm i

npm start from the root directory to run application
```

---

## Database sample

Create a json file named database.json with the provided sample data and run a json server watching database.json on port 8088

```JSON
{
  "users": [],
  "code": [],
  "notes": [],
  "codeTypes": [
    {
      "id": 1,
      "codeId": 1,
      "type": "csharp"
    },
    {
      "id": 2,
      "codeId": 2,
      "type": "jsx"
    },
    {
      "id": 3,
      "codeId": 3,
      "type": "javascript"
    },
    {
      "id": 4,
      "codeId": 4,
      "type": "dotnet"
    },
    {
      "id": 5,
      "codeId": 5,
      "type": "css"
    },
    {
      "id": 6,
      "codeId": 6,
      "type": "ruby"
    },
    {
      "id": 7,
      "codeId": 7,
      "type": "python"
    },
    {
      "id": 8,
      "codeId": 8,
      "type": "json"
    },
    {
      "id": 9,
      "codeId": 9,
      "type": "django"
    }
  ]
}

```

---

## Usage

1. Click on "Login" button
2. Register a new user
3. Navigate to the "add code" tab on the navbar
4. Click "submit" button on add code form and add new code snippet
5. Navigate to the "your code" tab on the navbar and add view your code
6. Navigate to the "select language" dropdown and click a language to filter code by coding language
7. Navigate to "Dashboard" view on navbar to view all other users code snippets
8. Navigate to the "select language" dropdown and click a language to filter code by coding language
