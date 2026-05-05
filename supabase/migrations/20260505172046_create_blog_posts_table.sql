/*
  # Create Blog Posts Table

  ## Summary
  Creates a `blog_posts` table for the GemPortalAssist blog section where admins
  can publish daily product news and updates.

  ## New Tables
  - `blog_posts`
    - `id` (uuid, primary key)
    - `title` (text) - Post headline
    - `slug` (text, unique) - URL-friendly identifier
    - `excerpt` (text) - Short summary shown on listing page
    - `content` (text) - Full post body (plain text / markdown)
    - `cover_image_url` (text) - Optional hero image URL
    - `category` (text) - e.g. "Product News", "GeM Updates", "Tips"
    - `published` (boolean, default false) - Draft vs live
    - `published_at` (timestamptz) - When post went live
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)

  ## Security
  - RLS enabled
  - Public SELECT only for published posts
  - INSERT / UPDATE / DELETE only for service_role (admin operations go through edge function)

  ## Notes
  1. Slugs must be unique — used for clean URLs like /blog/gem-updates-may-2026
  2. Posts with published=false are drafts and hidden from public
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  cover_image_url text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT 'General',
  published boolean NOT NULL DEFAULT false,
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Public can read published posts only
CREATE POLICY "Anyone can read published posts"
  ON blog_posts FOR SELECT
  USING (published = true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
