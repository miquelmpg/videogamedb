import { http, HttpResponse } from 'msw';

const baseApiURL = import.meta.env.VITE_AUTH_BASE_API_URL;

const USERS_LS_KEY = 'users-db';

const users = localStorage.getItem(USERS_LS_KEY) ? JSON.parse(localStorage.getItem(USERS_LS_KEY)) : [];

const storeUsers = () => localStorage.setItem(USERS_LS_KEY, JSON.stringify(users));

export const handleRegister = http.post(`${baseApiURL}/users`, async ({ request }) => {
    const user = await request.clone().json();
    const isAlreadyRegistered = users.some((registeredUser) =>
        registeredUser.email.toLowerCase() === user.email.toLowerCase()
    );

    if (isAlreadyRegistered) {
        return HttpResponse.json(
            {
                message: 'Invalid user register',
                errors: {
                    email: 'Email already exists'
                }
            },
            {status: 400}
        )
    } else {
        user.id = window.crypto.randomUUID().toString();
        user.avatarURL = `https://i.pravatar.cc/300?u=${user.email}`;

        users.push(user);
        storeUsers();

        return HttpResponse.json(user, { status: 201 });
    }
});

export const handleLogin = http.post(`${baseApiURL}/auth`, async ({ request }) => {
    const user = await request.clone().json();

    const existingUser = users.find((registeredUser) => 
        registeredUser.email.toLowerCase() === user.email.toLowerCase()
    );

    if (!existingUser || existingUser.password !== user.password) {
        return HttpResponse.json(
            {
                message: 'Invalid user login',
                errors: {
                    password: 'Invalid email or password'
                }
            },
            { status: 401 }
        )
    } else {
        return HttpResponse.json(existingUser, { status: 201 });
    }
})