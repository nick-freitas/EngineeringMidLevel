#!/usr/bin/env bash
mysql -u $MYSQL_USER -p$MYSQL_ROOT_PASSWORD < /tmp/dbcreation.sql
