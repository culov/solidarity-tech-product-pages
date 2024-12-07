### Installation Instructions

```bundle install```

Make sure to install and run redis and elasticsearch for everything to work properly:

```sh
# Install and start Redis
brew install redis
brew services start redis

# Tap the Elastic repository and install Elasticsearch
brew tap elastic/tap
brew install elastic/tap/elasticsearch-full
brew services start elastic/tap/elasticsearch-full

```
# Troubleshooting

### M3/Apple Silicon Errors
 - Pointer Types in some gems can be fixed like:

``` gem install msgpack -v 1.4.3 -- --with-cflags="-Wno-incompatible-pointer-types" ```

### Malloc error
If you encouter a malloc problem:

 - ruby(55390,0x16fe33000) malloc: double free for ptr 0x123abfe00

And your server is killed, it might be related to the **OpenSSL** in the system, worth checking.
