import { Injectable } from '@angular/core';

export class Product {
  id: number = 0;
  name: string = '';
}

const data: string[] = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aditya',
  'Adnan',
  'Adrian',
  'Adrien',
  'Aedan',
  'Aedin',
  'Aedyn',
  'Aeron',
  'Afonso',
  'Ahmad',
  'Ahmed',
  'Ahmed-Aziz',
  'Ahoua',
  'Ahtasham',
  'Aiadan',
  'Ayrton',
  'Aytug',
  'Ayub',
  'Ayyub',
  'Azaan',
  'Azedine',
  'Azeem',
  'Azim',
  'Aziz',
  'Azlan',
  'Azzam',
  'Azzedine',
  'Babatunmise',
  'Babur',
  'Bader',
  'Badr',
  'Badsha',
  'Bailee',
  'Bailey',
  'Bailie',
  'Bailley',
  'Baillie',
  'Baley',
  'Balian',
  'Banan',
  'Barath',
  'Barkley',
  'Barney',
  'Baron',
  'Barrie',
  'Barry',
  'Bartlomiej',
  'Bartosz',
  'Basher',
  'Basile',
  'Baxter',
  'Baye',
  'Bayley',
  'Beau',
  'Beinn',
  'Bekim',
  'Believe',
  'Binod',
  'Bjorn',
  'Blaike',
  'Blaine',
  'Blair',
  'Blaire',
  'Blake',
  'Blazej',
  'Blazey',
  'Blessing',
  'Blue',
  'Blyth',
  'Bo',
  'Boab',
  'Bob',
  'Bobby',
  'Bobby-Lee',
  'Bodhan',
  'Boedyn',
  'Bogdan',
  'Bohbi',
  'Bony',
  'Bowen',
  'Bowie',
  'Boyd',
  'Bracken',
  'Brad',
  'Bradan',
  'Braden',
  'Bradley',
  'Bradlie',
  'Bradly',
  'Brady',
  'Bradyn',
  'Braeden',
  'Braiden',
  'Brajan',
  'Brandan',
  'Branden',
  'Brandon',
  'Brandonlee',
  'Brandon-Lee',
  'Brooklin',
  'Brooklyn',
  'Bruce',
  'Bruin',
  'Bruno',
  'Brunon',
  'Bryan',
  'Bryce',
  'Bryden',
  'Brydon',
  'Brydon-Craig',
  'Bryn',
  'Brynmor',
  'Bryson',
  'Buddy',
  'Bully',
  'Burak',
  'Burhan',
  'Butali',
  'Butchi',
  'Byron',
  'Cabhan',
  'Cadan',
  'Cade',
  'Caden',
  'Cadon',
  'Cadyn',
  'Caedan',
  'Caedyn',
  'Cael',
  'Caelan',
  'Caelen',
  'Caethan',
  'Cahl',
  'Cahlum',
  'Cai',
  'Caidan',
  'Caiden',
  'Caiden-Paul',
  'Caidyn',
  'Caie',
  'Cailaen',
  'Cailean',
  'Caileb-John',
  'Cailin',
  'Cain',
  'Caine',
  'Cairn',
  'Cal',
  'Calan',
  'Calder',
  'Cale',
  'Calean',
  'Caleb',
  'Calen',
  'Caley',
  'Calib',
  'Calin',
  'Callahan',
  'Callan',
  'Callan-Adam',
  'Calley',
  'Callie',
  'Callin',
  'Callum',
  'Callun',
  'Callyn',
  'Calum',
  'Calum-James',
  'Calvin',
  'Cambell',
  'Camerin',
  'Cameron',
  'Campbel',
  'Campbell',
  'Camron',
  'Caolain',
  'Caolan',
  'Carl',
  'Carlo',
  'Carlos',
  'Carrich',
  'Carrick',
  'Carson',
  'Danial',
  'Daniel',
  'Daniele',
  'Daniel-James',
  'Daniels',
  'Daniil',
  'Danish',
  'Daniyal',
  'Danniel',
  'Danny',
  'Dante',
  'Danyal',
  'Danyil',
  'Danys',
  'Daood',
  'Dara',
  'Darach',
  'Daragh',
  'Darcy',
  "D'arcy",
  'Dareh',
  'Daren',
  'Darien',
  'Darius',
  'Darl',
  'Darn',
  'Darrach',
  'Darragh',
  'Darrel',
  'Darrell',
  'Darren',
  'Darrie',
  'Darrius',
  'Darroch',
  'Darryl',
  'Darryn',
  'Darwyn',
  'Daryl',
  'Daryn',
  'Daud',
  'Daumantas',
  'Davi',
  'David',
  'David-Jay',
  'David-Lee',
  'Davie',
  'Davis',
  'Davy',
  'Dawid',
  'Dawson',
  'Dawud',
  'Dayem',
  'Daymian',
  'Deacon',
  'Deagan',
  'Dean',
  'Deano',
  'Decklan',
  'Declain',
  'Declan',
  'Declyan',
  'Declyn',
  'Dedeniseoluwa',
  'Dermot',
  'Derren',
  'Derrie',
  'Derrin',
  'Derron',
  'Derry',
  'Derryn',
  'Deryn',
  'Deshawn',
  'Desmond',
  'Dev',
  'Devan',
  'Devin',
  'Devlin',
  'Devlyn',
  'Devon',
  'Devrin',
  'Devyn',
  'Dex',
  'Dexter',
  'Dhani',
  'Dharam',
  'Dhavid',
  'Dhyia',
  'Diarmaid',
  'Diarmid',
  'Diarmuid',
  'Didier',
  'Diego',
  'Diesel',
  'Diesil',
  'Digby',
  'Dilan',
  'Dilano',
  'Dillan',
  'Dillon',
  'Dilraj',
  'Dimitri',
  'Dinaras',
  'Dion',
  'Dissanayake',
  'Dmitri',
  'Fodeba',
  'Folarinwa',
  'Forbes',
  'Forgan',
  'Forrest',
  'Fox',
  'Francesco',
  'Francis',
  'Francisco',
  'Franciszek',
  'Franco',
  'Frank',
  'Frankie',
  'Franklin',
  'Franko',
  'Fraser',
  'Frazer',
  'Fred',
  'Freddie',
  'Frederick',
  'Fruin',
  'Fyfe',
  'Fyn',
  'Fynlay',
  'Fynn',
  'Gabriel',
  'Gallagher',
  'Gareth',
  'Garren',
  'Garrett',
  'Garry',
  'Gary',
  'Gavin',
  'Gavin-Lee',
  'Gene',
  'Geoff',
  'Geoffrey',
  'Geomer',
  'Geordan',
  'Geordie',
  'George',
  'Georgia',
  'Georgy',
  'Gerard',
  'Ghyll',
  'Giacomo',
  'Gian',
  'Giancarlo',
  'Gianluca',
  'Gianmarco',
  'Gideon',
  'Gil',
  'Gio',
  'Girijan',
  'Girius',
  'Gjan',
  'Glascott',
  'Glen',
  'Glenn',
  'Gordon',
  'Grady',
  'Graeme',
  'Graham',
  'Grahame',
  'Grant',
  'Grayson',
  'Greg',
  'Gregor',
  'Gregory',
  'Greig',
  'Griffin',
  'Griffyn',
  'Grzegorz',
  'Guang',
  'Guerin',
  'Guillaume',
  'Gurardass',
  'Gurdeep',
  'Gursees',
  'Gurthar',
  'Gurveer',
  'Gurwinder',
  'Gus',
  'Gustav',
  'Guthrie',
  'Guy',
  'Gytis',
  'Habeeb',
  'Hadji',
  'Hadyn',
  'Hagun',
  'Haiden',
  'Haider',
  'Hamad',
  'Hamid',
  'Hamish',
  'Hamza',
  'Hamzah',
  'Han',
  'Hansen',
  'Hao',
  'Hareem',
  'Hari',
  'Harikrishna',
  'Haris',
  'Harish',
  'Harjeevan',
  'Harjyot',
  'Harlee',
  'Harleigh',
  'Harley',
  'Harman',
  'Harnek',
  'Harold',
  'Haroon',
  'Harper',
  'Harri',
  'Harrington',
  'Harris',
  'Harrison',
  'Harry',
  'Harvey',
  'Harvie',
  'Harvinder',
  'Hasan',
  'Haseeb',
  'Jagat',
  'Jago',
  'Jaheim',
  'Jahid',
  'Jahy',
  'Jai',
  'Jaida',
  'Jaiden',
  'Jaidyn',
  'Jaii',
  'Jaime',
  'Jai-Rajaram',
  'Jaise',
  'Jak',
  'Jake',
  'Jakey',
  'Jakob',
  'Jaksyn',
  'Jakub',
  'Jamaal',
  'Jamal',
  'Jameel',
  'Jameil',
  'James',
  'James-Paul',
  'Jamey',
  'Jamie',
  'Jan',
  'Jaosha',
  'Jardine',
  'Jared',
  'Jarell',
  'Jarl',
  'Jarno',
  'Jarred',
  'Jarvi',
  'Jasey-Jay',
  'Jasim',
  'Jaskaran',
  'Jason',
  'Jasper',
  'Jaxon',
  'Jaxson',
  'Jay',
  'Jaydan',
  'Jayden',
  'Jayden-James',
  'Jayden-Lee',
  'Jayden-Paul',
  'Jayden-Thomas',
  'Jaydn',
  'Jaydon',
  'Jaydyn',
  'Jayhan',
  'Jay-Jay',
  'Jayke',
  'Jaymie',
  'Jayse',
  'Jayson',
  'Jaz',
  'Jazeb',
  'Jazib',
  'Jazz',
  'Jean',
  'Jean-Lewis',
  'Jean-Pierre',
  'Jebadiah',
  'Jed',
  'Jedd',
  'Jedidiah',
  'Jeemie',
  'Jeevan',
  'Jeffrey',
  'Jensen',
  'Jenson',
  'Jensyn',
  'Jeremy',
  'Jerome',
  'Jeronimo',
  'Jerrick',
  'Jerry',
  'Jesse',
  'Jesuseun',
  'Jeswin',
  'Jevan',
  'Jeyun',
  'Jez',
  'Jia',
  'Jian',
  'Jiao',
  'Jimmy',
  'Jincheng',
  'JJ',
  'Joaquin',
  'Joash',
  'Jock',
  'Jody',
  'Joe',
  'Joeddy',
  'Joel',
  'Joey',
  'Joey-Jack',
  'Johann',
  'Johannes',
  'Johansson',
  'John',
  'Johnathan',
  'Johndean',
  'Johnjay',
  'John-Michael',
  'Johnnie',
  'Johnny',
  'Johnpaul',
  'John-Paul',
  'John-Scott',
  'Johnson',
  'Jole',
  'Jomuel',
  'Jon',
  'Jonah',
  'Jonatan',
  'Jonathan',
  'Jonathon',
  'Jonny',
  'Jonothan',
  'Jon-Paul',
  'Kajally',
  'Kajetan',
  'Kalani',
  'Kale',
  'Kaleb',
  'Kaleem',
  'Kal-el',
  'Kalen',
  'Kalin',
  'Kallan',
  'Kallin',
  'Kalum',
  'Kalvin',
  'Kalvyn',
  'Kameron',
  'Kames',
  'Kamil',
  'Kamran',
  'Kamron',
  'Kane',
  'Karam',
  'Karamvir',
  'Karandeep',
  'Kareem',
  'Karim',
  'Karimas',
  'Karl',
  'Karol',
  'Karson',
  'Karsyn',
  'Karthikeya',
  'Kasey',
  'Kash',
  'Kashif',
  'Kasim',
  'Kasper',
  'Kasra',
  'Kavin',
  'Kayam',
  'Kaydan',
  'Kayden',
  'Kaydin',
  'Kaydn',
  'Kaydyn',
  'Kaydyne',
  'Kayleb',
  'Kaylem',
  'Kaylum',
  'Kayne',
  'Kaywan',
  'Kealan',
  'Kealon',
  'Kean',
  'Keane',
  'Kearney',
  'Keatin',
  'Keaton',
  'Keavan',
  'Keayn',
  'Kedrick',
  'Keegan',
  'Keelan',
  'Keelin',
  'Keeman',
  'Keenan',
  'Keenan-Lee',
  'Keeton',
  'Kehinde',
  'Keigan',
  'Keilan',
  'Keir',
  'Keiran',
  'Keiren',
  'Keiron',
  'Keiryn',
  'Keison',
  'Keith',
  'Keivlin',
  'Kelam',
  'Kelan',
  'Kellan',
  'Kellen',
  'Kelso',
  'Kelum',
  'Kelvan',
  'Kelvin',
  'Kenzo',
  'Kenzy',
  'Keo',
  'Ker',
  'Kern',
  'Kerr',
  'Kevan',
  'Kevin',
  'Kevyn',
  'Kez',
  'Khai',
  'Khalan',
  'Khaleel',
  'Khaya',
  'Khevien',
  'Khizar',
  'Khizer',
  'Kia',
  'Kian',
  'Kian-James',
  'Kiaran',
  'Kiarash',
  'Kie',
  'Kiefer',
  'Kiegan',
  'Kienan',
  'Kier',
  'Kieran',
  'Kieran-Scott',
  'Kieren',
  'Kierin',
  'Kiern',
  'Kieron',
  'Kieryn',
  'Kile',
  'Killian',
  'Kimi',
  'Kingston',
  'Kinneil',
  'Kinnon',
  'Kinsey',
  'Kiran',
  'Kirk',
  'Kirwin',
  'Kit',
  'Kiya',
  'Kiyonari',
  'Kjae',
  'Klein',
  'Klevis',
  'Kobe',
  'Kory',
  'Koushik',
  'Kris',
  'Krish',
  'Krishan',
  'Kriss',
  'Kristian',
  'Kristin',
  'Kristofer',
  'Kristoffer',
  'Kristopher',
  'Kruz',
  'Krzysiek',
  'Krzysztof',
  'Ksawery',
  'Ksawier',
  'Kuba',
  'Kurt',
  'Kurtis',
  'Luc',
  'Luca',
  'Lucais',
  'Lucas',
  'Lucca',
  'Lucian',
  'Luciano',
  'Lucien',
  'Lucus',
  'Luic',
  'Luis',
  'Luk',
  'Luka',
  'Lukas',
  'Lukasz',
  'Luke',
  'Lukmaan',
  'Marvin',
  'Marwan',
  'Maryk',
  'Marzuq',
  'Mashhood',
  'Mason',
  'Meko',
  'Melville',
  'Meshach',
  'Meyzhward',
  'Micah',
  'Michael',
  'Michael-Alexander',
  'Michael-James',
  'Michal',
  'Michat',
  'Micheal',
  'Michee',
  'Mickey',
  'Miguel',
  'Mika',
  'Mikael',
  'Mikee',
  'Mikey',
  'Mikhail',
  'Mikolaj',
  'Miles',
  'Millar',
  'Miller',
  'Milo',
  'Milos',
  'Naif',
  'Nairn',
  'Narvic',
  'Nash',
  'Nasser',
  'Nassir',
  'Natan',
  'Nate',
  'Nathan',
  'Nathanael',
  'Nathanial',
  'Nathaniel',
  'Nathan-Rae',
  'Nawfal',
  'Nayan',
  'Neco',
  'Neil',
  'Oban',
  'Obieluem',
  'Obosa',
  'Odhran',
  'Odin',
  'Odynn',
  'Ogheneochuko',
  'Ogheneruno',
  'Ohran',
  'Oilibhear',
  'Oisin',
  'Ojima-Ojo',
  'Okeoghene',
  'Olaf',
  'Ola-Oluwa',
  'Olaoluwapolorimi',
  'Ole',
  'Olie',
  'Oliver',
  'Olivier',
  'Oliwier',
  'Ollie',
  'Olurotimi',
  'Oluwadamilare',
  'Oluwadamiloju',
  'Pavit',
  'Pawel',
  'Pawlo',
  'Pearce',
  'Pearse',
  'Pearsen',
  'Pedram',
  'Pedro',
  'Peirce',
  'Peiyan',
  'Pele',
  'Peni',
  'Peregrine',
  'Peter',
  'Phani',
  'Philip',
  'Philippos',
  'Phinehas',
  'Phoenix',
  'Phoevos',
  'Pierce',
  'Pierre-Antoine',
  'Pieter',
  'Pietro',
  'Piotr',
  'Porter',
  'Prabhjoit',
  'Prabodhan',
  'Praise',
  'Pranav',
  'Pravin',
  'Precious',
  'Prentice',
  'Presley',
  'Preston',
  'Preston-Jay',
  'Prinay',
  'Prince',
  'Raja',
  'Rajab-Ali',
  'Rajan',
  'Ralfs',
  'Ralph',
  'Ramanas',
  'Ramit',
  'Ramone',
  'Ramsay',
  'Ramsey',
  'Rana',
  'Ranolph',
  'Raphael',
  'Rasmus',
  'Rasul',
  'Raul',
  'Raunaq',
  'Ravin',
  'Ray',
  'Rayaan',
  'Rayan',
  'Rayane',
  'Rayden',
  'Rayhan',
  'Raymond',
  'Rholmark',
  'Rhoridh',
  'Rhuairidh',
  'Rhuan',
  'Rhuaridh',
  'Rhudi',
  'Rhy',
  'Rhyan',
  'Rhyley',
  'Rhyon',
  'Rhys',
  'Rhys-Bernard',
  'Rhyse',
  'Riach',
  'Rian',
  'Ricards',
  'Riccardo',
  'Ricco',
  'Rice',
  'Richard',
  'Richey',
  'Richie',
  'Ricky',
  'Rico',
  'Ridley',
  'Ridwan',
  'Rihab',
  'Rihan',
  'Rihards',
  'Rihonn',
  'Rikki',
  'Riley',
  'Rio',
  'Rioden',
  'Rishi',
  'Ritchie',
  'Rivan',
  'Riyadh',
  'Rohaan',
  'Rohan',
  'Rohin',
  'Rohit',
  'Saif',
  'Saifaddine',
  'Saim',
  'Sajid',
  'Sajjad',
  'Salahudin',
  'Salman',
  'Salter',
  'Salvador',
  'Sam',
  'Saman',
  'Samar',
  'Samarjit',
  'Samatar',
  'Sambrid',
  'Sameer',
  'Sami',
  'Thierry',
  'Thom',
  'Thomas',
  'Thomas-Jay',
  'Tobey',
  'Tobi',
  'Tobias',
  'Tobie',
  'Toby',
  'Todd',
  'Tokinaga',
  'Toluwalase',
  'Tom',
  'Tomas',
  'Tomasz',
  'Tommi-Lee',
  'Tommy',
  'Tomson',
  'Tony',
  'Torin',
  'Torquil',
  'Torran',
  'Torrin',
  'Torsten',
  'Trafford',
  'Trai',
  'Travis',
  'Tre',
  'Trent',
  'Trey',
  'Tristain',
  'Tristan',
  'Troy',
  'Tubagus',
  'Turki',
  'Turner',
  'Umair',
  'Umar',
  'Umer',
  'Umut',
  'Urban',
  'Uri',
  'Usman',
  'Uzair',
  'Uzayr',
  'Wabuya',
  'Wai',
  'Walid',
  'Wallace',
  'Walter',
  'Waqaas',
  'Warkhas',
  'Warren',
  'Warrick',
  'Wasif',
  'Wayde',
  'Wayne',
  'Wei',
  'Wen',
  'Wesley',
  'Wesley-Scott',
  'Wiktor',
  'Wilkie',
  'Will',
  'William',
  'William-John',
  'Willum',
  'Wilson',
  'Windsor',
  'Wojciech',
  'Woyenbrakemi',
  'Wyatt',
  'Wylie',
  'Wynn',
  'Xabier',
  'Xander',
  'Xavier',
  'Xiao',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
];

const products: Product[] = data
  .slice(0, 100)
  .map((d, i) => ({ id: i, name: d }));

@Injectable()
export class Service {
  getProducts(): Product[] {
    return products;
  }
}
