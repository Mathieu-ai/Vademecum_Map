import { deburr } from 'lodash'
import { dates, reg } from '../../config'
import { compType } from '../../config'
// ^^ file where the factorization of comps are done

/**
 * Takes a Array of Object to transform Array
 * * ⚠️ - Function takes custom properties
 * * 🚫 - NOT generic, it depends of unique properties in Array
 * * Example :
    * ```js
    * $RefactorComps(ArrOfObj)
    * // Prints: [{...}, {...}, {...}]
    * ```
 * ___
 * @param {Array<Object>} tbComps
 * @returns Object[]
 */
export async function $RefactorComps(tbComps: compType[] | any): Promise<compType[] | any> {
    // ^^ iterates in every comp
    for (let comp of tbComps) {
        const r = new RegExp(/.*?\[([^\]]*)/)
        comp.field_membertype_taxonomy = reg.$htmlToString(comp.field_membertype_taxonomy, reg.delHtmlTag)
        comp.title = reg.$htmlToString(comp.title, reg.delHtmlTag)
        comp.field_company_type = reg.$htmlToString(comp.field_company_type, reg.delHtmlTag)
        comp.field_website = reg.$htmlToString(comp.field_website, reg.delHtmlTag)
        comp.field_coordinates = reg.$strToArrOfNumber(comp.field_coordinates, reg.inBrackets, ',', Number)

        Object.keys(comp).forEach(key => {
            if (key.includes('date')) {
                const transformed = reg.$htmlToString(comp[key],reg.inStrings)
                const newDate = transformed ? transformed : comp[key]

                comp[key] = newDate
                comp[key] = comp[key]
                    ? dates.$dateWithFormat(newDate, dates.format.DATE)
                    : comp[key]
            }
        })

        // ^^ search and add in field_state prop the type(s) of the comp
        // comp['field_state'] = {}
        // for (const props in compState) {
        //     if (comp['field_membertype_taxonomy'] === compState[props].state)
        //         comp['field_state'] = compState[props]
        // }

        // ^^ add the prefix link to logo
        comp.field_logo = `https://back.uic.org/${comp.field_logo}`

        // ^^ add a field search that indicates what fields what we can search
        comp.field_search = `${comp.title} ${deburr(comp.title)} ${comp.field_acronym} ${deburr(comp.field_acronym)} ${deburr(comp.field_membertype_taxonomy)} ${comp.field_country} ${deburr(comp.field_country)}`.toUpperCase()
    }
    return tbComps;
}
