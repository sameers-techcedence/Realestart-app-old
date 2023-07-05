/**
 * @openapi
 * /roles:
 *   post:
 *     tags: 
 *       - Roles
 *     summary: Add Role.
 *     requestBody:
 *       content:
 *         'application/json': 
 *           schema:
 *             $ref: '#/definitions/AddRole'
 *     responses:
 *       200:
 *         description: OK
 *     security:
 *       - AccessToken: []
 *       - Language: []
 */

/**
 * @openapi
 * /roles/paginate:
 *   post:
 *     tags: 
 *       - Roles
 *     summary: Paginate Role.
 *     requestBody:
 *       content:
 *         'application/json': 
 *           schema:
 *             $ref: '#/definitions/Paginate'
 *     responses:
 *       200:
 *         description: OK
 *     security:
 *       - AccessToken: []
 *       - Language: []
 */

/**
 * @openapi
 * /roles:
 *   get:
 *     tags: 
 *       - Roles
 *     summary: Role List.
 *     responses:
 *       200:
 *         description: OK
 *     security:
 *       - AccessToken: []
 *       - Language: []
 */

/**
 * @openapi
 * /roles/{roleId}:
 *   put:
 *     tags: 
 *       - Roles
 *     summary: Update Role.
 *     parameters:
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       content:
 *         'application/json': 
 *           schema:
 *             $ref: '#/definitions/UpdateRole'
 *     responses:
 *       200:
 *         description: OK
 *     security:
 *       - AccessToken: []
 *       - Language: []
 */

/**
 * @openapi
 * /roles/{roleId}:
 *   get:
 *     tags: 
 *       - Roles
 *     summary: Get Role By Id.
 *     parameters:
 *       - in: path
 *         name: roleId
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
 * /roles/{roleId}:
 *   delete:
 *     tags: 
 *       - Roles
 *     summary: Delete Role.
 *     parameters:
 *       - in: path
 *         name: roleId
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
 * /roles/status/{roleId}:
 *   put:
 *     tags: 
 *       - Roles
 *     summary: Role Status Update.
 *     parameters:
 *       - in: path
 *         name: roleId
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
 * /roles/functions:
 *   get:
 *     tags: 
 *       - Roles
 *     summary: Function List.
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
 *   Paginate:           
 *     type: object
 *     properties:
 *       draw:
 *         type: number
 *         example: 1
 *       start:
 *         type: number
 *         example: 0
 *       length:
 *         type: number
 *         example: 2
 *       search:
 *         type: object
 *         properties:
 *           value:
 *             type: string
 *             example: ""
 *           regex:
 *             type: boolean
 *             example: false
 *       order:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             column:
 *               type: number
 *               example: 0
 *             dir:
 *               type: string
 *               example: asc
 *       columns:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             data:
 *               type: string
 *               example: RoleID
 *             name:
 *               type: string
 *               example: ""
 *             searchable:
 *               type: boolean
 *               example: true
 *             orderable:
 *               type: boolean
 *               example: true
 *             search:
 *               type: object
 *               properties:
 *                 value:
 *                   type: string
 *                   example: ""
 *                 regex:
 *                   type: boolean
 *                   example: false
 * 
 *   AddRole:           
 *     type: object
 *     properties:
 *       roleNameInEn:
 *         type: string
 *         example: Employee
 *       roleNameInAr:
 *         type: string
 *         example: Employee
 *       functions:
 *         type: array
 *         items:
 *           type: number
 *         example: [1]
 * 
 *   UpdateRole:           
 *     type: object
 *     properties:
 *       roleNameInEn:
 *         type: string
 *         example: Emloyee
 *       roleNameInAr:
 *         type: string
 *         example: Emloyee
 *       functions:
 *         type: array
 *         items:
 *           type: number
 *         example: [1]
 *       isActive:
 *         type: number
 *         example: 1
 * 
 *   UpdateStatus:           
 *     type: object
 *     properties:
 *       isActive:
 *         type: number
 *         example: 1
 */
