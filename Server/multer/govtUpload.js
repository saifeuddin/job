const multer = require('multer')
const path = require('path')



// Filename Config
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'public/govt/')
        },

        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname)
            const fileName = file.originalname
                .replace(fileExt, '')
                .toLowerCase()
                .split(' ')
                .join('-') + '-' + Date.now()
            cb(null, fileName + fileExt)
        }

    })
//



//
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 1000000,
        },
        fileFilter: (req, file, cb) => {
            if (file.fieldname === 'images') {
                if (
                    file.mimetype === "image/jpg" ||
                    file.mimetype === "image/png" ||
                    file.mimetype === "image/jpeg"
                ) {
                    cb(null, true)
                } else {
                    cb(new Error('Only jpeg, jpg, png format Allowed'))
                }
            } else if (file.fieldname === 'doc') {
                if (
                    file.mimetype === "application/pdf"
                ) {
                    cb(null, true)
                } else {
                    cb(new Error('Only .pdf format Allowed'))
                }
            } else {
                cb(new Error('There was an unknown error'))
            }
        }
    })
//



module.exports = upload