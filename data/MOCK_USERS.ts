import { Genre, Subscription, User } from '../types/user.type';

const users: User[] = [
  {
    id: 0,
    genre: Genre.male,
    fname: 'Liam',
    lname: 'Carter',
    age: 29,
    imgURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    job: 'Frontend Developer',
    skills: ['JavaScript', 'React', 'CSS'],
    hobbies: ['Hiking', 'Photography', 'Chess'],
    account: {
      status: true,
      subscription: Subscription.member,
    },
    tasks: [
      {
        title: 'Fix navbar bug',
        time: '2h',
        summary: 'Resolve mobile menu collapse issue.',
      },
      {
        title: 'Code review',
        time: '1h',
        summary: 'Review PRs from junior devs.',
      },
    ],
  },
  {
    id: 1,
    genre: Genre.female,
    fname: 'Sophie',
    lname: 'Martin',
    age: 32,
    imgURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    job: 'UX Designer',
    skills: ['Figma', 'Sketch', 'User Research'],
    hobbies: ['Yoga', 'Painting', 'Cooking'],
    account: {
      status: true,
      subscription: Subscription.free,
    },
    tasks: [
      {
        title: 'User interviews',
        time: '3h',
        summary: 'Conduct sessions with 5 users.',
      },
      {
        title: 'Wireframe updates',
        time: '2h',
        summary: 'Revise homepage layout.',
      },
      {
        title: 'Design system sync',
        time: '1h',
        summary: 'Align button styles across screens.',
      },
    ],
  },
  {
    id: 2,
    genre: Genre.male,
    fname: 'Ethan',
    lname: 'Nguyen',
    age: 26,
    imgURL: 'https://randomuser.me/api/portraits/men/3.jpg',
    job: 'Data Scientist',
    skills: ['Python', 'Machine Learning', 'SQL'],
    hobbies: ['Gaming', 'Reading', 'Cycling'],
    account: {
      status: true,
      subscription: Subscription.gold,
    },
    tasks: [
      {
        title: 'Model tuning',
        time: '2.5h',
        summary: 'Optimize accuracy of prediction model.',
      },
      {
        title: 'Data cleaning',
        time: '1h',
        summary: 'Handle null values and outliers.',
      },
      {
        title: 'Monthly report',
        time: '1h',
        summary: 'Summarize KPI trends for leadership.',
      },
      {
        title: 'Script automation',
        time: '0.5h',
        summary: 'Automate daily ETL jobs.',
      },
    ],
  },
  {
    id: 3,
    genre: Genre.female,
    fname: 'Isabella',
    lname: 'López',
    age: 34,
    imgURL: 'https://randomuser.me/api/portraits/women/4.jpg',
    job: 'Marketing Specialist',
    skills: ['SEO', 'Google Ads', 'Content Writing'],
    hobbies: ['Traveling', 'Music', 'Blogging'],
    account: {
      status: false,
      subscription: Subscription.member,
    },
    tasks: [
      {
        title: 'SEO Audit',
        time: '1.5h',
        summary: 'Analyze performance of blog posts.',
      },
      {
        title: 'Ad campaign draft',
        time: '2h',
        summary: 'Create draft for summer sale.',
      },
    ],
  },
  {
    id: 4,
    genre: Genre.male,
    fname: 'Noah',
    lname: 'Smith',
    age: 30,
    imgURL: 'https://randomuser.me/api/portraits/men/5.jpg',
    job: 'DevOps Engineer',
    skills: ['Docker', 'Kubernetes', 'AWS'],
    hobbies: ['Running', 'Guitar', 'DIY Projects'],
    account: {
      status: false,
      subscription: Subscription.free,
    },
    tasks: [],
  },
  {
    id: 5,
    genre: Genre.female,
    fname: 'Ava',
    lname: 'Dubois',
    age: 28,
    imgURL: 'https://randomuser.me/api/portraits/women/6.jpg',
    job: 'Backend Developer',
    skills: ['Node.js', 'PostgreSQL', 'API Design'],
    hobbies: ['Board Games', 'Swimming', 'Photography'],
    account: {
      status: true,
      subscription: Subscription.member,
    },
    tasks: [
      {
        title: 'API refactor',
        time: '2h',
        summary: 'Improve structure for maintainability.',
      },
      {
        title: 'PostgreSQL migration',
        time: '1.5h',
        summary: 'Migrate old schemas to new ones.',
      },
    ],
  },
  {
    id: 6,
    genre: Genre.male,
    fname: 'Lucas',
    lname: 'Meier',
    age: 35,
    imgURL: 'https://randomuser.me/api/portraits/men/7.jpg',
    job: 'Product Manager',
    skills: ['Agile', 'Scrum', 'Communication'],
    hobbies: ['Climbing', 'Cooking', 'Reading'],
    account: {
      status: true,
      subscription: Subscription.member,
    },
    tasks: [
      {
        title: 'Sprint planning',
        time: '1h',
        summary: 'Prepare board for next sprint.',
      },
      {
        title: 'Client call',
        time: '1.5h',
        summary: 'Discuss roadmap with stakeholders.',
      },
      {
        title: 'Backlog grooming',
        time: '1h',
        summary: 'Refine user stories.',
      },
    ],
  },
  {
    id: 7,
    genre: Genre.female,
    fname: 'Chloe',
    lname: 'Tanaka',
    age: 24,
    imgURL: 'https://randomuser.me/api/portraits/women/8.jpg',
    job: 'QA Engineer',
    skills: ['Test Automation', 'Cypress', 'JIRA'],
    hobbies: ['Origami', 'Traveling', 'Singing'],
    account: {
      status: true,
      subscription: Subscription.gold,
    },
    tasks: [
      {
        title: 'Regression testing',
        time: '2h',
        summary: 'Run full test suite on staging.',
      },
      {
        title: 'Bug triage',
        time: '1h',
        summary: 'Verify and categorize open tickets.',
      },
    ],
  },
  {
    id: 8,
    genre: Genre.male,
    fname: 'Gabriel',
    lname: 'Silva',
    age: 31,
    imgURL: 'https://randomuser.me/api/portraits/men/9.jpg',
    job: 'Cybersecurity Analyst',
    skills: ['Network Security', 'Penetration Testing', 'SIEM'],
    hobbies: ['Coding challenges', 'Martial Arts', 'Movies'],
    account: {
      status: false,
      subscription: Subscription.free,
    },
    tasks: [
      {
        title: 'Pen test report',
        time: '3h',
        summary: 'Document vulnerabilities and patches.',
      },
    ],
  },
  {
    id: 9,
    genre: Genre.female,
    fname: 'Emma',
    lname: 'Schneider',
    age: 27,
    imgURL: 'https://randomuser.me/api/portraits/women/10.jpg',
    job: 'AI Researcher',
    skills: ['TensorFlow', 'Deep Learning', 'Python'],
    hobbies: ['Meditation', 'Science Podcasts', 'Sketching'],
    account: {
      status: true,
      subscription: Subscription.gold,
    },
    tasks: [
      {
        title: 'Model training',
        time: '3h',
        summary: 'Run training for new image dataset.',
      },
      {
        title: 'Conference paper',
        time: '2h',
        summary: 'Write abstract and methodology.',
      },
      {
        title: 'Experiment setup',
        time: '1h',
        summary: 'Configure GPU and dependencies.',
      },
      {
        title: 'Dataset cleaning',
        time: '1h',
        summary: 'Remove noisy samples from training set.',
      },
    ],
  },
];

export default users;
