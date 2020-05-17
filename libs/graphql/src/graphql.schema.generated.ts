
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class LoginInput {
    email: string;
    password: string;
}

export class SignUpInput {
    email: string;
    name: string;
    password: string;
    role: string;
}

export class User {
    id: string;
    email: string;
    role: string;
    passwordHash: string;
    name: string;
}

export abstract class IQuery {
    abstract me(): User | Promise<User>;

    abstract user(id: string): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract signup(signUpInput?: SignUpInput): AuthPayload | Promise<AuthPayload>;

    abstract login(loginInput?: LoginInput): AuthPayload | Promise<AuthPayload>;
}

export class AuthPayload {
    id: string;
    email: string;
}
