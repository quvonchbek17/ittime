CREATE EXTENSION "uuid-ossp";
CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    user_name VARCHAR(255),
    user_fullname VARCHAR(255),
    user_email VARCHAR(255),
    user_password VARCHAR(255),
    user_phone VARCHAR(255)
);

CREATE TABLE verifyemail(
    verify_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    verify_email VARCHAR(255),
    verify_number VARCHAR(255)
);
