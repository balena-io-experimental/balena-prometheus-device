## This is the device protion of the prometheus.io + resin.io demo application

More info can be found on the [resin-blog](https://resin.io/blog/prometheusv2)

### To Run:

1. Provision you're device(s) with resin.io
2. ```git clone git@github.com:resin-io-projects/resin-prometheus-device.git && cd resin-prometheus-device```
3. ```git add remote resin <your-resin-app-endpoint>``` 
4. ```git push resin master```
5. [Enable your devices resin web URL](http://docs.resin.io/runtime/runtime/#device-urls)

Of course, you'd typically run an actual application alongside the `node_exporter`. To do this you'd just add you app's logic to the [`start.sh`](https://github.com/resin-io-projects/resin-prometheus-device/blob/master/start.sh)

``` bash
# Start the node exporter
cd /etc/node_exporter-$NODE_EXPORTER_VERSION.$DIST_ARCH \
  && ./node_exporter -web.listen-address ":80" &
echo "Your application code should go here!"
```
