/**
 * @api {get} users/me Get User 
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {String} _id User id from the database
 * @apiSuccess {String} firstName Firstname of the User
 * @apiSuccess {String} lastName Lastname of the User
 * @apiSuccess {String} userName Username of the User
 * @apiSuccess {String} createdAt Creation date of the User
 * @apiSuccess {String} updatedAt User's last updated at
 * @apiSuccess {Number} __v database version number for this user object
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *      "_id": "5e0253deed136e5807e5089a",
 *      "firstName": "tal",
 *      "lastName": "keren",
 *      "userName": "talk",
 *      "createdAt": "2019-12-24T18:07:26.964Z",
 *      "updatedAt": "2019-12-24T18:07:27.017Z",
 *      "__v": 1
 *   }    
 */

/**
 * @api {post} users Create user
 * @apiName SignUp
 * @apiGroup User
 * 
 * @apiParam {String} firstName Firstname of the User
 * @apiParam {String} lastName Lastname of the User
 * @apiParam {String} userName Username of the User
 * @apiParam {String} passord User's password
 * 
 * @apiSuccess {Object} User User object
 * @apiSuccess {Object} Token Received token
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 * { 
 *  "user": {
 *       "_id": "5e0253deed136e5807e5089a",
 *       "firstName": "tal",
 *       "lastName": "keren",
 *       "userName": "talk",
 *       "createdAt": "2019-12-24T18:07:26.964Z",
 *       "updatedAt": "2019-12-24T18:07:27.017Z",
 *       "__v": 1
 *   },
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTAyNTNkZWVkMTM2ZTU4MDdlNTA4OWEiLCJpYXQiOjE1NzcyMTA4NDd9.uNcySA5BUS1OWhUNpKhhKaOk2vsC8Yng0uuJLriGgqQ"
 * }
 * 
 * @apiError InvalidSyntax The server could not understand the request due to invalid syntax
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 400 Bad Request
 *   {
 *     "error": "InvalidSyntax"
 *   }
 *
*/

/**
 * @api {patch} users/me Update user
 * @apiName UpdateUser
 * @apiGroup User
 * 
 * @apiParam {String} [firstName] Firstname of the User
 * @apiParam {String} [lastName] Lastname of the User
 * @apiParam {String} [userName] Username of the User
 * @apiParam {String} [passord] User's password
 * 
 * @apiSuccess {String} _id User id from the database
 * @apiSuccess {String} firstName Firstname of the User
 * @apiSuccess {String} lastName Lastname of the User
 * @apiSuccess {String} userName Username of the User
 * @apiSuccess {String} createdAt Creation date of the User
 * @apiSuccess {String} updatedAt User's last updated at
 * @apiSuccess {Number} __v database version number for this user object
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *      "_id": "5e0253deed136e5807e5089a",
 *      "firstName": "tal",
 *      "lastName": "keren",
 *      "userName": "talk",
 *      "createdAt": "2019-12-24T18:07:26.964Z",
 *      "updatedAt": "2019-12-24T18:07:27.017Z",
 *      "__v": 1
 *   } 
 * @apiError InvalidSyntax The server could not understand the request due to invalid syntax
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 400 Bad Request
 *   {
 *     "error": "InvalidSyntax"
 *   }
 * 
 */

 /**
 * @api {delete} users/me Delete user
 * @apiName DeleteUser
 * @apiGroup User
 * 
 * @apiSuccess {String} _id User id from the database
 * @apiSuccess {String} firstName Firstname of the User
 * @apiSuccess {String} lastName Lastname of the User
 * @apiSuccess {String} userName Username of the User
 * @apiSuccess {String} createdAt Creation date of the User
 * @apiSuccess {String} updatedAt User's last updated at
 * @apiSuccess {Number} __v database version number for this user object
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *      "_id": "5e0253deed136e5807e5089a",
 *      "firstName": "tal",
 *      "lastName": "keren",
 *      "userName": "talk",
 *      "createdAt": "2019-12-24T18:07:26.964Z",
 *      "updatedAt": "2019-12-24T18:07:27.017Z",
 *      "__v": 1
 *   } 
 * @apiError InternalServerError The server has encountered a situation it doesn't know how to handle
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 500 Internal Server Error
 *   {
 *     "error": "InternalServerError"
 *   }
 */

/**
 * @api {post} users/login Login user
 * @apiName LogIn
 * @apiGroup User
 * 
 * @apiParam {String} userName Username of the User
 * @apiParam {String} passord User's password
 * 
 * @apiSuccess {Object} User User object
 * @apiSuccess {Object} Token Received token
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * { 
 *  "user": {
 *       "_id": "5e0253deed136e5807e5089a",
 *       "firstName": "tal",
 *       "lastName": "keren",
 *       "userName": "talk",
 *       "createdAt": "2019-12-24T18:07:26.964Z",
 *       "updatedAt": "2019-12-24T18:07:27.017Z",
 *       "__v": 1
 *   },
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTAyNTNkZWVkMTM2ZTU4MDdlNTA4OWEiLCJpYXQiOjE1NzcyMTA4NDd9.uNcySA5BUS1OWhUNpKhhKaOk2vsC8Yng0uuJLriGgqQ"
 * }
 * 
 * @apiError InvalidSyntax The server could not understand the request due to invalid syntax
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 400 Bad Request
 *   {
 *     "error": "InvalidSyntax"
 *   }
 *
*/

/**
 * @api {post} users/logout Logut user
 * @apiName LogOut
 * @apiGroup User
 * 
 * @apiError InternalServerError The server has encountered a situation it doesn't know how to handle
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 500 Internal Server Error
 *   {
 *     "error": "InternalServerError"
 *   }
 */
 