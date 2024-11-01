#!/bin/bash

ID=$CONTAINER_ID
VERSION=$VERSION

echo "Agent Container ID is $ID"

if [ -z "$ID" ]; then
  echo "Usage: $0 <id>"
  exit 1
fi

folder=$AGENT_BINARY_BUILD

deep_docker_copy() {
  echo "Copying $1 to $2"
  mkdir -p "$(dirname "$2")" && docker cp $ID:$1 "$2"
}

# delete folder if exists
rm -rf $folder

# create folder
mkdir -p $folder

copy_bin_amd64() {
  cp -R bin $folder/
}

copy_bin_arm64() {
  cp -R bin-arm64 $folder/bin
  cp $folder/bin/busybox $folder/bin/cat
  cp $folder/bin/busybox $folder/bin/chmod
  cp $folder/bin/busybox $folder/bin/cp
  cp $folder/bin/busybox $folder/bin/gzip
  cp $folder/bin/busybox $folder/bin/hostname
  cp $folder/bin/busybox $folder/bin/kill
  cp $folder/bin/busybox $folder/bin/ln
  cp $folder/bin/busybox $folder/bin/ls
  cp $folder/bin/busybox $folder/bin/mkdir
  cp $folder/bin/busybox $folder/bin/nice
  cp $folder/bin/busybox $folder/bin/rm
  cp $folder/bin/busybox $folder/bin/sed
  cp $folder/bin/busybox $folder/bin/sleep
  cp $folder/bin/busybox $folder/bin/tar
}

copy() {
  echo "Copying ..."

  architecture=$(uname -m)
  if [[ $architecture == "aarch64" || $architecture == "arm" ]]; then
    copy_bin_arm64
  else
    copy_bin_amd64
  fi

  deep_docker_copy "/bin/deepfenced" "$folder/bin/."
  deep_docker_copy "/home/." "$folder/home/."
  deep_docker_copy "/opt/." "$folder/opt/."
  deep_docker_copy "/usr/bin/." "$folder/usr/bin/."
  deep_docker_copy "/usr/local/bin/." "$folder/usr/local/bin/."
  deep_docker_copy "/usr/local/discovery/." "$folder/usr/local/discovery/."
  # copy cool stuffs from /etc
  deep_docker_copy "/etc/filebeat/." "$folder/etc/filebeat/."
  deep_docker_copy "/etc/logrotate.d/." "$folder/etc/logrotate.d/."
  deep_docker_copy "/etc/supervisor/." "$folder/etc/supervisor/."

  echo "Copy some required binaries..."
  cp start_deepfenced.sh $folder/home/deepfence/

  # delete rules.tar (not needed)
  rm -rf $folder/home/deepfence/rules.tar.gz
}

copy

echo "Creating tar.gz file..."
binary_filename="$AGENT_BINARY_DIST/$AGENT_BINARY_FILENAME"
rm -rf $binary_filename
cd $folder
tar -czvf $binary_filename .

cd ../
# rm -rf $folder

echo "Done"
