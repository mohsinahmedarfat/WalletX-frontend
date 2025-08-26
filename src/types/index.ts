import type { ComponentType } from "react";

export type { ILogin } from "./auth.type";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "AGENT" | "USER";

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  role: TRole;
  isBlocked: boolean;
}

export type TTransactionType = "TOP_UP" | "WITHDRAW" | "SEND"

export interface ITransaction {
  _id?: string;
  initiator: IUser;
  recipient: IUser;
  type: TTransactionType;
  amount: number;
  description?: string;
}
