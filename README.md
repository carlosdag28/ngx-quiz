<h1 style="text-align: center">Ngx Quiz</h1>

## Demo

Visit the [Demo site](https://carlosdag28.github.io/ngx-quiz/)

## Installing

```bash
npm install ngx-quiz
```

## Usage

Import NgxQuizModule

```typescript
import {NgxQuizModule} from 'ngx-quiz';

@NgModule({
  imports: [
    NgxQuizModule
  ]
})
```

## Usage

Use it in your template and then pass a Quiz object to the component as follows as an example

```html

<ngx-quiz [quiz]="quiz"></ngx-quiz>
```

## Configuration

### Quiz

| Property             | Type        | Description                                                                       |
|----------------------|-------------|-----------------------------------------------------------------------------------|
| **name**             | string      | The quiz name, if defined, will appear on the start and end screen                |
| **level**            | string      | The quiz level, if defined, will appear on the start and end screen               |
| **duration**         | number      | The quiz duration in ms, if defined, will appear on the start and end screen      |
| **automaticAdvance** | boolean     | Allows you to advance the question automatically after being answered             |
| **returnAllowed**    | boolean     | Allows the user to return to the previous question                                |
| **repeatAllowed**    | boolean     | Allows the user to repeat the test when finished                                  |
| **emitReport**       | boolean     | If set to true, the quiz will emit a report with the user's choices when finished |
| **startScreen**      | StartScreen | Configure the intro screen. If omitted it will not be displayed                   |
| **endScreen**        | EndScreen   | Configure the end screen. If omitted, default values will be used                 |
| **questions**        | Question[]  | An array with the quiz questions                                                  |

### Question

| Property         | Type         | Description                                     |
|------------------|--------------|-------------------------------------------------|
| **type**         | QuestionType | Type of question, for now only 'single' applies |
| **title**        | string       | Title of question                               |
| **description**  | string       | Description of question (optional)              |
| **displayImage** | string       | An url image to display in the question         |
| **answers**      | SingleAnswer | List of possible answers                        |

### SingleAnswer

| Property         | Type   | Description                                            |
|------------------|--------|--------------------------------------------------------|
| **displayImage** | string | An url image to display in the answer                  |
| **displayText**  | string | Answer display text                                    |
| **value**        | number | Value of the answer (this computes for the final score |

### StartScreen & End Screen

| Property         | Type   | Description                       | Default (Only in end screen) |
|------------------|--------|-----------------------------------|------------------------------|
| **title**        | string | Title to show on the screen       | "Congrats!"                  |
| **description**  | string | Description to show on the screen | "You just completed"         |
| **displayImage** | string | Url image to show on the screen   |                              |
| **buttonText**   | string | Text to display on the button     | "Restart"                    |

### Quiz object example

```typescript
const quiz: Quiz = {
  name: 'Angular',
  level: 'Beginner',
  duration: 480,
  automaticAdvance: false,
  returnAllowed: true,
  repeatAllowed: true,
  emitReport: true,
  startScreen: {
    title: '',
    description: '',
    displayImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    buttonText: 'Start'
  },
  endScreen: {
    title: '¡Congratulations!',
    description: 'You complete the quiz!',
    displayImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    buttonText: 'Restart'
  },
  questions: [
    {
      type: 'single',
      title: 'In Angular, you can pass data from the parent component to the child component by using:',
      description: 'Choose the correct answer',
      displayImage: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png',
      answers: [
        {displayText: '@Output()', value: 100},
        {displayText: '@Input()', value: 0},
        {displayText: 'Output', value: 0},
        {displayText: 'Input', value: 0}
      ]
    },
    {
      type: 'single',
      title: 'Which directive connects the value of the controls to the data?',
      description: 'Choose the correct answer',
      displayImage: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png',
      answers: [
        {displayText: 'ng-app', value: 0},
        {displayText: 'ng-init', value: 0},
        {displayText: 'ng-model', value: 100},
        {displayText: 'ng data', value: 0}
      ]
    },
    {
      type: 'single',
      title: 'In Angular routing, which tag is used to render matched component via active route?',
      description: 'Choose the correct answer',
      displayImage: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png',
      answers: [
        {displayText: '<router></router>', value: 0},
        {displayText: '<router-output></router-output>', value: 0},
        {displayText: '<router-outlet></router-outlet>', value: 100},
        {displayText: '<router-display></router-display>', value: 0}
      ]
    }
  ]
};

```
