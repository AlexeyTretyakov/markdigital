/**
 * Factor Settings - How settings work in Factor...
 *
 * Your settings files are how you customize themes and plugins.
 * They allow you to set text and images, but also override components, routes and more.
 *
 */
export default {

    metatags: {
        defaultTitle: "Mark Digital",
        titleTemplate: "Mark Digital",
      },
      site: {
        
        logo: (): Promise<any> => import("./mylogo.vue"),
        
        nav: [
          {
            _item: "intro",
            path: "/",
            name: "Интро",
          },
          {
            _item: "about",
            path: "/about",
            name: "О нас",
          },
          {
            _item: "work",
            path: "/work",
            name: "Кейсы",
          },
          {
            _item: "blog",
            path: "/blog",
            name: "Блог",
          },
          {
            _item: "contact",
            path: "/contact",
            name: "Контакты",
          },
        ],
        cta: {
            headline: "Давайте обсудим ваш проект",
            path: "/contact",
            text: "Напишите нам",
          },
},

    home:{
        intro:{
      pretitle: "Mark Digital",
      title: "Реклама в соц.сетях",
      content:"Контент, продвижение, работа с блогерами",
      buttons: [
        {
          _item: "contact",
          link: "/contact",
          text: `Начать проект  <i class="fas fa-arrow-right"></i>`,
          classes:
            "btn rounded-full bg-blue-500 text-white hover:bg-blue-700 hover:text-white",
        },
        {
          _item: "work",
          link: "/work",
          text: "Кейсы",
          classes:
            "btn rounded-full border border-solid border-white text-white hover:bg-white hover:text-blue-500",
        },
      ],
    },

    section2: {
      pretitle: "Услуги",
      title: "Что мы делаем",
    },
    section3: {
      pretitle: "Кейсы",
      title: "Последние проекты",
      buttons: [
          {
        _item: "work",
        link: "/work",
        text: "Посмотреть все кейсы",
        classes:"btn rounded-full bg-blue-500 text-white hover:bg-blue-700 hover:text-white",
          },
      ],
      limit: 4, // Post limit
    },
    section4: {
        pretitle: "Отзывы",
        title: "Истории успеха",
    },
    },
    footer: {
        legal: `&copy; 2020 <a href="https://www.mark-digital.ru/" target="_blank">Mark-digital.ru</a>`,
        nav: [
          {
            _item: "terms",
            path: "https://www.fiction.com/terms-of-service",
            text: "Реквизиты",
          },
          {
            _item: "privacy",
            path: "https://www.fiction.com/privacy-policy",
            text: "Пользовательское соглашение",
          },
        ],
      },
      work: {
        returnLinkText: "Все кейсы",
        pretitle: "Кейсы",
        title: "Наши работы",
        content: "Проекты с которыми мы работали или работаем в данное время",
        metatags: {
            index: {
              title: "Mark Digital",
              description:
                "Наши кейсы",
              image: require("./logo.png"),
            },
          },
          templateSettings: [
            {
              _id: "bullets",
              input: "sortable",
              label: "Additional Work Info",
              description: "Additional information about this project",
              _default: [
                { __title: "Client", value: "Client Name" },
                { __title: "Role", value: "Role" },
                { __title: "Year", value: new Date().getFullYear() },
                { __title: "Platforms", value: "Web" },
                { __title: "URL", value: "https://www.example.com" },
              ],
              settings: [
                {
                  input: "text",
                  label: "Value",
                  _id: "value",
                },
              ],
            },
          ],  
    },
    }