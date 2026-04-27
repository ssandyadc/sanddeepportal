/*
  # Fix leads INSERT policy to remove unrestricted access

  ## Problem
  The existing "Anyone can submit a lead" policy used `WITH CHECK (true)`, which
  effectively bypasses row-level security by allowing any insert without constraints.

  ## Changes
  - Drop the overly permissive INSERT policy on `leads`
  - Replace it with a restrictive policy that enforces valid lead submissions:
    - `name` must be non-empty
    - `phone` must be non-empty
    - `source` must be one of the known page sources
    - Prevents inserting arbitrary or malicious rows

  ## Security
  - Only rows with legitimate, non-empty contact details are allowed
  - Blocks blank/spam submissions at the database level
*/

DROP POLICY IF EXISTS "Anyone can submit a lead" ON leads;

CREATE POLICY "Anon can insert valid leads"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name <> '' AND
    phone <> '' AND
    source IN ('contact_page', 'home_page', 'services_page', 'pricing_page', 'beginner_program_page')
  );
