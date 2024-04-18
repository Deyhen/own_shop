import axios from "axios";
import { backendUrl } from "../api";

interface StripeData {
  firstname: string;
  lastname: string;
  email: string;
  tel: string;
  number: string,
  exp_mounth: number,
  exp_year: number,
  cvc: string,
  cartTotal: number
}

export const makePayment = async (values: StripeData) => {
  try {
    const res = axios.post(`${backendUrl}/payment/confirm`, values)
    return res
  } catch (error) {
    console.log(error);
  }
}