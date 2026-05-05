/*
  # Create blog-images storage bucket

  Creates a public storage bucket for blog cover images.
  Allows authenticated uploads and public reads.
*/

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-images',
  'blog-images',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO NOTHING;

-- Public read
CREATE POLICY "Public can view blog images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'blog-images');

-- Service role can insert (uploads go through edge function)
CREATE POLICY "Service role can upload blog images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Service role can delete blog images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'blog-images');
