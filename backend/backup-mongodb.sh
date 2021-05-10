export CONTAINER_NAME="farshaxan_db_1"
export DATABASE_NAME="farshaxan"
export BACKUP_LOCATION="/root/DBBackups"
export TIMESTAMP=$(date +'%Y%m%d%H%M%S')
docker exec -t ${CONTAINER_NAME} mongodump --out /data/db/${DATABASE_NAME}-backup-${TIMESTAMP} --db ${DATABASE_NAME}
docker cp ${CONTAINER_NAME}:/data/db/${DATABASE_NAME}-backup-${TIMESTAMP} ${BACKUP_LOCATION}