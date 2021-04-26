import { TextColor } from './interface/index'
import { logIcon } from './browser'
import { ColorEnum } from './enum/index'

// color
export function customizeColor(text: string, color: string) {
    console.log(`%c ${text}`, `color: ${color};`)
}

export function black(text: string) {
    console.log(`%c ${text}`, `color: ${ColorEnum.BLACK};`)
}

export function red(text: string) {
    console.log(`%c ${text}`, `color: ${ColorEnum.RED};`)
}

export function green(text: string) {
    console.log(`%c ${text}`, `color: ${ColorEnum.GREEN};`)
}

export function yellow(text: string) {
    console.log(`%c ${text}`, `color: ${ColorEnum.YELLOW};`)
}

export function blue(text: string) {
    console.log(`%c ${text}`, `color: ${ColorEnum.BLUE};`)
}


export function magenta(text: string) {
    console.log(`%c ${text}`, `color: ${ColorEnum.MAGENTA};`)
}

export function cyan(text: string) {
    console.log(`%c ${text}`, `color: ${ColorEnum.CYAN};`)
}

export function gray(text: string) {
    console.log(`%c ${text}`, `color: ${ColorEnum.GRAY};`)
}

// background color

export function bgBlack(text: string) {
    console.log(`%c ${text}`, `background: ${ColorEnum.BLACK};color: white;`)
}

export function bgRed(text: string) {
    console.log(`%c ${text}`, `background: ${ColorEnum.RED};`)
}

export function bgGreen(text: string) {
    console.log(`%c ${text}`, `background: ${ColorEnum.GREEN};`)
}


export function bgYellow(text: string) {
    console.log(`%c ${text}`, `background: ${ColorEnum.YELLOW};`)
}

export function bgBlue(text: string) {
    console.log(`%c ${text}`, `background: ${ColorEnum.BLUE};color: white;`)
}


export function bgMagenta(text: string) {
    console.log(`%c ${text}`, `background: ${ColorEnum.MAGENTA};`)
}

export function bgCyan(text: string) {
    console.log(`%c ${text}`, `background: ${ColorEnum.CYAN};`)
}

export function bgGray(text: string) {
    console.log(`%c ${text}`, `background: ${ColorEnum.GRAY};`)
}

export function customizeBgColor(text: string, bgColor: string) {
    console.log(`%c ${text}`, `background: ${bgColor};`)
}

// icon log
export function info(content: unknown) {
    console.log(`${logIcon.info} ${content}`)
}

export function success(content: unknown) {
    console.log(`${logIcon.success} ${content}`)
}

export function warning(content: unknown) {
    console.log(`${logIcon.warning} ${content}`)
}

export function error(content: unknown) {
    console.log(`${logIcon.error} ${content}`)
}

// style log

export function bold(text: string) {
    console.log(`%c ${text}`, 'font-weight: bold;font-size: 16px')
}

export const Greeter = (name: string) => `Hello ${name}`;