import { Component } from '@angular/core';

import { Quiz } from '../../projects/ngx-quiz/src/lib/shared/models/quiz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  quiz: Quiz | any = {
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
          { displayText: '@Output()', value: 100 },
          { displayText: '@Input()', value: 0 },
          { displayText: 'Output', value: 0 },
          { displayText: 'Input', value: 0 }
        ]
      },
      {
        type: 'single',
        title: 'Which directive connects the value of the controls to the data?',
        description: 'Choose the correct answer',
        displayImage: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png',
        answers: [
          { displayText: 'ng-app', value: 0 },
          { displayText: 'ng-init', value: 0 },
          { displayText: 'ng-model', value: 100 },
          { displayText: 'ng data', value: 0 }
        ]
      },
      {
        type: 'single',
        title: 'In Angular routing, which tag is used to render matched component via active route?',
        description: 'Choose the correct answer',
        displayImage: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png',
        answers: [
          { displayText: '<router></router>', value: 0 },
          { displayText: '<router-output></router-output>', value: 0 },
          { displayText: '<router-outlet></router-outlet>', value: 100 },
          { displayText: '<router-display></router-display>', value: 0 }
        ]
      }
    ]
  };
}
