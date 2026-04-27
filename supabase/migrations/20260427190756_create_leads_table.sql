/*
  # Create leads table for GeM Pro consultancy

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text, required) - Full name of the lead
      - `phone` (text, required) - Contact phone number
      - `email` (text, optional) - Email address
      - `business_type` (text) - Type of business (Graduate/Housewife, MSME, Trader, etc.)
      - `message` (text) - Additional message or query
      - `source` (text) - Page or source from which lead came
      - `created_at` (timestamp) - When the lead was submitted

  2. Security
    - Enable RLS on `leads` table
    - Add policy for anonymous users to insert leads (public form submission)
    - No read policy for anonymous users (only service role can read)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text DEFAULT '',
  business_type text DEFAULT '',
  message text DEFAULT '',
  source text DEFAULT 'contact_page',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
