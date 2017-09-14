export const utils = [
  {
    "key": "kitchen",
    "name": "Kitchen",
    "subtitle": "How to use the kitchen",
    "description": "Please mind your kitchen stuff.\nEverything you leave in the kitchen at night\nwill be thrown away by the housekeeper.",
    "picture": {
      "large": "../images/kitchen.jpg",
      "medium": "",
      "thumbnail": "../images/icons/kitchen.png",
    },
    "subcategories":[
      {
        "key": "common kitchenware",
        "name": "Common kitchenware",
        "description": "Where to find or put common kitchen stuff",
        "page": [
          {
            "name": "common kitchenware",
            "description": "under the sink cabinet",
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
      },
      {
        "key": "faq",
        "name": "Troubleshoot",
        "description": "Do not panic, we have the solution",
        "page": [
          {
            "name": "The stove doesn't work!",
            "description": "Do not panic, we have the solution",
            "text": "Easy! For security reasons, the stove is supposed not"+
              "to work without setting the timer. You find it on the wall, close "+
              "to the kitchen hood.",
            "note":"",
          },
          {
            "name": "I left my stuff in the kitchen at night!",
            "description": "And now you don't find it anymore, right?",
            "text": "Don't say I haven't told you not to leave anything in the kitchen. "+
              "Luckily sometimes our housekeeper does not throw away whatever he finds "+
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
      "large": "../images/singleroom.jpg",
      "medium": "",
      "thumbnail": "../images/icons/laundry.png",
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
      "large": "../images/doubleroom.jpg",
      "medium": "",
      "thumbnail": "../images/icons/janitor.png",
    },
    "subcategories":[
      {
        name: "Calendar",
        description: "find out when the cleaning lady is coming!",
      }
    ],
  },
  {
    "key": "keys",
    "name": "lost my keys",
    "subtitle": "what to do if you're locked out",
    "description": "what to do in case you are locked out",
    "caption": "you can contact the following people",
    "picture": {
      "large": "",
      "medium": "",
      "thumbnail": "../images/icons/key.png",
    },
    "subcategories":[
      {
        "name": "Office desk",
        "description": "During office opening times, you can ask the admin to unlock the room for you",
      },
      {
        "name": "Gerhard",
        "description": "Our beloved housekeeper! If you find him, he'll be happy to help you",
      },
      {
        "name": "Cleaning ladies",
        "description": "During weekdays, you can ask the cleaning ladies to unlock the room for you",
      },
      {
        "name": "Dorm's chosen ones :P",
        "description": "If nothing above works, here you find a list of people you can contact",
      },
    ],
  },
  {
    "key": "party",
    "name": "Party",
    "subtitle": "want to throw a party?",
    "description": "Want to throw a party?",
    "caption": "Reserve the room!\nJust mind the other people living here.",
    "picture": {
      "large": "../images/party.png",
      "medium": "",
      "thumbnail": "../images/icons/party.png",
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
      "large": "../images/music.png",
      "medium": "",
      "thumbnail": "../images/icons/music.png",
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
      "large": "",
      "medium": "",
      "thumbnail": "../images/icons/gym.png",
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
      "large": "",
      "medium": "",
      "thumbnail": "",
    },
    "subcategories": [
      {
        "name": "Waste separation",
        "description": "Different trash in different box",
      },
      {
        "name": "Organic waste",
        "description": "Where to put the organic waste",
      },
      {
        "name": "Kitchen waste",
        "description": "What can i put in the trash bin in the cupboards area?"
      },
      {
        "name": "Personal waste",
        "description": "How does it work with personal waste",
      }
    ],
  },
  {
    "key": "write",
    "name": "Write to Ben",
    "subtitle": "He will like to hear from you",
    "description": "Write to us",
    "picture": {
      "large": "",
      "medium": "",
      "thumbnail": "../images/icons/email.png",
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
            page: [
              {
                "name": "meldezettel",
                "description": "how to register to the townhall",
                "text": "This document is required to register as a citizen of Innsbruck."+
                " You receive it from the office on arrival and have to bring it to the office"+
                " on the first floor in Rathaus Galerie (mariatheresienstraße)."+
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
            page: [
              {
                name: "Dormitory",
                description: "12-month-dormitory (01.09. - 31.08.) -\nrooms are also offered during summer! ",
                text: "We offer a communal kitchen, washing machine and dryer, garage and bicycle storage,"+
                "a party room and an amazing garden with a barbeque"+
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
