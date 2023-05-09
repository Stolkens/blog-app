const inisialState = {
  posts:[
    {
      id:'1',
      title: 'Co w trawie piszczy',
      author: 'Maksymilian Owieczka',
      shortDescription: 'Czy wiesz, że to...',
      content: 'habla habla co tam powiesz mi ze tego tego i tamtego',
      publisheDate: new Date('02-03-2021'),
      category: 'Sport'
    },
    {
      id:'2',
      title: 'O czy myśli Przemysław',
      author: 'Maja Kupka',
      shortDescription: 'Pomimo, że nie idzie....',
      content: 'habla habla co tam powiesz mi ze tego tego i tamtego',
      publisheDate: new Date('04-01-2022'),
      category: 'News'
    },
    {
      id:'3',
      title: 'O pieronie ale jaja',
      author: 'Gerwazy Jajko',
      shortDescription: 'Coś tam się jednak dzieje...',
      content: 'habla habla co tam powiesz mi ze tego tego i tamtego',
      publisheDate: new Date('05-07-2021'),
      category: 'Movies'
    }
  ],
  categories:[
    'Sport', 
    'News', 
    'Movies'
  ]

};

export default inisialState;