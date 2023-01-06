const express = require("express");
const Category = require("../controller/Category");
/**
 * @swagger
 * components:
 *   schemas:
 *     categoryDto:
 *         type: object
 *         properties:
 *           _id:
 *              type: string
 *              description: this is auto genereated id
 *           category_name:
 *             type: string
 *             description: this category name
 *           color:
 *             type: string
 *             description: this is category color
 *           image:
 *             type: string
 *         example:
 *           _id: dfs43gfsdghshdsj
 *           category_name: kisan mahat
 *           color: '#ffffff'
 *           image: dsndsnfndsds
 */

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: course Category managing api
 */

// /**
//  * @swagger
//  * /category:
//  *   get:
//  *     summary: Returns all category
//  *     tags: [Course]
//  *     responses:
//  *       200:
//  *         description: this is the list of all category
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/categoryDto'
//  */
/**
 * @swagger
 * /category:
 *  get:
 *     summary: Use to request all category
 *     tags: [Category]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 */
const router = express.Router();
router.get("/", Category.getCategory);
/**
 * @swagger
 * /category:
 *  post:
 *    summary: create new category
 *    tags: [Category]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/categoryDto'
 *    responses:
 *        '201':
 *          description: A sucessfull response
 */
router.post("/", Category.PostCategory);
module.exports = router;
