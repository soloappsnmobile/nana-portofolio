import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  constructor() { }


  skills = [
    {
      name: 'FIGMA',
      image: 'assets/images/icons/figma.svg'
    },
    {
      name: 'FRAMER',
      image: 'assets/images/icons/framer.svg'
    },
    {
      name: 'SKETCH',
      image: 'assets/images/icons/sketch.svg'
    },
    {
      name: 'ILLUSTRATOR',
      image: 'assets/images/icons/ai.svg'
    },
    {
      name: 'PHOTOSHOP',
      image: 'assets/images/icons/ps.svg'
    },
    {
      name: 'AFTER EFFECTS',
      image: 'assets/images/icons/ae.svg'
    },
    {
      name: 'WEBFLOW',
      image: 'assets/images/icons/webflow.svg'
    }
  ];


  wireframes = [
    {
      name: 'FigJam',
    },
    {
      name: 'Adobe XD',
    },
    {
      name: 'Invision App',
    },
    {
      name: 'Overflow',
    }
  ]


  keySkills = [
    {
      name: 'Concept development',
    },
    {
      name: 'UI/UX design',
    },
    {
      name: 'Interactive Design',
    },
    {
      name: 'Art Direction',
    },
    {
      name: 'Qualitative research'
    },
    {
      name: 'Data analysis'
    },
    {
      name: 'Critical thinking'
    }
  ]
}
