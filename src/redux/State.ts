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
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    friends: FriendType[]
}
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (callback: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

export const store: StoreType = {
    _state: {
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
                {id: '1', message: 'Hello, Ansar!'},
                {id: '2', message: 'Hello, Karim!'},
                {id: '3', message: 'Hello, Ayna!'},
            ],
            newMessageText: '',
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
    },

    _callSubscriber() {},

    getState() {return this._state},
    subscribe(callback) {this._callSubscriber = callback},

    dispatch(action: ActionType) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this.getState())

        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.payload.newText
            this._callSubscriber(this.getState())

        } else if (action.type === 'SEND_MESSAGE') {
            const newMessage: MessageType = {id: v1(), message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this.getState())

        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.dialogsPage.newMessageText = action.payload.newText
            this._callSubscriber(this.getState())
        }
    }
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE_NEW_POST_TEXT', payload: {newText}} as const)
export const updateNewMessageTextAC = (newText: string) => ({type: 'UPDATE_NEW_MESSAGE_TEXT', payload: {newText}} as const)
export const sendMessageAC = () => ({type: 'SEND_MESSAGE'} as const)

type AddPostType = ReturnType<typeof addPostAC>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>
type SendMessageType = ReturnType<typeof sendMessageAC>
type UpdateNewMessageTextType = ReturnType<typeof updateNewMessageTextAC>

export type ActionType = AddPostType |
    UpdateNewPostTextType |
    SendMessageType |
    UpdateNewMessageTextType
