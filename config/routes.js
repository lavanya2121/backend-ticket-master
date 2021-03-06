const express=require('express')
const router=express.Router();
const usersController =require('../app/controllers/usersController')
const customersController=require('../app/controllers/customersController')
const departmentsController=require('../app/controllers/departmentsController')
const employeesController=require('../app/controllers/employeesController')
const ticketsController=require('../app/controllers/ticketsController')
const {authenticateUser} = require('../app/middlewares/authentication')

//User routes
router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account',authenticateUser,usersController.account)
router.delete('/users/logout', authenticateUser,usersController.logout)

//Customer Routes
router.get('/customers', authenticateUser,customersController.list)//give the same path in postman
router.get('/customers/:id',authenticateUser, customersController.show)
router.post('/customers', authenticateUser,customersController.create)
router.put('/customers/:id', authenticateUser,customersController.update)
router.delete('/customers/:id',authenticateUser, customersController.destroy)

//Department Routes
router.get('/departments', authenticateUser,departmentsController.list)//give the same path in postman
router.get('/departments/:id',authenticateUser, departmentsController.show)
router.post('/departments', authenticateUser,departmentsController.create)
router.put('/departments/:id', authenticateUser,departmentsController.update)
router.delete('/departments/:id',authenticateUser, departmentsController.destroy)

//Employee Routes
router.get('/employees',authenticateUser, employeesController.list)//to connect config and the controller
router.get('/employees/:id',authenticateUser, employeesController.show)
router.post('/employees', authenticateUser,employeesController.create)
router.put('/employees/:id',authenticateUser,employeesController.update)
router.delete('/employees/:id',authenticateUser, employeesController.destroy)

//Ticket Routes
router.get('/tickets',authenticateUser, ticketsController.list)//to connect config and the controller
router.get('/tickets/:id',authenticateUser, ticketsController.show)
router.post('/tickets', authenticateUser,ticketsController.create)
router.put('/tickets/:id',authenticateUser,ticketsController.update)
router.delete('/tickets/:id',authenticateUser, ticketsController.destroy)


module.exports=router