import express from "express"

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
    res.json({message: 'Welcome to Faketor API'})
})



export default router
