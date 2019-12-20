// const express = require('express');
// const router = express.Router();
// const sequenceGenerator = require('./sequenceGenerator');
// const documentModel = require('../models/documents');
// function returnError(res, error) {
//   res.status(500).json({
//     message: 'An error occurred',
//     error: error
//   });
// }

// router.get('/', (req, res, next) => {
//   documentModel.find()
//         .then(documents => {
//           res.status(200).json({
//             message: 'Documents fetched successfully',
//             documents: documents
//           });
//         })
//         .catch(error => {
//           returnError(res, error);
//           });
//         });