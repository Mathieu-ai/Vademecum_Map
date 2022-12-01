import dayjs from 'dayjs'
// ^^ file that contain all properties that the server needs

/**
 * Object with dates properties and function
 * * ⚠️ - need [dayjs](https://day.js.org/docs/en/installation/installation) to function
 * * ✔️ - generic, it is a Object
 * ___
 * @returns Object
 */
export const dates = {
    format: {
        /**
         * Return Day, month and year
         * * ✔️ - generic, it is a string
         * ```js
         * // Print => "DD/MM/YYYY"
         * ```
         * ___
         * @returns String
         */
        DATE: 'DD/MM/YYYY',
        /**
         * Return the hours with minutes
         * * ✔️ - generic, it is a string
         * ```js
         * // Print => "HH:mm:ss"
         * ```
         * ___
         * @returns String
         */
        TIME: 'HH:mm',
        /**
         * Return the Date with Hours and minutes
         * * ✔️ - generic, it is a string
         * ```js
         * // Print => "DD/MM/YYYY,HH:mm:ss"
         * ```
         * ___
         * @returns String
         */
        DATE_TIME: 'DD/MM/YYYY,HH:mm:ss',
    },
    /**
     * Format current time to any format specified
     * * ⚠️ - need [dayjs](https://day.js.org/docs/en/installation/installation) to function
     * * ✔️ - Function is generic, it can takes any string for any case to format
     * * Example :
     * ```js
     * $now(Date.now(), "DD/MM/YYYY")
     * // Prints => 01/10/2022
     * ```
     * ___
     * @param {String} a
     * @returns String
     */
    $now: function (a: string): string {
        return dayjs(new Date(Date.now())).format(a)
    },
    /**
     * Get number of seconds from now to midnight
     * * ✔️ - Function is generic, it returns a number
     * * Example :
     * ```js
     * $secondsToTomorrow()
     * // Prints => 48087
     * ```
     * ___
     * @returns Number
     */
    $secondsToTomorrow: function (): number {
        // var d = new Date()
        // const toTomorrow: number = Math.round((-d + d.setHours(24, 0, 0, 0)) / 6e4) * 60
        let now = new Date(Date.now()).getHours()
        return (-now + 24 * 3600)
    },
    /**
     * Takes a String to any format
     * * ⚠️ - need [dayjs](https://day.js.org/docs/en/installation/installation) to function
     * * ✔️ - Function is generic, it can takes any string for any case to format if is a Date
     * * Example :
     * ```js
     * $dateWithFormat(Date.now(), "DD/MM/YYYY")
     * // Prints: 27/07/2022
     * ```
     * ___
     * @param {Date} a
     * @param {String} b
     * @returns String
     */
    $dateWithFormat: function (a: string, b: string): String {
        return dayjs(a).format(b)
    },
}

/**
 * Custom response codes
 * * ✔️ - generic, it is a Object
 * ___
 * @returns Number
 */
export const resCodes = {
    /**
     * Custom Property that indicates the first state of the comps ( should never have this status code )
     * * ✔️ - generic, it is a number
     * ```js
     * // Prints => 0
     * ```
     * ___
     * @returns Number
     */
    NOT_INIT: 0,
    /**
     * Custom Property that indicates that the comps have been initialized at least once
     * * ✔️ - generic, it is a number
     * ```js
     * // Prints => 1
     * ```
     * ___
     * @returns Number
     */
    IS_INIT: 1,
    /**
     * Custom Property that indicates that the comps have been initialized at least once but the api is down
     * * ✔️ - generic, it is a number
     * ```js
     * // Prints => 2
     * ```
     * ___
     * @returns Number
     */
    NOT_FOUND_INIT: 2,
    /**
     * Custom Property that indicates that the comps have not been initialized at least once and that the api is down
     * * ✔️ - generic, it is a number
     * ```js
     * // Prints: 9
     * ```
     * ___
     * @returns Number
     */
    NOT_FOUND: 9,
    //INFORMATIONAL: [100, 199],
    // /**
    //  * Represents HTTP success response resCodes
    //  * * ✔️ - generic, it is a array
    //  * * ```js
    //  *  // Print => [200,299]
    //  * ```
    //  * ___
    //  * @returns Array
    //  */
    // SUCCESS: [200, 299],
    //CLIENT_ERROR: [400, 499],
    //SERVER_ERROR: [500, 599],
    NO_UPDATED: 'nope',
    /**
* Takes lastUpdated and resCodes.NO_UPDATED
* * ⚠️ - take custom properties
* * ✔️ - Function is generic, it return a Boolean
* * Example :
* ```js
* $existUpdated()
* // Prints: true | false
* ```
* ___
* @returns Boolean
*/
    $existUpdated: function (): boolean {
        return comps['lastUpdated'] == resCodes['NO_UPDATED']
    },
}

