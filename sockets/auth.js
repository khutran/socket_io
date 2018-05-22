export default function auth(data, socket, io) {
  console.log('running');
  if (socket._isAuth) {
    return;
  }

  socket._isAuth = true;
  socket._user = data;
}
