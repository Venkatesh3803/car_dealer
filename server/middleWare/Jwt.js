import jwt from "jsonwebtoken"

export const verifyJwt = async (req, res, next) => {
    const headers = req.headers.authorization;
    try {
        const token = headers.split(" ")[1];
        if (!token) return res.status(401).json("Token is not Avaliable")

        jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
            if (err) return res.status(401).json(err.message);
            req.user = user

            next();
        })
    } catch (error) {
        throw error
    }

}


export const verifyUser = async (req, res, next) => {
    verifyJwt(req, res, () => {
        // console.log(req.user, req.body)
        if (req.user.id === req.body.id || req.user.id === req.body.dealerId) {
            next()
        } else {
            return res.status(401)
        }
    })
}