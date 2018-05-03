import express from 'express';
const router = express.Router();

function index(req, res) {
  const { _io: io } = process;
  const connectedSockets = io.sockets.clients().sockets;
  const users = [];
  const iterator = Object.keys(connectedSockets);
  iterator.forEach(key => users.push(connectedSockets[key]._user));

  res.json({ data: users });
}

router.get('/', index);

export default router;
