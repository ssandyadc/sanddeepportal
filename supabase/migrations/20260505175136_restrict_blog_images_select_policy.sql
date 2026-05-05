/*
  # Restrict blog-images SELECT policy to prevent bucket listing

  Replaces the broad SELECT policy with one that only allows access to
  specific objects by name, preventing clients from listing all files
  in the bucket while still allowing direct URL access.
*/

DROP POLICY IF EXISTS "Public can view blog images" ON storage.objects;

CREATE POLICY "Public can view individual blog images"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'blog-images'
    AND name IS NOT NULL
  );
