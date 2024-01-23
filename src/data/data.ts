import { CoursesList, MenuList, Partners } from '@/types';

export const coursesList: Array<CoursesList> = [
  {
    title: 'Leadership',
    description:
      'це курс, який розкриє в тобі здатність впливати на інших, надихати і керувати командою',
    component: '# Формування системи лідерства',
    components: ['#Корпоративна влада', '#Влада лідера'],
    color: '#aaaedf',
    classname: 'violetLight',
  },
  {
    title: 'Career counseling / Career guidance ',
    description:
      'ця важлива складова обов’язково стане в нагоді при виборі професії, консультант допоможе з’ясувати твої інтереси, цілі, розпланує твою кар’єру, розробить стратегію самовдосконалення, підготує до вступу на ринок праці, навчить управляти кар’єрою',
    component: '# Профорієнтація',
    components: ['#Зустріч із стартаперами', '#Зустріч з бізнесом'],
    color: '#ffecd0',
    classname: 'roseLight',
  },
  {
    title: 'Business',
    description:
      'Дасть можливість виокремити в тобі комерційну жиклу, спрямувати потенціал у розвиток та монетизацію власної ідеї з метою отримання прибутку',
    component: '#Менеджмент ',
    components: ['#Запуск Start up', '#Скіли ХХІ ст.'],
    color: '#8d83ff',
    classname: 'violet',
  },
  {
    title: 'Innovative technologies',
    description:
      'Дозволяє пізнати нові передові методи, що використовують для вдосконалення чи створення нових продуктів, послуг або процесів, сприяючи технологічному прогресу та покращенню результатів',
    component: '#Project managment in IT ',
    components: ['#UI/UX Design', '#FE/BE', '#Digital Marketing'],
    color: '#03aa89',
    classname: 'green',
  },
  {
    title: 'ART',
    description:
      'Ти зможеш осягнути надбання людської творчості доторкнутися до прекрасного і створити не менш круте, твої ідею матимуть місце в реалізації',
    component: '#Сучасне мистецтво ',
    components: ["#Комп'ютерне мистецтво", '#Відео-мистецтво'],
    color: '#2928e3',
    classname: 'blue',
  },
  {
    title: 'Political science-sociology',
    description:
      'Допоможе тобі поглибити розуміння політичних явищ та суспільних процесів, а також їх взаємодію і вплив на соціум',
    component: '#Конфліктологія ',
    components: ['#Теорія соціальних змін', '#Соціологія нації'],
    color: '#fed1ce',
    classname: 'rose',
  },
];

export const partners: Array<Partners> = [
  {
    name: 'Київська мала академія наук',
    logo: '/partners/logo1.svg',
    text: 'Київська Мала академія наук —  лідер позашкільної освіти в Україні, майданчик для апробування та впровадження новацій, сприяє розвитку наукової освіти в Східноєвропейському регіоні. Ми вчимо робити відкриття та творити своє майбутнє!',
    link: 'https://kman.kyiv.ua/',
    color: '#AAAEDF',
  },
  {
    name: 'Історико-філософський факультет Київського столичного університету імені Бориса Грінченка',
    logo: 'partners/logo2.svg',
    text: ' Якісна підготовка, інноваційні навчальні програми та дослідження високого рівня є пріоритетами Університету.',
    link: 'https://kubg.edu.ua/',
    color: '#f9f9fa',
  },
  {
    name: 'Ukrainian Global School',
    logo: '/partners/logo3.svg',
    text: 'Ukranian Global School —  освітній простір, що впливає на зміни в українському суспільстві. Допомагає учням знайти своє місце в світі, надихаючи їх до особистісного зростання, академічних досягнень та лідерства заради спільного блага.',
    link: 'https://globalschool.in.ua/',
    color: '#FED1CE',
  },
];

export const menuList: Array<MenuList> = [
  { link: '#courses', menu: 'Наші курси' },
  { link: '/', menu: 'Викладачі' },
  { link: '#partners', menu: 'Партнери' },
  { link: '/', menu: 'Відгуки' },
  { link: '/', menu: 'Для батьків' },
];
