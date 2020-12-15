import {urlCall, bbbCall} from './createApiCall'
import {djangoLookup, bbbLookup } from './lookup'

export function joinMainMeeting() {
    djangoLookup("GET", "/meetings/?action=main", {}, (response, status) => {
        const params = [
            {meetingId: response.id},
            {fullName: response.username},
            {redirection: true},
            {password: response.attendeePW}
        ]
        window.location.href = bbbCall("join", params)
    })
}

export function joinMeeting() {
    djangoLookup("GET", "/meetings/?action=breakout", (response, status)=> {
        const params = [
            {meetingId: response.id},
            {fullName: response.username},
            {redirect: true},
            {password: response.attendeePW}
        ]
        window.href.location = bbbCall("join", params)
    })
}

export function endMeeting() {
    djangoLookup("GET", "/meetings/?action=end", {}, (response, status) => {
        const params = [
            {meetingId: response.id}
        ]
        bbbLookup("GET", urlCall("end", params))
    })
}

export function createMeeting(params) {
    djangoLookup("POST", "/meetings/create/", params, (response, status) => {
        console.log(response)
    })
}