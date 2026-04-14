-- ============================================================
-- Perfect Property Media — Supabase Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- LEADS — Contact form submissions
-- ============================================================
CREATE TABLE IF NOT EXISTS leads (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name     TEXT NOT NULL,
  phone         TEXT NOT NULL,
  email         TEXT NOT NULL,
  company_name  TEXT,
  service       TEXT NOT NULL,
  requirements  TEXT,
  status        TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'booked', 'closed')),
  notes         TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Index for filtering by status and date
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created ON leads(created_at DESC);

-- RLS: Anon can insert (for form), only admin can read
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON leads
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow service role full access" ON leads
  USING (auth.role() = 'service_role');

-- ============================================================
-- PORTFOLIO ITEMS
-- ============================================================
CREATE TABLE IF NOT EXISTS portfolio_items (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title         TEXT NOT NULL,
  category      TEXT NOT NULL CHECK (category IN ('Residential', 'Commercial', 'Drone', 'Virtual', 'Portraits')),
  image_prompt  TEXT NOT NULL,
  description   TEXT,
  location      TEXT,
  featured      BOOLEAN DEFAULT FALSE,
  sort_order    INTEGER DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_portfolio_category ON portfolio_items(category);
CREATE INDEX idx_portfolio_featured ON portfolio_items(featured);

ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read portfolio" ON portfolio_items
  FOR SELECT TO anon USING (true);

CREATE POLICY "Service role manage portfolio" ON portfolio_items
  USING (auth.role() = 'service_role');

-- ============================================================
-- BLOG POSTS
-- ============================================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title         TEXT NOT NULL,
  slug          TEXT UNIQUE NOT NULL,
  excerpt       TEXT NOT NULL,
  content       TEXT NOT NULL,
  cover_prompt  TEXT NOT NULL,
  author        TEXT NOT NULL,
  published_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW(),
  tags          TEXT[] DEFAULT '{}',
  featured      BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_blog_slug ON blog_posts(slug);
CREATE INDEX idx_blog_published ON blog_posts(published_at DESC);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read blog" ON blog_posts
  FOR SELECT TO anon USING (true);

CREATE POLICY "Service role manage blog" ON blog_posts
  USING (auth.role() = 'service_role');

-- ============================================================
-- TESTIMONIALS
-- ============================================================
CREATE TABLE IF NOT EXISTS testimonials (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name          TEXT NOT NULL,
  role          TEXT NOT NULL,
  company       TEXT NOT NULL,
  rating        INTEGER DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  review        TEXT NOT NULL,
  avatar_prompt TEXT NOT NULL,
  approved      BOOLEAN DEFAULT TRUE,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read approved testimonials" ON testimonials
  FOR SELECT TO anon USING (approved = TRUE);

CREATE POLICY "Service role manage testimonials" ON testimonials
  USING (auth.role() = 'service_role');

-- ============================================================
-- SEED DATA — Portfolio
-- ============================================================
INSERT INTO portfolio_items (title, category, image_prompt, location, featured) VALUES
  ('Beachfront Luxury Home', 'Residential', 'luxury beachfront property exterior twilight real estate photography australia warm lights', 'Brighton, VIC', TRUE),
  ('Corporate Tower — CBD', 'Commercial', 'modern commercial glass office tower CBD exterior professional architecture photography blue sky', 'Melbourne, VIC', TRUE),
  ('Aerial Estate Shoot', 'Drone', 'aerial drone shot large luxury estate property suburb australia bird eye view green gardens pool', 'Toorak, VIC', TRUE),
  ('Virtual Living Room Staging', 'Virtual', '3D rendered luxury living room virtual staging interior design modern furniture photorealistic', 'Digital / Remote', FALSE),
  ('Agent Team Portraits', 'Portraits', 'professional corporate portrait headshot real estate agent team confident smile business attire', 'South Yarra, VIC', FALSE),
  ('Airbnb Rental — St Kilda', 'Residential', 'airbnb holiday rental cozy modern bedroom interior professional photography bright natural light', 'St Kilda, VIC', FALSE);

-- ============================================================
-- SEED DATA — Blog Posts
-- ============================================================
INSERT INTO blog_posts (title, slug, excerpt, content, cover_prompt, author, tags, featured) VALUES
  (
    '10 Tips for Stunning Real Estate Photography in 2026',
    'tips-real-estate-photography-2026',
    'Master the art of real estate photography with these proven techniques — from lighting and angles to post-processing secrets that make properties irresistible.',
    '## Introduction\n\nReal estate photography has never been more competitive. With buyers browsing hundreds of listings online, your photography needs to stop the scroll and create an emotional connection...',
    'real estate photographer working camera equipment professional property interior bright natural light',
    'David Nguyen',
    ARRAY['Photography Tips', 'Real Estate', 'Melbourne'],
    TRUE
  ),
  (
    'Why Drone Aerial Photography Sells Properties 40% Faster',
    'drone-aerial-photography-sells-faster',
    'New research confirms what agents have long suspected — properties with professional drone footage generate significantly more enquiries and achieve higher sale prices.',
    '## The Data\n\nA 2026 study of 2,400 Melbourne property listings found that homes marketed with professional drone aerial photography...',
    'drone aerial photography real estate tips flying suburb australia clear blue sky neighbourhood',
    'Sarah Mitchell',
    ARRAY['Drone', 'Real Estate', 'Data'],
    FALSE
  ),
  (
    'Virtual Staging vs Physical Staging: The 2026 Guide',
    'virtual-staging-vs-physical-staging-guide',
    'We break down the costs, timelines, and results of digital vs traditional staging — and why Melbourne agencies are switching to virtual staging in record numbers.',
    '## The Shift to Virtual\n\nIn 2026, over 60% of Melbourne real estate agencies now use virtual staging for at least some of their listings...',
    'virtual staging before after empty living room digital furniture 3D rendering comparison modern',
    'Emma Clarke',
    ARRAY['Virtual Staging', 'Tips', 'Real Estate'],
    FALSE
  );

-- ============================================================
-- SEED DATA — Testimonials
-- ============================================================
INSERT INTO testimonials (name, role, company, rating, review, avatar_prompt) VALUES
  ('Sarah Mitchell', 'Principal Agent', 'Ray White Brighton', 5, 'Perfect Property Media delivered stunning photos with next-day turnaround. The quality blew me away — our listings sell 30% faster now.', 'professional headshot portrait woman real estate agent confident smile office background'),
  ('James Kowalski', 'Director', 'Barry Plant Hawthorn', 5, 'We''ve used Perfect Property Media for over 3 years. Their drone work is exceptional and the virtual staging has completely transformed how we present off-the-plan properties.', 'professional headshot portrait man property agent confident smile business attire'),
  ('Lisa Chen', 'Marketing Manager', 'Hocking Stuart Balwyn', 5, 'Incredible team — professional, creative, and always on time. The twilight photography they delivered for our premium listings was absolutely breathtaking.', 'professional headshot portrait woman marketing manager confident smile studio background');
