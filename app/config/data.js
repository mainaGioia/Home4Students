export const utils = [
  {
    "key": "keys",
    "name": "room",
    "subtitle": "bedroom and bathroom",
    "description": "everything you need to know on how to use your personal space",
    "picture": {
      "large": require('../../assets/images/singleroom_small.jpg'),
      "medium": "",
      "thumbnail": require('../../assets/images/icons/keysIcon.png'),
    },
    "subcategories":[
      {
        "key": "door",
        "name": "lock/unlock the door",
        "description": "How to unlock the door and use it as a normal door",
        "picture": require('../../assets/images/door.jpg'),
        "page": [
          {
            "name": "lock/unlock the door",
            "description": "How to unlock the door and use it as a normal door",
            "text": "You can use your key to lock or unlock the door of your room. "+
              "When you see a red light on the handle, the door is locked and the handle "+
              "is really loose. You can also use your door as a normal door, to do so "+
              "you just have to click the button on the handle in the back of the door. "+
              "You will see a green light appearing and the handle will become more rigid. "+
              "Click it again and you will see a red light appearing: the door will be "+
              "locked again.",
            "note": "red light: door locked\ngreen light: door unlocked"
          }
        ]
      },
      {
        "key": "lockedout",
        "name": "I've lost my keys!",
        "description": "what to do in case you are locked out",
        "picture": require('../../assets/images/keys.jpg'),
        "page": [
          {
            "name": "I've lost my keys!",
            "description": "what to do in case you are locked out",
            "text": "Do not panic, we have the solution for you. There are some people "+
              "you can contact to unlock your room:\n",
            "list": [{"name": "Office desk"}, { "name": "housekeeper"}, {"name": "Cleaning ladies"},
              {"name": "Tenants representative"}],
            "note": "Check at the entrance for the office opening times.\nGenerally, you can find the housekeeper "+
            "till 9 in the morning, instead the cleaning ladies will be there until lunchtime.\nTenants representative "+
            "lives in the student house so in case you can't find any of the above, contact them."
          }
        ]
      }

    ],
  },
  {
    "key": "kitchen",
    "name": "Kitchen",
    "subtitle": "How to use the kitchen",
    "description": "Please mind your kitchen stuff. Everything you leave in the kitchen at night will be thrown away by the housekeeper.",
    "picture": {
      "large": require('../../assets/images/kitchen.jpg'),
      "medium": "",
      "thumbnail": require('../../assets/images/icons/kitchenIcon.png'),
    },
    "subcategories":[
      {
        "key": "common kitchenware",
        "name": "Common kitchenware",
        "description": "Where to find or put common kitchen stuff",
        "picture": require('../../assets/images/commonKitchenware.jpg'),
        "page": [
          {
            "name": "common kitchenware",
            "description": "Where to find or put common kitchen stuff",
            "text": "Usually, you can find common pots, pans and cuttlery "+
              "in the cabinet under the sink. This kitchenware used to belong "+
              "to previous tenants or to current ones who decided "+
              "to share their things.\nPlease, respect common kitchenware, if it's "+
              "there it's because people before you took good care of it :)",
            "note": "Please note that everything you leave in the kitchen at night "+
              "will be thrown away by the housekeeper"
          },
        ]
      },
      {
        "key": "personal kitchenware",
        "name": "Personal kitchenware",
        "description": "cupboard, fridge and the freezer!",
        "page": [
          {
            "name": "personal kitchenware",
            "description": "fridge, freezer and personal cupboard",
            "text": "In front of the kitchen you find the storage area, usually shared "+
            "with the rest of the people on your half-floor. In the storage area, use your key "+
            "to open the fridge and the cupboard with your room number on it. The cupboard "+
            "is entirely for you, for the fridge and the freezer you can agree with the other "+
            "tenants on which shelf to use."
          }
        ]
      },
      {
        "key": "faq",
        "name": "Troubleshoot",
        "description": "Do not panic, we have the solution",
        "page": [
          {
            "name": "The stove doesn't work!",
            "description": "Do not panic, we have the solution",
            "text": "Easy! For security reasons, the stove is supposed not "+
              "to work without setting the timer. You find it on the wall, close "+
              "to the kitchen hood.",
            "note":"",
          },
          {
            "name": "I left my stuff in the kitchen at night!",
            "description": "And now you don't find it anymore, right?",
            "text": "Luckily sometimes our housekeeper does not throw away whatever he finds "+
              "but he puts it somewhere on the ground floor. Time for a treasure hunt!"+
              " Another option could be asking to the cleaning ladies, sometimes they "+
              "put kitchenware in their private storage closet.",
            "note":"",
          },
        ]
      },

      // {
      //   "name": "Where to put the trash?",
      //   "description": "Also in this case, we have the solution for you",
      // },
    ],
  },
  {
    "key": "laundry",
    "name": "Laundry",
    "subtitle": "Everything you need to know",
    "description": "Everything you need to know",
    "caption": "Start the Timer",
    "picture": {
      "large": require('../../assets/images/laundry.jpg'),
      "medium": "",
      "thumbnail": require('../../assets/images/icons/laundryIcon.png'),
    },
    "subcategories": [
      {
        "name": "Where is it",
        "description": "C block, basement. Look at the map!"
      },
      {
        "name": "laundry, this unknown!",
        "description": "how to properly do the laundry"
      },
      {
        "name": "how to start it",
        "description": "alias how to pay for it"
      },
      {
        "name": "timer",
        "description": "choose the lavaggio and start the timer!"
      },
    ]
  },
  {
    "key": "cleaning",
    "name": "Cleaning ladies shifts",
    "subtitle": "unpredictable",
    "description": "they are actually unpredictable...",
    "caption": "shifts for the month",
    "picture": {
      "large": require('../../assets/images/doubleroom_small.jpg'),
      "medium": "",
      "thumbnail": require('../../assets/images/icons/cleaningIcon.png'),
    },
    "subcategories":[
      {
        key: "before",
        name: "Before they come",
        picture: require('../../assets/images/commonKitchenware.jpg'),
        description: "what to do before the cleaning ladies come",
        page: [
          {
            "name": "Before they come",
            "description": "what to do before the cleaning ladies come",
            "text": "It is strongly suggested to leave your desk and your bathroom shelf "+
            "empty, otherwise they will not be cleaned. Also the floor should be as empty "+
            "possible to ease the cleaning ladies' work.\nTry to keep your room as tidy "+
            "as possible :)",
            "note":"",
          },
        ]
      },
      {
        name: "Calendar",
        description: "find out when the cleaning lady is coming!",
      }
    ],
  },
  {
    "key": "party",
    "name": "Party",
    "subtitle": "want to throw a party?",
    "description": "Want to throw a party?",
    "caption": "Reserve the room!\nJust mind the other people living here.",
    "picture": {
      "large": require('../../assets/images/party_small.jpg'),
      "medium": "",
      "thumbnail": require('../../assets/images/icons/partyIcon.png'),
    },
    "subcategories":[
      {
        "name": "Where is it",
        "description": "B block, basement. Look at the map!",
      },
      {
        "name": "Policy",
        "description": "How to correctly use the room",
      },
      {
        "name": "How to reserve it",
        "description": "Ask the managers for the keys",
      },
    ],
  },
  {
    "key": "music",
    "name": "Music",
    "subtitle": "want to play some music?",
    "description": "want to play some music?",
    "caption": "We have the place for you! Maybe the\nnew Mozart or Parov Stelar is among us...",
    "picture": {
      "large": require('../../assets/images/music.png'),
      "medium": "",
      "thumbnail": require('../../assets/images/icons/musicIcon.png'),
    },
    "subcategories":[
      {
        "name": "Where is it",
        "description": "A block, basement. Look at the map!",
      },
      {
        "name": "Policy",
        "description": "How to correctly use the room",
      },
      {
        "name": "Wanna play with me?",
        "description": "Let's arrange a live session!",
      },
    ],
  },
  {
    "key": "gym",
    "name": "Fitness",
    "subtitle": "mens sana in corpore sano",
    "description": "Pump it up!",
    "caption": "Mens sana in corpore sano",
    "picture": {
      "large": require('../../assets/images/gym_small.jpg'),
      "medium": "",
      "thumbnail": require('../../assets/images/icons/gymIcon.png'),
    },
    "subcategories":[
      {
        "name": "Where is it",
        "description": "A block, basement. Look at the map!",
      },
      {
        "name": "Policy",
        "description": "How to correctly use the gym",
      },
      {
        "name": "Who wants to come with me?",
        "description": "Let's go together!",
      },
    ],
  },
  {
    "key": "waste",
    "name": "Waste",
    "subtitle": "How does it work?",
    "description": "How to separate and where to throw the trash",
    "picture": {
      "large": require('../../assets/images/waste.jpg'),
      "medium": "",
      "thumbnail": require('../../assets/images/icons/wasteIcon.png'),
    },
    "subcategories": [
      {
        "key": "biowaste",
        "name": "Biowaste",
        "description": "Where to put the biowaste",
        "picture": require('../../assets/images/compost.jpg'),
        "page": [
          {
            "name": "bio waste",
            "description": "where to put the bio waste",
            "text": "There is a small brown trash bin in every kitchen. That is the bin "+
            "for the organic waste. The housekeeper will take care of its disposal "+
            "every morning, except for weekends.\n\nWhat goes in the brown bin?\n",
            "list": [{name: "fruit and vegetable scraps"},{name:"meat, poultry, fish, seafood and eggs"},
            {name:"pasta, bread, cereals and rice"},{name:"solid dairy products(butter, mozzarella, etc.)"},
            {name:"nuts and shells"}, {name:"cake, cookies and candy"}, {name:"herbs and spices"},
            {name: "coffee grounds, coffee filters, tea leaves and tea bags"},
            {name: "animal food"}, {name: "waste with oil or vegerable fats, sauces and vinaigrettes"}
            ]
          }
        ]
      },
      {
        "key": "kitchen waste",
        "name": "Kitchen waste",
        "description": "What can i put in the trash bin in the storage area?",
        "picture": require('../../assets/images/trash.jpg'),
        "page":[
          {
            "name": "kitchen waste",
            "description": "what can i put in the trash bin in the storage area?",
            "text": "All the kitchen waste that does not go in the biowaste, can be "+
            "disposed in the bin with the big blue plastic bag. Almost every kitchen "+
            "has this trash bin, if yours doesn't you can request the admins for it. "+
            "Differently from the biowaste, the housekeeper is not in charge for bringing "+
            "this bin out, so it's up to you to take care of it.\nClose to the C building "+
            "you will find an area where you can throw your trash.\n\nTo recycle paper, metal and glass, you will find specific "+
            "trash bins in the area between the student house and the college on the left."
          }
        ]
      },
      {
        "key": "personal waste",
        "name": "Personal waste",
        "description": "How does it work with personal waste",
        "picture": require('../../assets/images/personalTrash.jpg'),
        "page":[
          {
            "name": "Personal waste",
            "description": "How does it work with personal waste",
            "text": "All the waste that you produce out of the kitchen, cannot be "+
            "disposed in common trash bins but can be kept in the small bin you have "+
            "in your room. \nClose to the C building you will find an area where you can "+
            "throw your trash.\n\nTo recycle paper, metal and glass, you will find specific "+
            "trash bins in the area between the student house and the college on the left."
          }
        ]
      }
    ],
  },
  {
    "key": "write",
    "name": "Write to Ben",
    "subtitle": "He will like to hear from you",
    "description": "Write to us",
    "picture": {
      "large": require('../../assets/images/write.jpg'),
      "medium": "",
      "thumbnail": require('../../assets/images/icons/writeIcon.png'),
    },
    "subcategories":[
      {
        "name": "Write to Benjamin",
        "description": "If you are in Höttinger Au or Tirolerheim",
      },
      {
        "name": "Write to Maria",
        "description": "If you are in Tirolerheim",
      }
    ],
  }

];


