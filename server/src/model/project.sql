CREATE TABLE [IF NOT EXISTS] project (
    project_id serial PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    users_limit SMALLINT MIN(1) DEFAULT 10,
    endpoint_limit SMALLINT MIN(1) DEFAULT 100,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
);

-- Hooks
CREATE TRIGGER set_updated_at BEFORE
UPDATE ON project 
FOR EACH ROW 
EXECUTE PROCEDURE trigger_set_timestamp();

