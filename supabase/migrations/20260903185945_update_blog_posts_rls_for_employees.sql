/*
# Update blog_posts RLS for shared employee access

## Purpose
Previously, blog_posts had owner-scoped RLS (each user could only CRUD their own posts).
Now, any authenticated employee should be able to create, edit, publish, and delete ALL blog posts.
This enables a team of 4 employees to collaborate on blog management.

## Changes
- Drops the owner-scoped SELECT/INSERT/UPDATE/DELETE policies
- Adds new policies:
  - SELECT: anyone can read published posts; authenticated users can read ALL posts (including drafts)
  - INSERT: any authenticated user can create posts
  - UPDATE: any authenticated user can update any post
  - DELETE: any authenticated user can delete any post
- Keeps user_id column and default for audit purposes (tracks who created a post)
*/

-- Drop old owner-scoped policies
DROP POLICY IF EXISTS "read_published_posts" ON blog_posts;
DROP POLICY IF EXISTS "read_own_posts" ON blog_posts;
DROP POLICY IF EXISTS "insert_own_posts" ON blog_posts;
DROP POLICY IF EXISTS "update_own_posts" ON blog_posts;
DROP POLICY IF EXISTS "delete_own_posts" ON blog_posts;

-- SELECT: anyone (anon + authenticated) can read published posts
CREATE POLICY "read_published_posts" ON blog_posts FOR SELECT
  TO anon, authenticated USING (published = true);

-- SELECT: authenticated employees can read ALL posts including drafts
CREATE POLICY "read_all_posts_authenticated" ON blog_posts FOR SELECT
  TO authenticated USING (true);

-- INSERT: any authenticated employee can create posts
CREATE POLICY "insert_posts_authenticated" ON blog_posts FOR INSERT
  TO authenticated WITH CHECK (true);

-- UPDATE: any authenticated employee can update any post
CREATE POLICY "update_posts_authenticated" ON blog_posts FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- DELETE: any authenticated employee can delete any post
CREATE POLICY "delete_posts_authenticated" ON blog_posts FOR DELETE
  TO authenticated USING (true);
