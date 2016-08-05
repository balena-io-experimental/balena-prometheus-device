# Start the node exporter
echo "Your application code should go here!"
cd /etc/node_exporter-$NODE_EXPORTER_VERSION.$DIST_ARCH \
  && ./node_exporter -web.listen-address ":80"
