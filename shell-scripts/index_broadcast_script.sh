#!/bin/bash
json_file="tron.txt"

process_value() {
    local value=$1

    if [ -z "$value" ]; then
        echo "Skipping empty value"
        return
    fi

    echo "Processing value: $value"

    echo "Running command: /Users/adityatiwari/bitgo/bitgo-admin/bin/bgadmin indexer execute INDEX_TRANSACTION $value with input 'yes'"

    echo "yes" | /Users/adityatiwari/bitgo/bitgo-admin/bin/bgadmin indexer execute INDEX_TRANSACTION "$value"

    sleep 5

    echo "Running rebroadcastTransaction command"
    echo "yes" | /Users/adityatiwari/bitgo/bitgo-admin/bin/bgadmin indexer rebroadcastTransaction "$value"
}

# Read and parse the JSON file
jq -c 'to_entries[]' "$json_file" | while IFS= read -r entry; do
    key=$(echo "$entry" | jq -r '.key')
    values=$(echo "$entry" | jq -r '.value[]')

    echo "Key: $key"
    echo "Values: $values"

    for value in $values; do
        process_value "$value"
    done
done

# /Users/adityatiwari/bitgo/bitgo-admin/bin/bgadmin status
