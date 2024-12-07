# Override the default asset path helper
module ActionView
  module Helpers
    module AssetTagHelper
      def compute_asset_path(source, options = {})
        super(source, options).sub('/assets/', '/')
      end
    end
  end
end
