export type { ILogin } from "./auth.type";
import type { ComponentType, SVGProps } from "react";

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

export type TTransactionType = "TOP_UP" | "WITHDRAW" | "SEND";

export interface ITransaction {
  _id?: string;
  initiator: IUser;
  recipient: IUser;
  type: TTransactionType;
  amount: number;
  createdAt: string;
  description?: string;
}

export type IWalletStatus = "ACTIVE" | "BLOCKED";

export interface IWallet {
  _id?: string;
  user: IUser;
  status: IWalletStatus;
  balance: number;
  createdAt: string;
  description?: string;
}

export type Service = {
  title: string;
  description: string;
  category: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>; // store the component type
};

export type Feature = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
