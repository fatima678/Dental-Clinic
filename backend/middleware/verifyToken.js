// // const jwt = require('jsonwebtoken');
// // const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';

// // module.exports = (req, res, next) => {
// //   const authHeader = req.headers.authorization;
// //   if(!authHeader) return res.status(401).json({ message: 'No token provided' });

// //   const token = authHeader.split(' ')[1];
// //   if(!token) return res.status(401).json({ message: 'Invalid token' });

// //   try {
// //     const decoded = jwt.verify(token, JWT_SECRET);
// //     req.user = decoded; // { id, role, iat, exp }
// //     next();
// //   } catch (err) {
// //     return res.status(401).json({ message: 'Token invalid or expired' });
// //   }
// // };


// const jwt = require('jsonwebtoken');
// const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';

// module.exports = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader)
//     return res.status(401).json({ message: 'No token provided' });

//   const token = authHeader.split(' ')[1];
//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded; // { id, role, iat, exp }
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Invalid or expired token' });
//   }
// };


const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // add user info to req
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};
