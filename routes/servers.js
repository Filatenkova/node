import {Router} from 'express'
import {getAll, create, remove} from '../controllers/servers.js'

const router = Router()

// Можно так
// router.get('/api/server', (req, res) => {
//     res.json({test: 42})
// })

// Но лучше так
router.get('/api/server', getAll)
router.post('/api/server', create)
router.delete('/api/server/:id', remove)

// Чтобы обновлять существующий элемент
//router.put()

// Чтобы частично обновлять значения
//router.patch()

export default router
