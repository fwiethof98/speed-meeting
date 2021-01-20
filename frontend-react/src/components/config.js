import {PersonForm} from './templates/Forms'
import {IntentForm} from './templates/Forms'
import {SuccessContent} from './auth/register/SuccessPage'
import Preference from './event/Preference'
import Feedback from './event/Feedback'
import AboutPage from './auth/register/AboutPage'
import EventWaiting from './event/EventWaiting'
import EventMatch from './event/EventMatch'
import EventCurrent from './event/EventCurrent'
import ManageEvents from './manage/ManageEvents'
import ManageHobbies from './manage/ManageHobbies'
import EventNoMatch from './event/EventNoMatch'

// CONFIGURATION OF REGISTER FORM 
export const profile_entries = [{name: "first_name", displayName: "First Name", type: "text", required: true},
                {name: "last_name", displayName: "Last Name", type: "text", required: true},
                {name: "birthday", displayName: "Birthday", type: "date", required: true},
                {name: "email", displayName: "E-Mail", type: "email", required: true},
                {name: "password", displayName: "Password", type: "password", required: true},
                {name: "phone", displayName: "Phone number (+xx xxxx xxxxxxxx)", type: "text", required: false},
                {name: "university", displayName: "University", type: "dropdown", required: true, entries: ["A) TUM", "B) LMU", "C) Hochschule München", "D) Other"]},
                {name: "studies", displayName: "Field of Studies", type: "dropdown", required: true, entries: ["", "- Electrical Engineering", "- Biology", "- Chemistry", "- Physics", "- Space Sciences", "- Informatics", "- Computer Engineering", "- Mathematics", "- Medicine & Health", "- Business & Management","- Economics","- Communication & Media", "- Political science", "- Mechanical Engineering", "- Law", "- Philosophy", "- Sport Sciences", "Other Social Sciences", "Other Humanities", "Other Engineering Sciences", "Other Natural Sciences", "Other Arts","Other Studies"]},
                {name: "status", displayName: "Level", type: "dropdown", required: true, entries: ["Bachelor", "Master", "PhD"]},
                {name: "semester", displayName: "Semester (in your current studies)", type: "dropdown", required: true, entries: [1, 2, 3, 4, 5, 6, 7, 8, 9]},
                {name: "data_check", displayName: "By clicking on the “Finish”-button, I confirm that my data can be used for purposes described in the Privacy Policy.*", type: "checkbox", required: true},
                {name: "mail_check", displayName: "I agree to receive E-Mails reminding me of upcoming events and other useful information related to the services of Gathr.de*", type: "checkbox", required: true}]

export const intent_entries = [{name: "students", description: "No, Simply Connect Me With Other Students", iconName: "groups", text_box: "Choose to get to know a variety of students from Munich!"},
                {name: "tandem", description: "Yes, Find Tandem Learning Partners", iconName: "menu_book", text_box: "Choose to find new study pals for university, languages, and skill exchanges!"},
                {name: "sports", description: "Yes, Find Sport Partners", iconName: "sports_handball", text_box: "Choose to get connected with athletes and sport friends around you!"},
                {name: "founder", description: "Yes, Find Start-Up Co-Founders", iconName: "emoji_objects", text_box: "Choose to connect with start-up enthusiasts!"}]

export const register = {
    title: "GATHR Meet&Mingle Roulette",
    subtitle: "Next online event: 22nd of January, 7pm",
    tab_names: ["HOME", "SIGN-UP"],
    title_component: "",
    form_name: "register",
    tabs: [{
            name: "HOME", 
            subtitle: "GET TO KNOW OTHER STUDENTS",
            component: <AboutPage />
        },
        {
            name: "SIGN-UP",
            subtitle: "Tell us about yourself!",
            component: <div><PersonForm entries={profile_entries} n_columns={2} /><IntentForm entries={intent_entries} /></div>,
        }
    ]
}

// CONFIGURATION OF ABOUT PAGE TAB
export const about_page = {
    description: "Munich Universities - Sport Partners - Learning Groups - Co-Founders - Friends",
    entries: [{name: "faq1", title: "What is GATHR?", text: "GATHR is an exciting new online event that will match you with like-minded people! No matter if you want to find other students from your studies for a learning group, if you search for sports partners, or if you want to find the perfect co-founder for your next start-up."},
            {name: "faq2", title: "How does a GATHR event work?", text: "Every GATHR event aims at getting you in contact with as many other Munich students as possible! You will meet 1-2 other participants in speed-meeting video calls for 10 minutes. After getting to know each other, you can vote whether you want to stay in contact and meet again. Then, the next video round start and you will be connected with new participants."},
            {name: "faq3", title: "Who will I meet?", text: "Depending on the criteria you defined in your profile, you will meet a variety of students from Munich! Some are new in the city and search for connections, some others search for sport partners or learning exchanges, and some will invite you to found the next big start-up! Which group will you belong to? :)"},
            {name: "faq4", title: "What are the matching criteria?", text: "The matching ensures that you meet people which have similar interests and hobbies as you. After registration, you fill out a questionnaire that is used for matching. We ask about your studies, your hobbies, and what your goal for connecting with new people is."},
            {name: "faq5", title: "How does the voting work?", text: "The voting helps you and your conversation partners to quickly align on a common interest and on the next activity you want to do. After each video round, everyone gets to vote on whether you want to meet again. If two people select the same option, you get informed and can start organizing your next meeting!"},
            {name: "faq6", title: "Do I need to prepare anything?", text: "No :) You can just join our next online event, and we will connect you with other students in Munich! In order to help kickstart your conversations, we even provide you with ice-breaking questions!"},
            {name: "faq7", title: "Is it free?", text: "Yes, GATHR is free! Our goal is to become a plattform available for all Munich students to connect!"},
            {name: "faq8", title: "Who can I contact for questions or feedback?", text: "We would love to hear from you! You can always write us via e-mail at info@gathr.de !"}],
    subtitle: "FAQ"
}

