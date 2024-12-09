import {v1} from "uuid";



export type MessageType = {
    message: string
    id: string
}
export type DialogType = {
    name: string
    id: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type FriendType = {
    id: string
    name: string
    surname: string
    link: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    friends: FriendType[]
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, how are you?', likesCount: 5},
            {id: '2', message: `It's my first post!`, likesCount: 15},
        ],
        newPostText: '',
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

let onChange = () => {
    console.log("renderEntireTree");
}

export const subscribe = (callback: ()=>void) => {
    onChange = callback
}

export const addPost = () => {
    const newPost: PostType = {id: v1(), message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    onChange()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    onChange()
}

export const addMessage = (message: string) => {
    const newMessage = {id: v1(), message: message}
    state.dialogsPage.messages.push(newMessage)
}


