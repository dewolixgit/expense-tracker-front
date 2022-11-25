export type CategoryType = {
  id: string;
  name: string;
  color: string;
};

export type SpendingType = {
  id: string;
  money: number;
  category: CategoryType;
  date: number;
  description: string;
};

export const mockCategories: CategoryType[] = [
  {
    id: '1',
    name: 'Еда',
    color: 'red',
  },
  {
    id: '2',
    name: 'Досуг',
    color: 'blue',
  },
  {
    id: '3',
    name: 'Здоровье',
    color: 'green',
  },
];

export const mockList: SpendingType[] = [
  {
    id: '1',
    money: 300,
    category: mockCategories[2],
    date: 1668373200000,
    description: 'dsfds dsfd sfsds dsfdsfds',
  },
  {
    id: '2',
    money: 200,
    category: mockCategories[1],
    date: 1668373200000,
    description: 'dsfds dsfd sfsds dsfdsfds',
  },
  {
    id: '3',
    money: 400,
    category: mockCategories[3],
    date: 1668373200000,
    description: 'dsfds dsfd sfsds dsfdsfds',
  },
  {
    id: '4',
    money: 600,
    category: mockCategories[1],
    date: 1668546000000,
    description: 'dsfds dsfd sfsds dsfdsfds',
  },
  {
    id: '5',
    money: 300,
    category: mockCategories[1],
    date: 1668373200000,
    description: 'dsfds dsfd sfsds dsfdsfds',
  },
  {
    id: '6',
    money: 300,
    category: mockCategories[2],
    date: 1668373200000,
    description: 'dsfds dsfd sfsds dsfdsfds',
  },
  {
    id: '7',
    money: 300,
    category: mockCategories[2],
    date: 1668373200000,
    description: 'dsfds dsfd sfsds dsfdsfds',
  },
  {
    id: '8',
    money: 100,
    category: mockCategories[1],
    date: 1668805200000,
    description: 'dsfds dsfd sfsds dsfdsfds',
  },
  {
    id: '9',
    money: 300,
    category: mockCategories[2],
    date: 1668373200000,
    description: 'dsfds dsfd sfsds dsfdsfds',
  },
  {
    id: '10',
    money: 200,
    category: mockCategories[3],
    date: 1668373200000,
    description: 'dsfds dsfd sfsds dsfdsfds',
  },
  {
    id: '11',
    money: 700,
    category: mockCategories[3],
    date: 1668373200000,
    description: 'dsfds dsfd sfsds dsfdsfds',
  },
];
