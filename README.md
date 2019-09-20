# README 

## Project description

Welcome to my version of createMenuData, a program that converts an array of strings into a JavaScript object.

## Solution

I decided to define four additional functions, and have the original createMenuData calling on those functions. This followed SRP and allowed me to encapsulate the various data sets, making it easiliy changeable in case the data input/requirements change.

## Setting up and running tests

First, clone this repository. Then:
```console
cd tech-test
npm install
jest
```
