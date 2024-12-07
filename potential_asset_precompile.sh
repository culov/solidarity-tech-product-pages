# scripts/potential_asset_precompile.sh
#!/bin/bash


if [ ${RAILS_ENV} = "production" ]; then 
  
  # yarn build

  # Precompile assets
	SECRET_KEY_BASE=`bundle exec rails secret` bundle exec rails assets:precompile


  # Variables
  bucket_name="solidarity.tech.cdn"  # Replace with your S3 bucket name
  assets_directory="public/assets"   # Replace with the path to your precompiled assets
  # packs_directory="public/packs"
  
  # AWS CLI command to sync the assets directory to the S3 bucket
  aws s3 sync $assets_directory s3://$bucket_name/assets/
  # aws s3 sync $packs_directory s3://$bucket_name/packs/

  # Optional: Output a message on successful upload
  if [ $? -eq 0 ]; then
      echo "Assets successfully uploaded to S3 bucket: $bucket_name"
  else
      echo "Failed to upload assets to S3 bucket: $bucket_name"
  fi


else
  echo "argument is not, so not running precompile"
fi