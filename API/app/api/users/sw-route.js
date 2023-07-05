/**
 * @openapi
 * /users:
 *   post:
 *     tags: 
 *       - Users
 *     summary: Add User.
 *     requestBody:
 *       content:
 *         'application/json': 
 *           schema:
 *             $ref: '#/definitions/AddUser'
 *     responses:
 *       200:
 *         description: OK
 *     security:
 *       - AccessToken: []
 *       - Language: []
 */

/**
 * @openapi
 * /users:
 *   get:
 *     tags: 
 *       - Users
 *     summary: User List.
 *     responses:
 *       200:
 *         description: OK
 *     security:
 *       - AccessToken: []
 *       - Language: []
 */

/**
 * @openapi
 * /users/{userId}:
 *   put:
 *     tags: 
 *       - Users
 *     summary: Update User.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       content:
 *         'application/json': 
 *           schema:
 *             $ref: '#/definitions/UpdateUser'
 *     responses:
 *       200:
 *         description: OK
 *     security:
 *       - AccessToken: []
 *       - Language: []
 */

/**
 * @openapi
 * /users/{userId}:
 *   get:
 *     tags: 
 *       - Users
 *     summary: Get User By Id.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: OK 
 *     security:
 *       - AccessToken: []
 *       - Language: []
 */

/**
 * @openapi
 * /users/status/{userId}:
 *   put:
 *     tags: 
 *       - Users
 *     summary: User Status Update.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       content:
 *         'application/json': 
 *           schema:
 *             $ref: '#/definitions/UpdateStatus'
 *     responses:
 *       200:
 *         description: OK 
 *     security:
 *       - AccessToken: []
 *       - Language: []
 */

/**
 * @openapi
 * /users/{userId}:
 *   delete:
 *     tags: 
 *       - Users
 *     summary: Delete User.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: OK
 *     security:
 *       - AccessToken: []
 *       - Language: []
 */


/**
 * @openapi
 * definitions:
 *   AddUser:           
 *     type: object
 *     properties:
 *       FirstName:
 *         type: string
 *         example: Ram
 *       LastName:
 *         type: string
 *         example: Kumar
 *       email:
 *         type: string
 *         example: karthickn@techcedence.com
 *       password:
 *         type: string
 *         example: Test@123
 *       roleId:
 *         type: number
 *         example: 1
 *       mobile:
 *         type: string
 *         example: 9988998888
 * 
 *   UpdateUser:           
 *     type: object
 *     properties:
 *       FirstName:
 *         type: string
 *         example: Ram
 *       LastName:
 *         type: string
 *         example: Kumar
 *       password:
 *         type: string
 *         example: Test@123
 *       roleId:
 *         type: number
 *         example: 1
 *       mobile:
 *         type: string
 *         example: 9988998888
 * 
 *   UpdateStatus:           
 *     type: object
 *     properties:
 *       isActive:
 *         type: number
 *         example: 1
 *         minimum: 0
 *         maximum: 1
 */
