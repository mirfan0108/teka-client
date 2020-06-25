
import * as PageInterface from './page.interfaces'
import * as LangInterface from './lang.interfaces'
export let states = {
    onLoad: false,
    lang: 'en',
    isPreloader: false, 
    ...PageInterface.default,
    ...LangInterface.default
}