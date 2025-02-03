import { Request, Response } from "express";
import axios from "axios";
import {
  isArmstrong,
  sumOfDigits,
  isPrime,
  isPerfect,
} from "../helpers/numberUtils";

const classifyNumber = (num: number) => {
  let properties: string[] = [];
  let funFact = "";

  if (isArmstrong(num)) {
    properties.push("armstrong");
    funFact = `${num} is an Armstrong number because ${num
      .toString()
      .split("")
      .map(Number)
      .map((digit) => `${digit}^${num.toString().length}`)
      .join(" + ")} = ${num}`;
  }

  if (num % 2 === 0) {
    properties.push("even");
  } else {
    properties.push("odd");
  }

  return { properties, funFact };
};

export const classifyNumberHandler = async (req: Request, res: Response) => {
  const { number } = req.query;

  if (!number || isNaN(Number(number)) || !Number.isInteger(Number(number))) {
    res.status(400).json({
      number,
      error: true,
    });
  }

  const num = parseInt(number as string);

  const { properties, funFact } = await classifyNumber(num);

  const digitSum = sumOfDigits(num);

  try {
    const response = await axios.get(`http://numbersapi.com/${num}?json`);
    const funFactApi = response.data.text;

    res.status(200).json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: digitSum,
      fun_fact: funFactApi || funFact,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data from numbers API" });
  }
};
