RGeo::ActiveRecord::SpatialFactoryStore.instance.tap do |config|
  # By default, use the GEOS implementation for spatial columns.
  #Had to add uses_decimals: true, to allow precision to ensure all valid polygons can be deserialized
  # uses_decimals: true
  config.default = RGeo::Geographic.spherical_factory(srid: 4326, uses_lenient_assertions: true)
end