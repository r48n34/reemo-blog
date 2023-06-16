---
sidebar_position: 1
---

# Basic command 

## Download 

Download from:  
https://www.postgresql.org/download/

## Connect to SQL

```bash
psql -U <user_name>
psql -U postgres
```

## Basic command

### - List out all current Database
```bash
\l

       Name       |  Owner   | Encoding |                 Collate                 |                  Ctype                  |   Access privileges
------------------+----------+----------+-----------------------------------------+-----------------------------------------+-----------------------
 sad              | postgres | UTF8     | Chinese (Traditional)_Hong Kong SAR.950 | Chinese (Traditional)_Hong Kong SAR.950 |
 cry              | postgres | UTF8     | Chinese (Traditional)_Hong Kong SAR.950 | Chinese (Traditional)_Hong Kong SAR.950 |
 abc              | postgres | UTF8     | Chinese (Traditional)_Hong Kong SAR.950 | Chinese (Traditional)_Hong Kong SAR.950 |
```

### - Connect to target Database
```bash
\c <db_name>
\c sad

You are now connected to database "sad" as user "postgres".
```

### - List out all Tables
```bash
\d

                       List of relations
 Schema |              Name              |   Type   |  Owner
--------+--------------------------------+----------+----------
 public | apple                          | table    | postgres
 public | apple_id_seq                   | sequence | postgres
 public | counter_devices                | table    | postgres
 public | counter_devices_id_seq         | sequence | postgres
```

More details with `\d+`

```bash
\d+

                                           List of relations
 Schema |              Name              |   Type   |  Owner   | Persistence |    Size    | Description
--------+--------------------------------+----------+----------+-------------+------------+-------------
 public | apple                          | table    | postgres | permanent   | 8192 bytes |
 public | apple_id_seq                   | sequence | postgres | permanent   | 8192 bytes |
 public | counter_devices                | table    | postgres | permanent   | 8192 bytes |
```

### - List out tables details
```bash
\d <table_name>
\d apple

                                         Table "public.apple"
     Column     |           Type           | Collation | Nullable |              Default
----------------+--------------------------+-----------+----------+-----------------------------------
 id             | integer                  |           | not null | nextval('apple_id_seq'::regclass)
 name1          | character varying(255)   |           |          |
 level1         | character varying(255)   |           |          |
```

More details with `\d+`
```bash
\d+ <table_name>
\d+ apple

                                                             Table "public.apple"
     Column     |           Type           | Collation | Nullable |              Default              | Storage  | Stats target | Description
----------------+--------------------------+-----------+----------+-----------------------------------+----------+--------------+-------------
 id             | integer                  |           | not null | nextval('apple_id_seq'::regclass) | plain    |              |
 name1          | character varying(255)   |           |          |                                   | extended |              |
 level1         | character varying(255)   |           |          |                                   | extended |              |
```