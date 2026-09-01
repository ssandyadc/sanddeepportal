/*
# Add user_id and auth-scoped RLS to blog_posts

1. Changes
- Adds `user_id` column (uuid, NOT NULL, defaults to auth.uid()) to `blog_posts`
- Adds foreign key from `blog_posts.user_id` to `auth.users.id` with CASCADE delete
- Removes old permissive policies that allowed service_role full access
- Adds new policies: authenticated users can CRUD their own posts; anon/authenticated can read published posts
2. Security
- RLS stays enabled on `blog_posts`
- SELECT: anyone (anon + authenticated) can read published posts; authenticated can read all their own posts (published or not)
- INSERT/UPDATE/DELETE: authenticated users can only modify their own posts
*/

-- Add user_id column with default to auth.uid()
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE;
  END IF;
END $$;

-- Drop old policies
DROP POLICY IF EXISTS "Anyone can read published posts" ON blog_posts;
DROP POLICY IF EXISTS "Public can read published posts" ON blog_posts;
DROP POLICY IF EXISTS "Service role can delete posts" ON blog_posts;
DROP POLICY IF EXISTS "Service role can insert posts" ON blog_posts;
DROP POLICY IF EXISTS "Service role can update posts" ON blog_posts;

-- SELECT: anyone can read published posts
CREATE POLICY "read_published_posts" ON blog_posts FOR SELECT
  TO anon, authenticated USING (published = true);

-- SELECT: authenticated users can read their own posts (including drafts)
CREATE POLICY "read_own_posts" ON blog_posts FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

-- INSERT: authenticated users can create their own posts
CREATE POLICY "insert_own_posts" ON blog_posts FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

-- UPDATE: authenticated users can update their own posts
CREATE POLICY "update_own_posts" ON blog_posts FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- DELETE: authenticated users can delete their own posts
CREATE POLICY "delete_own_posts" ON blog_posts FOR DELETE
  TO authenticated USING (auth.uid() = user_id);
