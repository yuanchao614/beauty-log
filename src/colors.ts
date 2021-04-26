import { TextColor } from './interface/index'
import { logIcon } from './browser'
export function textColor(text: string, color: TextColor | string) {
    console.log(`%c ${text}`, `color: ${color};`)
}


export function backgroundColor(text: string, bgColor: TextColor | string) {
    console.log(`%c ${text}`, `background: ${bgColor};`)
}

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

export function bold(text: string) {
    console.log(`%c ${text}`, 'font-weight: bold;font-size: 16px')
}

export const Greeter = (name: string) => `Hello ${name}`;