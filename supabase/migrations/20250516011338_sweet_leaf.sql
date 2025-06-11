/*
  # Create submissions table for insurance quote requests

  1. New Tables
    - `submissions`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text)
      - `insurance_type` (text)
      - `message` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `submissions` table
    - Add policy for authenticated users to read all submissions
    - Add policy for authenticated users to delete submissions
*/

CREATE TABLE IF NOT EXISTS submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  insurance_type text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read submissions"
  ON submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete submissions"
  ON submissions
  FOR DELETE
  TO authenticated
  USING (true);