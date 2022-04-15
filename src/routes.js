import { Router } from 'express'

const routes = new Router()

routes.get('/teste', (req, res) => { 
    return res.json({Ok: 'Ok'}) 
})

export default routes