/**
 * Where comps information's are stored
 * * ✔️ - generic, it is a array
 * ```js
 * // Print => [ALL : [],STATUS: 1,lastUpdated: "01/10/2022"]
 * ```
 * ___
 * @returns Array
 */
export let comps = {
    /**
     * Where all the comps are stored
     * * ✔️ - generic, it is a array
     * ```js
     * // Prints => [{...}, {...}]
     * ```
     * @returns Array
     */
    ALL: [],
    /**
     * Indicates the state of the response based on the resCodes property
     * * ✔️ - generic, it is a number
     * ```js
     * // Print => 0 to 9
     * ```
     * @returns Number
     */
    STATUS: resCodes['NOT_INIT'],
    /**
     * Request Date, 'nope' by default because no comps are initialized
     * * ✔️ - generic, it is a String
     * ```js
     * // Print => 01/10/2022,07:00:ss
     * ```
     * @returns String
     */
    lastUpdated: resCodes['NO_UPDATED'],
}

/**
 * Where all the comps types are stored, most of properties are used for the front
 * * ✔️ - generic, it is a array
 * ```js
 * // Print => [{...}, { ...}]
 * ```
 * ___
 * @returns Array
 */
export const compState: Array<{ type: string; color: string; icon: string; state: string }> = [
    { type: 'success', color: 'teal-3', icon: 'alpha-a-circle', state: 'Active comp' },
    { type: 'warning', color: 'blue-4', icon: 'alpha-a-circle', state: 'Affiliate comp' },
    { type: 'info', color: 'cyan-1', icon: 'alpha-a-circle', state: 'Associate comp' },
    { type: 'error', color: 'negative', icon: 'alpha-s-circle', state: 'Suspended' },
]

/**
    * Where all regexps are defined to identify different types of strings
    * * ✔️ - generic, it is a Object
    * ```js
    * // Print => { delHtmlTag : ..., ... }
    * ```
    * ___
    * @returns Object
 */
export const reg = {
    /**
        * identify string in html tag
        * * ✔️ - generic, it is a regexp
        * ```js
        * // Print => /.*?>([^<]*)/
        * ```
        * ___
        * @returns String
    */
    delHtmlTag: new RegExp(/.*?>([^<]*)/),
    /**
        * identify Brackets in html tag
        * * ✔️ - generic, it is a regexp
        * ```js
        * // Print => /.*?\[([^\]]*)/
        * ```
        * ___
        * @returns String
    */
    inBrackets: new RegExp(/.*?\[([^\]]*)/),
    /**
        * identify Strings in html tag
        * * ✔️ - generic, it is a regexp
        * ```js
        * // Print => /.*?\"([^\"]*)/
        * ```
        * ___
        * @returns String
    */
    inStrings: new RegExp(/.*?\"([^\"]*)/),
    /**
        * Takes a string and regexp to return the matched transformed string
        * * ✔️ - Function is generic, it return a string
        * * Example :
        * ```js
        * $htmlToString("<time datetime=\"2022-06-22T00:00:00Z\">Wed, 06/22/2022 - 02:00</time>\n", reg.inStrings)
        * // Prints: 2022-06-22T00:00:00Z
        * ```
        * ___
        * @param {String} a
        * @param {RegExp} b
        * @returns String
    */
    $htmlToString: function (a: string, b: RegExp): string | undefined {
        return a.match(b)?.[1]
    },
    /**
        * Takes two strings, Regexp and Function to return a Array of the type chosen
        * * ⚠️ - need function $htmlToString in order to work
        * * ⚠️ - only works if ALL the conditions are satisfied
        * * ✔️ - Function is generic, it return a Array
        * * Example :
        * ```js
        * $strToArrOfNumber("{&quot;coord;:[14.190453,40.828523]}", new RegExp(/.*?\[([^\]]*)/), ',', Number)
        * // Prints: [ 14.190453, 40.828523 ]
        * ```
        * ___
        * @param {String} a
        * @param {RegExp} b
        * @param {string} c
        * @param {Function} d
        * @returns String[] or number[]
    */
    $strToArrOfNumber: function (a: string, b: RegExp, c: string, d: Function): number[] | undefined {
        return this.$htmlToString(a, b)?.split(c).map((coor: any) => d(coor))
    },
}

/**
     * Where the type of the companies are stored to determine the type for typescript
     * * ✔️ - generic, it is a type
     * ```js
     * // Print => { title : ..., ... }
     * ```
     * ___
     * @returns Object
 */
export type compType = {
    title: string;
    field_address: string;
    field_city: string;
    field_company_code: string;
    field_company_type: string;
    field_company_email: string;
    field_fax: string;
    field_lastupdate: string;
    field_logo: string;
    field_phone: string;
    field_postalcode: string;
    field_website: string;
    field_country: string;
    field_coordinates: string;
}