import {v1} from "uuid";

const state = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, how are you?', likesCount: 5},
            {id: '2', message: `It's my first post!`, likesCount: 15},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Ansar Khubiev'},
            {id: '2', name: 'Karim Khubiev'},
            {id: '3', name: 'Ayna Khubieva'},
        ],
        messages: [
            {id: '1', message: 'Hello, Ansar! Lorem Ipsum300dsadasdasdasdasdasdasdasdasdasdadadsasadadadadasdasdas'},
            {id: '2', message: 'Hello, Karim!'},
            {id: '3', message: 'Hello, Ayna!'},
        ],
    },
    friends: [
        {id: v1(), name: 'Murat', surname: 'Khubiev', link: '#murat'},
        {id: v1(), name: 'Murat', surname: 'Khubiev', link: '#murat'},
        {id: v1(), name: 'Murat', surname: 'Khubiev', link: '#murat'},
        {id: v1(), name: 'Murat', surname: 'Khubiev', link: '#murat'},
        {id: v1(), name: 'Murat', surname: 'Khubiev', link: '#murat'},
        {id: v1(), name: 'Murat', surname: 'Khubiev', link: '#murat'},
        {id: v1(), name: 'Murat', surname: 'Khubiev', link: '#murat'},
        {id: v1(), name: 'Murat', surname: 'Khubiev', link: '#murat'},
    ]
}

export default state