// CONFIGURATION OF SUCCESS PAGE
export const success_page = {
    title: "Your registration was successful!",
    subtitle: "We will help you GATHR!",
    title_component: "",
    tab_names: ["HOME"],
    tabs: [{
            name: "WELCOME", 
            subtitle: "",
            component: <SuccessContent />,
        },
    ]
}

// CONFIGURATION OF PREFERENCE PAGE TAB
export const preference = {
    subtitle: "Select y",
    language: {
        subtitle: "Which language do you prefer?",
        entries: [{name: "language-german", displayName: "Only speaking German", type: "checkbox"},
                {name: "language-english", displayName: "Only speaking English", type: "checkbox"}]
    },
    studies: {
        subtitle: "Which studies do you prefer?",
        entries: [{name: "study-same", displayName: "People in my course of study", type: "checkbox"},
                {name: "study-any", displayName: "People in all courses of study", type: "checkbox"}]
    },
    hobbies: {
        subtitle: "Which activities do you like?",
        entries: [1, 2, 3, 4, 5],
        n_hobbies: 5
    }
}

// CONFIGURATION OF FEEDBACK PAGE TAB
export const feedback_entries = [{name: "feedback-1", displayName: "Nothing", type: "checkbox"},
                            {name: "feedback-2", displayName: "More", type: "checkbox"},
                            {name: "feedback-3", displayName: "Even more!", type: "checkbox"}]

// CONFIGURATION OF EVENT TABS

export const event = {
    title: "Welcome to Gathr",
    subtitle: "",
    title_component: "",
    tab_names: ['Matching', 'Event'],
    tabs: [{
            name: "Matching",
            subtitle: "Select your five favourite hobbies",
            component: <Preference />
        },
        {
            name: "Event",
            subtitle: "PLACEHOLDER",
            component: "PLACEHOLDER"
        },
    ],
    event_tab_options: {
        waiting: {
            name: "Event",
            subtitle: "",
            component: <EventWaiting />,
        },
        match: {
            name: "Event",
            subtitle: "",
            component: <EventMatch />,
        },
        feedback: {
            name: "Event",
            subtitle: "",
            component: <Feedback entries={feedback_entries} />
        },
        current: {
            name: "Event",
            subtitle: "",
            component: <EventCurrent />
        },
        nomatch: {
            name: "Event",
            subtitle: "",
            component: <EventNoMatch />
        }
    }
}


// CONFIGURATION OF LOGIN PAGE
export const login_entries = [{name: "username", displayName: "Username (or mail address)", type: "text", required: true},
                    {name: "password", displayName: "Password", type: "password", required: true}]

export const login = {
    title: "Login to your account!",
    subtitle: "",
    title_component: "",
    form_name: "",
    tab_names: ["LOGIN"],
    tabs: [{
            name: "LOGIN", 
            subtitle: "",
            component: <PersonForm entries={login_entries} n_columns={2} />
        }
    ]
}

// CONFIGURATION OF MANAGE AREA

export const event_entries = [
        {name: "name", displayName: "Event Title", type: "text"},
        {name: "meetingID", displayName: "Meeting ID", type: "text"},
        {name: "date", displayName: "Date", type: "date"},
        {name: "time", displayName: "Time", type: "time"},
        {name: "moderatorPW", displayName: "Moderator password", type: "text"}
]

export const hobby_entries = [
        {name: "name", displayName: "Hobby name", type: "text"}
]

export const manage = {
    title: "Manage Gathr",
    subtitle: "Creation and deletion of models",
    title_component: "",
    tab_names: ['EVENTS', 'HOBBIES'],
    tabs: [{
            name: "EVENTS",
            subtitle: "Create, delete or start events",
            component: <ManageEvents name="event" />
        },
        {
            name: "HOBBIES",
            subtitle: "Create or delete hobbies",
            component: <ManageHobbies name="hobby" />
        }
    ]
}