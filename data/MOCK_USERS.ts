import { Subscription, User } from '../types/user.type';

const MOCK_USERS: User[] = [
  {
    id: 0,
    genre: 'male',
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
        id: 0,
        title: 'Fix navbar bug',
        time: '2h',
        summary: 'Resolve mobile menu collapse issue.',
        status: false,
      },
      {
        id: 1,
        title: 'Code review',
        time: '1h',
        summary: 'Review PRs from junior devs.',
        status: false,
      },
    ],
  },
  {
    id: 1,
    genre: 'female',
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
        id: 0,
        title: 'User interviews',
        time: '3h',
        summary: 'Conduct sessions with 5 users.',
        status: false,
      },
      {
        id: 1,
        title: 'Wireframe updates',
        time: '2h',
        summary: 'Revise homepage layout.',
        status: false,
      },
      {
        id: 2,
        title: 'Design system sync',
        time: '1h',
        summary: 'Align button styles across screens.',
        status: false,
      },
    ],
  },
  {
    id: 2,
    genre: 'male',
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
        id: 0,
        title: 'Model tuning',
        time: '2.5h',
        summary: 'Optimize accuracy of prediction model.',
        status: false,
      },
      {
        id: 1,
        title: 'Data cleaning',
        time: '1h',
        summary: 'Handle null values and outliers.',
        status: false,
      },
      {
        id: 2,
        title: 'Monthly report',
        time: '1h',
        summary: 'Summarize KPI trends for leadership.',
        status: false,
      },
      {
        id: 3,
        title: 'Script automation',
        time: '0.5h',
        summary: 'Automate daily ETL jobs.',
        status: false,
      },
    ],
  },
  {
    id: 3,
    genre: 'female',
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
        id: 0,
        title: 'SEO Audit',
        time: '1.5h',
        summary: 'Analyze performance of blog posts.',
        status: false,
      },
      {
        id: 1,
        title: 'Ad campaign draft',
        time: '2h',
        summary: 'Create draft for summer sale.',
        status: false,
      },
    ],
  },
  {
    id: 4,
    genre: 'male',
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
    genre: 'female',
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
        id: 0,
        title: 'API refactor',
        time: '2h',
        summary: 'Improve structure for maintainability.',
        status: false,
      },
      {
        id: 1,
        title: 'PostgreSQL migration',
        time: '1.5h',
        summary: 'Migrate old schemas to new ones.',
        status: false,
      },
    ],
  },
  {
    id: 6,
    genre: 'male',
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
        id: 0,
        title: 'Sprint planning',
        time: '1h',
        summary: 'Prepare board for next sprint.',
        status: false,
      },
      {
        id: 1,
        title: 'Client call',
        time: '1.5h',
        summary: 'Discuss roadmap with stakeholders.',
        status: false,
      },
      {
        id: 2,
        title: 'Backlog grooming',
        time: '1h',
        summary: 'Refine user stories.',
        status: false,
      },
    ],
  },
  {
    id: 7,
    genre: 'female',
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
        id: 0,
        title: 'Regression testing',
        time: '2h',
        summary: 'Run full test suite on staging.',
        status: false,
      },
      {
        id: 1,
        title: 'Bug triage',
        time: '1h',
        summary: 'Verify and categorize open tickets.',
        status: false,
      },
    ],
  },
  {
    id: 8,
    genre: 'male',
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
        id: 0,
        title: 'Pen test report',
        time: '3h',
        summary: 'Document vulnerabilities and patches.',
        status: false,
      },
    ],
  },
  {
    id: 9,
    genre: 'female',
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
        id: 0,
        title: 'Model training',
        time: '3h',
        summary: 'Run training for new image dataset.',
        status: false,
      },
      {
        id: 1,
        title: 'Conference paper',
        time: '2h',
        summary: 'Write abstract and methodology.',
        status: false,
      },
      {
        id: 2,
        title: 'Experiment setup',
        time: '1h',
        summary: 'Configure GPU and dependencies.',
        status: false,
      },
      {
        id: 3,
        title: 'Dataset cleaning',
        time: '1h',
        summary: 'Remove noisy samples from training set.',
        status: false,
      },
    ],
  },
  {
    id: 10,
    genre: 'other',
    fname: 'Em',
    lname: 'Schneider',
    age: 37,
    imgURL: 'https://randomuser.me/api/portraits/women/11.jpg',
    job: 'AI Researcher',
    skills: ['TensorFlow', 'Deep Learning', 'Python'],
    hobbies: ['Meditation', 'Science Podcasts', 'Sketching'],
    account: {
      status: true,
      subscription: Subscription.gold,
    },
    tasks: [
      {
        id: 0,
        title: 'Model training',
        time: '3h',
        summary: 'Run training for new image dataset.',
        status: false,
      },
      {
        id: 1,
        title: 'Conference paper',
        time: '2h',
        summary: 'Write abstract and methodology.',
        status: false,
      },
      {
        id: 2,
        title: 'Experiment setup',
        time: '1h',
        summary: 'Configure GPU and dependencies.',
        status: false,
      },
      {
        id: 3,
        title: 'Dataset cleaning',
        time: '1h',
        summary: 'Remove noisy samples from training set.',
        status: false,
      },
    ],
  },
];

export default MOCK_USERS;
