import { Plan } from "../model/plan.interface";

export const ourplans: Plan[] = [
  {
    title: 'Basic',
    cost: 'Free',
    users: 'Up to 5 users for free',
    features: [
      'Basic document collabration',
      '2 GB storage',
      'Great security and support'
    ]
  },
  {
    title: 'Pro',
    cost: '$9.99',
    users: 'Per user, billed monthly',
    features: [
      'All essential integrations',
      '50 GB storage',
      'More control and insights'
    ]
  },
  {
    title: 'Ultimate',
    cost: '$19.99',
    users: 'Per user, billed monthly',
    features: ['Robut work managment', '100 GB storage', 'VIP support'],
  },
];
