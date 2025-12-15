-- Create portfolio_photos table
CREATE TABLE portfolio_photos (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    original_url TEXT NOT NULL,
    styled_url TEXT,
    title VARCHAR(255),
    description TEXT,
    is_processed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for category filtering
CREATE INDEX idx_portfolio_category ON portfolio_photos(category);

-- Create index for processed status
CREATE INDEX idx_portfolio_processed ON portfolio_photos(is_processed);
