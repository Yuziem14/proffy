const proffys = [
  {
    name: 'Albert Einstein',
    avatar:
      'https://super.abril.com.br/wp-content/uploads/2018/07/565dcdfe0e2163330400bf82albert-einstein-2071-hd-wallpapers.jpeg',
    phone_number: '5587988413662',
    bio: `Ganhador do prêmio Nobel pelo Efeito Fotoelétrico e criador da Teoria da Relatividade.`,
    classes: [
      {
        subject: 5,
        cost: 150,
        schedules: [
          {
            weekday: [0],
            time_from: [480],
            time_to: [720],
          },
          {
            weekday: [1],
            time_from: [480],
            time_to: [720],
          },
        ],
      },
    ],
  },
  {
    name: 'Vincent van Gogh',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/250px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg',
    phone_number: '5482980804255',
    bio: `Pintor holandês famoso do século XIX e maior representante do movimento de pintura pós-impressionista.`,
    classes: [
      {
        subject: 1,
        cost: 120,
        schedules: [
          {
            weekday: [0],
            time_from: [480],
            time_to: [720],
          },
        ],
      },
    ],
  },
];

module.exports = proffys;
