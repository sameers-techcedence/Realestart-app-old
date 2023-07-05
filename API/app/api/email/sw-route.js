/**
 * @openapi
 * /email/template:
 *   post:
 *     tags: 
 *       - Email Template
 *     summary: Add Email Template.
 *     requestBody:
 *       content:
 *         'application/json': 
 *           schema:
 *             $ref: '#/definitions/AddTemplate'
 *     responses:
 *       200:
 *         description: OK 
 *     security:
 *       - AccessToken: []
 *       - Language: []
 */

/**
 * @openapi
 * /email/template/list:
 *   post:
 *     tags: 
 *       - Email Template
 *     summary: Email Template List.
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
 * /email/template/{templateId}:
 *   put:
 *     tags: 
 *       - Email Template
 *     summary: Update Email Template.
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       content:
 *         'application/json': 
 *           schema:
 *             $ref: '#/definitions/UpdateTemplate'
 *     responses:
 *       200:
 *         description: OK
 *     security:
 *       - AccessToken: []
 *       - Language: []
 */

/**
 * @openapi
 * /email/template/{templateId}:
 *   get:
 *     tags: 
 *       - Email Template
 *     summary: Get Email Template By Id.
 *     parameters:
 *       - in: path
 *         name: templateId
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
 * /email/template/{templateId}:
 *   delete:
 *     tags: 
 *       - Email Template
 *     summary: Delete Email Template.
 *     parameters:
 *       - in: path
 *         name: templateId
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
 * /email/template/all:
 *   post:
 *     tags: 
 *       - Email Template
 *     summary: Expot Email Templates as CSV.
 *     requestBody:
 *       content:
 *         'application/json': 
 *           schema:
 *             $ref: '#/definitions/AllTemplate'
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
 *   AllTemplate:           
 *     type: object
 *     properties:
 *       filter:
 *         type: string
 *         example: ""
 *       select:
 *         type: array
 *         items:
 *           type: string
 *         example: ['Slug','SubjectEn','CreatedAt']
 * 
 *   AddTemplate:           
 *     type: object
 *     properties:
 *       SubjectEn:
 *         type: string
 *         example: Registration Success
 *       TextEn:
 *         type: string
 *         example: Registration Success
 *       Slug:
 *         type: string
 *         example: REGISTER_MAIL
 * 
 *   UpdateTemplate:           
 *     type: object
 *     properties:
 *       SubjectEn:
 *         type: string
 *         example: Registration Success
 *       TextEn:
 *         type: string
 *         example: Registration Success
 *       Slug:
 *         type: string
 *         example: REGISTER_MAIL
 * 
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
 */
