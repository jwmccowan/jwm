
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    id: string;
    username: string;
    role?: string;
    passwordHash: string;
    name?: string;
}

export abstract class IQuery {
    abstract me(): User | Promise<User>;
}