export const dorm = [
  {
    tirolerheim:
      {
        "key": "Tirolerheim",
        "name": "Tirolerheim",
        "caption": "Home4Students\nTechnikerstraße 7, 6020 Innsbruck",
        "subcategories":[
          {
            "key": "map",
            "name": "Where to find us",
            "description": "Have a look at the map!",
            "address": "Technikestraße 7, 6020 Innsbruck",
            "coords": {latitude: 47.264595, longitude: 11.349841},
            "initialRegion": {latitude: 47.264995,longitude: 11.378328,latitudeDelta: 0.03, longitudeDelta: 0.03},
          },
          {
            "key": "welcome",
            "name": "things to do as soon as you arrive",
            "description": "meldezettel, wifi and keys",
            "picture": require('../../assets/images/tirolerheim_neu_2.jpg'),

            page: [
              {
                "name": "meldezettel",
                "description": "how to register to the townhall",
                "text": "This document is required to register as a citizen of Innsbruck."+
                " You receive it from the office on arrival and have to bring it to the office"+
                " on the first floor in Rathaus Galerie (mariatheresienstraße). "+
                "If you do not do it, you will incur a fine."
              },
              {
                "name": "wifi",
                "description": "let's get connected!",
                "text": "You can find the password of the wifi at the entrance, "+
                "if you need, take a picture of it and do not lose it cause you will "+
                "need it more often than you think :)",
              },
              {
                "name": "keys",
                "description": "how to access your private facilities",
                "text": "As soon as you come, you will get a pair of keys like the "+
                "ones in the picture. One is gonna be for the maibox, the other one for "+
                "your room. Your room's key is an NFC chip, you just have to bring it "+
                "close to the sensor on the handle to lock/unlock the door. By default "+
                "the door is locked, this means you have to use your key every time to "+
                "open it from outside. The door can also be used as a normal door without "+
                "locking mechanism: press the button on the handle (you find it on the "+
                "back side) and you'll notice a green light, you can now close and open "+
                "the door without using the keys. To lock it again, bring your key close "+
                "to the sensor or press the same button again. You'll see a red light on "+
                "the handle. In case you lose them or get locked out, have a look at the "+
                "section \"I lost my keys\" of the app."
              },
              {
                "name": "list with da stuff in da room",
                "description": "check what you have and what you do not have",
                "text": "you will get an inventory. Please fill "+
                "it in checking if every item listed is present in your room.",
              },
            ]
          },
          {
            key: "facilities",
            name: "Facilities",
            description: "What do we offer?",
            picture: require('../../assets/images/doubleroom.jpg'),
            page: [
              {
                name: "Dormitory",
                description: "12-month-dormitory (01.09. - 31.08.) -\nrooms are also offered during summer! ",
                text: "We offer a communal kitchen, washing machine and dryer, garage and bicycle storage,"+
                " a party room and an amazing garden with a barbeque. "+
                "Extensive renovation 2014 ",
              },
              {
                name: "Rooms",
                description: "Numbers and types",
                text: "259 spots in total (157 single / 102 double) with shower/WC,"+
                "house intercom, internet wireless-LAN",
              },

            ]
          },
          {
            key: "nearby",
            name: "Nearby spots",
            description: "You need a supermarket or a pharmacy?",
            "initialRegion": {latitude: 47.262930,longitude: 11.348187,latitudeDelta: 0.012, longitudeDelta: 0.012},
            page: {
              "surroundings":[
                {
                  type: "Home4Students",
                  name: "Tirolerheim",
                  address: "Technikestraße 7",
                  coords: {latitude: 47.264595, longitude: 11.349841},
                },
                {
                  type: "universities",
                  name: "Universität Innsbruck - Campus Technik",
                  address: "Technikerstraße 15",
                  coords: {latitude: 47.264202, longitude: 11.343651},
                },
                {
                  type: "pharmacies",
                  name: "Lohbach Apotheke",
                  address: "Technikerstraße 3",
                  coords: {latitude: 47.263689, longitude: 11.351395},
                },
                {
                  type: "banks",
                  name: "Hypo Tirol",
                  address: "Viktor-Franz-Hess-Straße 1",
                  coords: {latitude: 47.266719, longitude: 11.345393},
                },
                {
                  type: "banks",
                  name: "Tiroler Sparkasse",
                  address: "Technikerstraße 34",
                  coords: {latitude: 47.265466, longitude: 11.352989},
                },
                {
                  type: "supermarkets",
                  name: "Eurospar",
                  address: "Technikerstraße 5",
                  coords: {latitude: 47.264041, longitude: 11.350787},
                },
                {
                  type: "supermarkets",
                  name: "MPreis",
                  address: "Viktor-Franz-Hess-Straße 5",
                  coords: {latitude: 47.265711, longitude: 11.345737},
                },
                {
                  type: "supermarkets",
                  name: "MPreis - Innsbruck Airport",
                  address: "Fürstenweg 180",
                  coords: {latitude: 47.257526, longitude: 11.351541},
                },
                {
                  type: "bakeries",
                  name: "Der Bäcker Ruetz",
                  address : "Viktor-Franz-Hess-Straße 3",
                  coords: {latitude: 47.265551, longitude: 11.345125},
                  note: "Opened on Sunday till 18:00",
                },
                {
                  type: "post office/cigarettes",
                  name: "Post Partner",
                  address: "Technikerstraße 1",
                  coords: {latitude: 47.263563, longitude: 11.351737},
                },
              ],
            }
          }, //key
        ]
      }
  },
]


// {
//   "key": "where to find us",
//   "value": "Technikerstraße 7, 6020 Innsbruck",
// },
// {
//   "key": "category",
//   "value": "12-month-dormitory",
// },
// {
//   "key": "facilities",
//   "value": "communal kitchen, washing machine and dryer, bicycle storage, garden with bbq...and Gerhard",
// },
// {
//   "key": "rooms",
//   "value": "259 rooms with shower/WC, house intercom, internet wlan",
// },
// {
//   "key": "prices(monthly)",
//   "value": "Single room: €375\nDouble room: €308\nParking: €40\nGarage: €64",
// },
// {
//   "key": "nearby universities",
//   "value": "Technik Universität",
// },
