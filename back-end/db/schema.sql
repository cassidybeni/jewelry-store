DROP DATABASE IF EXISTS jewelry_dev;
CREATE DATABASE jewelry_dev;

\c jewelry_dev;

CREATE TABLE bracelets (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image TEXT,
    description TEXT,
    details TEXT ARRAY,
    price TEXT
);

CREATE TABLE earrings (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image TEXT,
    description TEXT,
    details TEXT ARRAY,
    price TEXT
);

CREATE TABLE necklaces (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image TEXT,
    description TEXT,
    details TEXT ARRAY,
    price TEXT
);

CREATE TABLE rings (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image TEXT,
    description TEXT,
    details TEXT ARRAY,
    price TEXT
);

CREATE TABLE watches (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image TEXT,
    description TEXT,
    details TEXT ARRAY,
    price TEXT
);

CREATE TABLE recommendations (
    id SERIAL PRIMARY KEY,
    source_product_name VARCHAR(255),
    recommended_product_name VARCHAR(255),
    rating FLOAT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image TEXT,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);