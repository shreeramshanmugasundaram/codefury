const getprofile = async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      console.log(token);
  
      let decoded;
      try {
        decoded = jwt.verify(token, jsonKey);
      } catch (err) {
        return res.status(401).json({ status: 'error', message: 'Invalid token' });
      }
  
      const userId = decoded.id;
      console.log(userId);
  
      let user;
      try {
        user = await User.findById(userId);
        res.send(user)
      } catch (error) {
        console.log('Error:', error.message);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
      }}catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
      }
    };
    export default getprofile;
    