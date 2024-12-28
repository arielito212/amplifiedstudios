/*
  # Contact Form Database Setup

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `followers` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `status` (text) - For tracking submission status
  
  2. Security
    - Enable RLS on contact_submissions table
    - Add policy for inserting new submissions
    - Add policy for admin to read submissions
*/

-- Create the contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  followers text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow new submissions from anyone
CREATE POLICY "Allow anonymous submissions" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admins) can view submissions
CREATE POLICY "Allow authenticated users to view submissions" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);