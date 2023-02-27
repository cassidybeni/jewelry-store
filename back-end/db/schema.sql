DROP DATABASE IF EXISTS jewelry_dev;
CREATE DATABASE jewelry_dev;

\c jewelry_dev;

CREATE TABLE bracelets (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image BYTEA NOT NULL,
    description TEXT NOT NULL,
    details TEXT[] NOT NULL,
    price TEXT NOT NULL
);