/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags: 
 *       - Auth
 *     summary: Login.
 *     requestBody:
 *       content:
 *         'application/json': 
 *           schema:
 *             $ref: '#/definitions/Login'
 *     responses:
 *       200:
 *         description: OK 
 */

/**
 * @openapi
 * /auth/register:
 *   post:
 *     tags: 
 *       - Auth
 *     summary: Register.
 *     requestBody:
 *       content:
 *         'application/json': 
 *           schema:
 *             $ref: '#/definitions/Register'
 *     responses:
 *       200:
 *         description: OK 
 */

/**
 * @openapi
 * /auth/forgotPassword/{email}:
 *   get:
 *     tags: 
 *       - Auth
 *     summary: ForgotPassword.
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: Email to mail the reset link
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK 
 */

/**
 * @openapi
 * /auth/password/token/{token}:
 *   get:
 *     tags: 
 *       - Auth
 *     summary: Check Valid Token.
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         description: Password Reset Token
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK 
 */

/**
 * @openapi
 * /auth/resetPassword:
 *   post:
 *     tags: 
 *       - Auth
 *     summary: ResetPassword.
 *     requestBody:
 *       content:
 *         'application/json': 
 *           schema:
 *             $ref: '#/definitions/ResetPassword'
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
 *   Login:           
 *     type: object
 *     properties:
 *       email:
 *         type: string
 *         example: karthickn@techcedence.com
 *       password:
 *         type: string
 *         example: Test@123
 * 
 *   Register:           
 *     type: object
 *     properties:
 *       email:
 *         type: string
 *         example: karthickn@techcedence.com
 *       password:
 *         type: string
 *         example: Test@123
 *       passwordConfirmation:
 *         type: string
 *         example: Test@123
 *       firstName:
 *         type: string
 *         example: Ram
 *       lastName:
 *         type: string
 *         example: Kumar
 *       mobile:
 *         type: string
 *         example: 8877887788
 *       companyName:
 *         type: string
 *         example: Realestart
 *       agentLicenceNo:
 *         type: string
 *         example: 542155
 * 
 *   ResetPassword:           
 *     type: object
 *     properties:
 *       token:
 *         type: string
 *         example: 5oG6PF9Sj6PyBcQJsoLoudvMeokEC8Kg84l0HCeQA0xrn3KxGU9mQr2MkOoRhtYBcncETADMhE0BRBGXljk8iA%3D%3D
 *       password:
 *         type: string
 *         example: Test@123
 *       passwordConfirmation:
 *         type: string
 *         example: Test@123
 */