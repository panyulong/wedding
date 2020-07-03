const server = {
    dist:'./wedding',
    host:'127.0.0.1',
    port:21,
    username:'ftpuser',
    password:'123456',
    path:'/web'    
}
const scpClient = require('scp2');
const Client = require('ssh2').Client;
var conn = new Client();
console.log('Start ftp...')
conn
  .on('ready', function() {
    // rm 删除dist文件
    conn.exec('rm -rf /web/1.txt', function(err,stream) {
      if (err) throw err;
      stream.on('close', function(code, signal) {
          scpClient.scp(server.dist, {
              host: server.host,
              port: server.port,
              username: server.username,
              password: server.password,
              path: server.path
            },
            function(err) {
              if (err) {
                console.log('发布失败.\n');
                throw err;
              } else {
                console.log('发布成功.\n');
              }
            }
          );
          conn.end();
        })
        .on('data', function(data) {
          console.log('STDOUT: ' + data);
        })
        .stderr.on('data', function(data) {
          console.log('STDERR: ' + data);
        });
    });
  })
  .connect({
    host: server.host,
    port: server.port,
    username: server.username,
    password: server.password
  });