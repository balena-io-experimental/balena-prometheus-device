# Start the application
node app/index.js

# Start the node exporter
cd /etc/node_exporter-$NODE_EXPORTER_VERSION.$DIST_ARCH \
  && ./node_exporter -web.listen-address ":80"
