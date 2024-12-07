# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')


Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'builds')


Rails.application.config.assets.precompile += %w(a-gem.css a-gem.js b-gem.js)


Rails.application.config.assets.precompile += ["marketing/*"]
# Rails.application.config.assets.precompile += ["images/marketing/*"]
    # This block includes all js/css files, excluding gems,
    # under: app/assets, vendor/assets, lib/assets
    # unless they are partial files (e.g. "_file.sass")


Rails.application.config.assets.precompile << ["*.css", "*.js", "*.gif", "*.jpeg", "*.jpg", "*.png", "*.svg", "*.eot", "*.woff", "*.ttf", "*.woff2", "*.webp"]

Rails.application.config.assets.precompile +=  %w( /app/assets /vendor/assets /lib/assets )
# Rails.application.config.assets.precompile += Rails.application.assets


# Specify the types of files you want to include
file_types = %w(*.png *.jpg *.jpeg *.gif *.svg *.webp *.woff *.woff2 *.css *.js)

# Add files from app/assets
file_types.each do |type|
  Rails.application.config.assets.precompile += Dir.glob(Rails.root.join('app', 'assets', '**', type))
end

# Add files from vendor/assets
file_types.each do |type|
  Rails.application.config.assets.precompile += Dir.glob(Rails.root.join('vendor', 'assets', '**', type))
end

# Add files from lib/assets
file_types.each do |type|
  Rails.application.config.assets.precompile += Dir.glob(Rails.root.join('lib', 'assets', '**', type))
end

# Rails.application.config.assets.precompile << Proc.new { |path|
#       if path =~ /\.(css|js|gif|jpeg|jpg|png|svg|webp|woff|woff2)\z/
#         @assets ||= Rails.application.assets || Sprockets::Railtie.build_environment(Rails.application)

#         full_path = @assets.resolve(path)
#         aps = %w( /app/assets /vendor/assets /lib/assets )


#         if aps.any? {|ap| full_path.starts_with?("#{Rails.root}#{ap}")} &&
#             !path.starts_with?('_')
#           # puts "\tIncluding: " + full_path.slice(Rails.root.to_path.size..-1)
#           true
#         else
#           # puts "\tExcluding: " + full_path
#           false
#         end
#       else
#         false
#       end
# }



# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
