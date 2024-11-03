/**
 * @api {get} /meters/:id Get Meter Data for a specific customer
 * @apiName GetMeterData
 * @apiGroup Meter
 * @apiParam {String} id Customer ID
 * @apiSuccess CustomerData Customer data object
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "fullName": "John Doe",
 *  "avatar": "https://randomuser.me/api",
 *  "address": "123 Fake Street, AB1 2CD",
 *  "hasSmartMeter": true,
 *  "commsHub": {
 *    "events": 5,
 *    "manufacturer": {
 *      "logoBase64": "356354vchjsdfenrbnm5634......",
 *      "make": "Toshiba",
 *      "model": "T1000",
 *    },
 *    "supplier": {
 *      "logoBase64": "263546v3456v3 gbdsfgsgf.......",
 *    },
 *   "signal": 0.24,
 *   "deviceTime": "2021-01-01T12:00:00Z",
 * }
 */
