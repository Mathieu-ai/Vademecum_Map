import axios from 'axios'
import { resCodes, dates, comps, $RefactorComps, compType } from '../../config'
// ^^ file where the initialization of comps are done

/**
 * * Takes the API prop in [.env](https://www.editions-eni.fr/open/mediabook.aspx?idR=2dbd5cb7a7bbde0ae5f4bf002d3a5fbf) to make a request with axios
 * * 🚫 - need [axios](https://axios-http.com/fr/docs/intro) to function
 * * ✔️ - Function is generic, works as long the api is valid
 * * Example :
 * ```js
 *  $API()
 * ```
 * ___
 * @returns Object
 */
 async function $api(): Promise<Object[]> {
    let res = await axios.request({
        url: import.meta.env.VITE_SOME_KEY,
        method: 'GET',
    })

    if (res.status != 200)
        throw new Error('axios request is different from 200')
    return res.data
}
/**
 * Takes a Array of Object to transform Array
 * * ⚠️ - Function takes custom properties
 * * ✔️ - IS generic, most is generic but still dependant on the  _API function that also depends on _RefactorComps function
 * * Example :
 * ```js
 * _GetComps()
 * // Prints: { ALL: [{...}, {...}], STATUS: 1, lastUpdated: "01/10/2022,21:27" }
 * ```
 * ___
 * @returns Object
 */
export async function $GetComps() {
    try {
        let res = await $api()
        if (resCodes.$existUpdated()) {
            comps.ALL = await $RefactorComps(res)
            comps.STATUS = resCodes.IS_INIT
            comps.lastUpdated = dates.$now(dates.format.DATE_TIME)
        }
    } catch (err) {
        comps.STATUS = resCodes.$existUpdated() ? resCodes.NOT_FOUND_INIT : resCodes.NOT_FOUND
    }
}
